const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'AGRODIGITAL API online' });
});

const authRoutes = require('./routes/authRoutes');

app.use('/api/auth', authRoutes);

module.exports = app;
