const express = require('express');
const fs = require('fs/promises');
const { join } = require('path');
const { 
  nameValidation,
  priceValidation,
  descriptionValidation,
  createdAtValidation,
  ratingValidation,
  difficultyValidation,
  tokenValidation
} = require('../middlewares/activitiesValidation');

const router = express.Router();

router.use(nameValidation);
router.use(priceValidation);
router.use(descriptionValidation);
router.use(createdAtValidation);
router.use(ratingValidation);
router.use(difficultyValidation);
router.use(tokenValidation);

router.post('/', async (req, res) => {
  const contentFile = await fs.readFile(join(__dirname, '../files/ecoturismo.json'), 'utf-8');
  const activities = JSON.parse(contentFile);
  activities.push(req.body);
  await fs.writeFile(join(__dirname, '../files/ecoturismo.json'), JSON.stringify(activities));
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
});

module.exports = router;