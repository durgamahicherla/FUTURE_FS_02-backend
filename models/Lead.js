const mongoose = require('mongoose');
 
const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  source: {
    type: String,
    enum: ['Website', 'LinkedIn', 'Referral', 'Cold Call', 'Other'],
    default: 'Website'
  },
  status: {
    type: String,
    enum: ['New', 'Contacted', 'Converted', 'Lost'],
    default: 'New'
  },
  notes: { type: String, default: '' },
  followUpDate: { type: Date },
}, { timestamps: true });
 
module.exports = mongoose.model('Lead', leadSchema);