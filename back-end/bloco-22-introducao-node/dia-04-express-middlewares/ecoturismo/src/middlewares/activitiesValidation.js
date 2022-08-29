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

module.exports = {
  nameValidation,
  priceValidation
};