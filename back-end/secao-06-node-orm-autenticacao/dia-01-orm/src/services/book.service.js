const { Book } = require('../models');

const getAll = async () => {
  const result = Book.findAll();
  return result;
};

module.exports = {
  getAll,
};