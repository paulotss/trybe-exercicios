const express = require('express');
const { getAllChocolates, getTotalChocolates } = require('./cacaoTrybe');

const app = express();

app.get('/chocolates', async (req, res) => {
  const chocolates = await getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (req, res) => {
  const totalChocolates = await getTotalChocolates();
  res.status(200).json({ totalChocolates });
})

module.exports = app;