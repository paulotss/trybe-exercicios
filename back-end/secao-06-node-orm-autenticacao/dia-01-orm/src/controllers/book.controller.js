const { bookService } = require('../services');

const getAll = async (_req, res) => {
  const result = await bookService.getAll();
  res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await bookService.getById(id);
  if(!result) return res.status(404).json({ message: 'Book not found' });
  res.status(200).json(result);
}

const create = async (req, res) => {
  const book = req.body;
  const result = await bookService.create(book);
  res.status(201).json(result);
}

const update = async (req, res) => {
  const { id } = req.params;
  const book = req.body;
  const result = await bookService.update(id, book);
  res.status(201).json(result);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
};