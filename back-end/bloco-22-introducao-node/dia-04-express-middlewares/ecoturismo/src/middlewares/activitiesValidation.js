const fs = require('fs/promises');
const { join } = require('path');

const nameValidation = (req, res, next) => {
  const property = "name";
  if(property in req.body) {
    if(req.body.name.length >= 4) {
      next();
    } else {
      return res.status(400).json({ "message": "O campo name deve ter pelo menos 4 caracteres" });
    }
  } else {
    return res.status(400).json({ "message": "O campo name é obrigatório" });
  }
}

const priceValidation = (req, res, next) => {
  const property = "price";
  if(property in req.body) {
    if(Number(req.body.price) >= 0) {
      next();
    } else {
      return res.status(400).json({ "message": "O campo price deve ser um número maior ou igual a zero" });
    }
  } else {
    return res.status(400).json({ "message": "O campo price é obrigatório" });
  }
}

const descriptionValidation = (req, res, next) => {
  const properties = ["createdAt", "rating", "difficulty"];
  if(!("description" in req.body)) {
    return res.status(400).json({ "message": "O campo description é obrigatório" });
  }
  properties.forEach((prop) => {
    if(!(prop in req.body.description)) {
      return res.status(400).json({ "message": `O campo ${prop} é obrigatório` });
    }
  })
  next();
}

//Função não cumpre com o requisito, só para ilustrar
const createdAtValidation = (req, res, next) => {
  const date = Date.parse(req.body.description.createdAt);
  if(isNaN(date)) {
    return res.status(400).json({"message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'"});
  } else {
    next();
  }
}

const ratingValidation = (req, res, next) => {
  const rating = req.body.description.rating;
  if(Number(rating) < 1 || Number(rating) > 5) {
    return res.status(400).json({ "message": "O campo rating deve ser um número inteiro entre 1 e 5" });
  } else {
    next();
  }
}

const difficultyValidation = (req, res, next) => {
  const properties = [ "Fácil", "Médio", "Difícil"];
  if(properties.some((p) => p === req.body.description.difficulty)) {
    next();
  } else {
    return res.status(400).json({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
  }
}

const tokenValidation = async (req, res, next) => {
  const token = req.header('X-API-TOKEN');
  const contentFile = await fs.readFile(join(__dirname, '../files/users.json'), 'utf-8');
  const users = JSON.parse(contentFile);
  if(users.some((u) => u.token === token)) {
    next();
  } else {
    return res.status(401).json({ "message": "Token inválido!" });
  }
}

module.exports = {
  nameValidation,
  priceValidation,
  descriptionValidation,
  createdAtValidation,
  ratingValidation,
  difficultyValidation,
  tokenValidation,
};