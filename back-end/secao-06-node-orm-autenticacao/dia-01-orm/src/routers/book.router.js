const express = require('express');
const { bookController } = require('../controllers');

const router = express.Router();

router.get('/', bookController.getAll);
router.get('/:id', bookController.getById);
router.post('/', bookController.create);

module.exports = router;