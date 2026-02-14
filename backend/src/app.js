const express = require('express');
const app = express();

app.use(express.json());

const authRoutes = require('./rotas/authRoutes');
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ status: 'AGRODIGITAL API online' });
});

module.exports = app;
