const { bookService } = require('../services');

const getAll = async (_req, res) => {
  const result = await bookService.getAll();
  res.status(200).json(result);
};

module.exports = {
  getAll,
};