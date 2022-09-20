const { bookService } = require('../services');

const hasQueryAuthor = async (req, res, next) => {
  const { author } = req.query;
  if (author) {
    const result = await bookService.getByAuthor(author);
    return res.status(200).json(result);
  }
  next();
}

module.exports = hasQueryAuthor;