// server.js
const express = require('express');
const connectDB = require('./config/database');
require('dotenv').config();

const app = express();

// Verbindung zur Datenbank herstellen
connectDB();

// Middleware
app.use(express.json());

// Routen
app.get('/', (req, res) => {
  res.send('Willkommen zur Pool pH-Tracker API');
});

// TODO: Hier weitere Routen hinzufügen

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));