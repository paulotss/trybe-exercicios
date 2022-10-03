const express = require('express');
const app = express();
const { bookRouter } = require('./routers');

app.use(express.json());

app.use('/books', bookRouter);

module.exports = app;