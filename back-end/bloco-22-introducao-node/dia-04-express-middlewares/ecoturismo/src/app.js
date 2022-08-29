const express = require('express');
const fs = require('fs/promises');
const { join } = require('path');
require('express-async-errors');
const { nameValidation, priceValidation, descriptionValidation } = require('./middlewares/activitiesValidation');

const app = express();

app.use(express.json());
app.use(nameValidation);
app.use(priceValidation);
app.use(descriptionValidation);

app.post('/activities', async (req, res) => {
  const contentFile = await fs.readFile(join(__dirname, './files/ecoturismo.json'), 'utf-8');
  const activities = JSON.parse(contentFile);
  activities.push(req.body);
  await fs.writeFile(join(__dirname, './files/ecoturismo.json'), JSON.stringify(activities));
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
});

module.exports = app;