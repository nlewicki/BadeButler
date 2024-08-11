// models/Measurement.js
const mongoose = require('mongoose');

const measurementSchema = new mongoose.Schema({
  location: {
    type: String,
    enum: ['pool', 'jaccuzi'],
    required: true
  },
  measuredAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  pHValue: {
    type: Number,
    enum: [8.2, 7.8, 7.6, 7.4, 7.2, 7.0, 6.8],
    required: true
  },
  clValue: {
    type: Number,
    enum: [3.0, 2.0, 1.5, 1.0, 0.6, 0.3, 0.1],
    required: true
  }
});

module.exports = mongoose.model('Measurement', measurementSchema);