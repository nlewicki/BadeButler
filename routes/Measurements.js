const express = require('express');
const router = express.Router();
const Measurement = require('../models/Measurement');

// GET alle Messungen
router.get('/', async (req, res) => {
  try {
    const measurements = await Measurement.find();
    res.json(measurements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST neue Messung
router.post('/', async (req, res) => {
  const measurement = new Measurement({
    location: req.body.location, 
    pHValue: req.body.pHValue,
    clValue: req.body.clValue
  });

  try {
    const newMeasurement = await measurement.save();
    res.status(201).json(newMeasurement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Weitere Routen (GET by ID, PUT, DELETE) hier hinzufügen...

module.exports = router;