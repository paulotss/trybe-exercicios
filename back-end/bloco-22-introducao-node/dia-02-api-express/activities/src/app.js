const express = require('express');

const app = express();

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

app.get("/myActivities/:id", (req, res) => {
  const { id } = req.params;
  const result = activities.find((val) => val.id === Number(id));
  res.status(200).json({ result });
});

app.get("/myActivities", (req, res) => {
  res.status(200).json([ ...activities ]);
});

module.exports = app;