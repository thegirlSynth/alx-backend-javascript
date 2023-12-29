const express = require('express');
const app = express();

const PORT = 7865;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Payment methods for cart ${id}`);
});

const server = app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = server;
