const express = require('express');
const { bookController } = require('../controllers');
const { hasQueryAuthor } = require('../middlewares');

const router = express.Router();

router.get('/', hasQueryAuthor, bookController.getAll);
router.get('/:id', bookController.getById);
router.post('/', bookController.create);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.remove);

module.exports = router;