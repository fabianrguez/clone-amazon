const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HctNGEjzuzuK8BYL3rHl7NDrQmKvBhsxA6W1Kj5lj69Jhz8JEzFV5wUZe6zrQeOvc49W8JMpgQkENEauBuXvYxr00EKhBxXS0'
);
const serverless = require('serverless-http');

const app = express();

app.use(
  cors({ origin: ['http://localhost:3000', 'https://clone-ama-zon.web.app'] })
);
app.use(express.json());

app.post('/.netlify/functions/api/payments/create', async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents
    .create({
      amount: total,
      currency: 'usd',
    })
    .catch((error) => console.log(error));
  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

module.exports.handler = serverless(app);
