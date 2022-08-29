const activitiesValidation = (req, res, next) => {
  const properties = ["name"];
  if(properties.every((p) => p in req.body)) {
    if(req.body.name.length >= 4) {
      next();
    } else {
      return res.status(400).json({ "message": "O campo name deve ter pelo menos 4 caracteres" });
    }
  } else {
    return res.status(400).json({ "message": "O campo name é obrigatório" });
  }
}

module.exports = activitiesValidation;