const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const PORT = 7865;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/available_payments', (req, res) => {
  const availablePayments = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.status(200).json(availablePayments);
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.status(200).send(`Welcome ${userName}`);
});

const server = app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = server;
