const { bookService } = require('../services');

const getAll = async (_req, res) => {
  const result = await bookService.getAll();
  res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await bookService.getById(id);
  if(result.length < 1) return res.status(404).json({ message: 'Book not found' });
  res.status(200).json(result);
}

module.exports = {
  getAll,
  getById,
};