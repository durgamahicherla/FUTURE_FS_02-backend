const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const supabase = require('../supabase');

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const { data: existing } = await supabase
      .from('users').select('id').eq('username', username).single();
    if (existing) return res.status(400).json({ message: 'User already exists' });
    const hashed = await bcrypt.hash(password, 10);
    const { error } = await supabase.from('users').insert([{ username, password: hashed }]);
    if (error) return res.status(500).json({ message: error.message });
    res.json({ message: '✅ User registered!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const { data: user } = await supabase
      .from('users').select('*').eq('username', username).single();
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, username: user.username });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;