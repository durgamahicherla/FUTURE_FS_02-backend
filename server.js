const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ── MIDDLEWARE ──
app.use(cors());
app.use(express.json());

// ── ROUTES ──
app.use('/api/auth', require('./routes/auth'));
app.use('/api/leads', require('./routes/leads'));

// ── TEST ROUTE ──
app.get('/', (req, res) => {
  res.json({ message: '🚀 CRM Backend Running with Supabase!' });
});

// ── START SERVER ──
app.listen(process.env.PORT, () => {
  console.log(`✅ Server running on port ${process.env.PORT}`);
});