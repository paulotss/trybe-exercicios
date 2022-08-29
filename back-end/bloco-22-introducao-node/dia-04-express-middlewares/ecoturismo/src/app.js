const express = require('express');
const fs = require('fs/promises');
const activitiesRoute = require('./routes/activitiesRoute');
const { join } = require('path');
const crypto = require('crypto');
require('express-async-errors');

const app = express();

app.use(express.json());
app.use('/activities', activitiesRoute);

app.post('/signup', async (req, res) => {
  const properties = ["email", "password", "firstName", "phone"];
  if(properties.every((p) => p in req.body)) {
    const contentFile = await fs.readFile(join(__dirname, './files/users.json'), 'utf-8');
    const users = JSON.parse(contentFile);
    const token = crypto.randomBytes(8).toString('hex');
    req.body.token = token;
    users.push(req.body);
    await fs.writeFile(join(__dirname, './files/users.json'), JSON.stringify(users));
    return res.status(200).json({ "token": `"${token}"` });
  } else {
    return res.sendStatus(401);
  }
})

module.exports = app;