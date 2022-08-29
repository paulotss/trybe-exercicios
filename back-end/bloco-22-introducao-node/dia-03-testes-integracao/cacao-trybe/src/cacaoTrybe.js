const fs = require('fs').promises;
const { join } = require('path');

const readCacaoTrybe = async () => {
  const path = "./files/cacaoTrybeFile.json";
  const content = await fs.readFile(join(__dirname, path), "utf-8");
  return JSON.parse(content);
}

const getAllChocolates = async () => {
  const content = await readCacaoTrybe();
  return content.chocolates;
}

const getTotalChocolates = async () => {
  const content = await readCacaoTrybe();
  return content.chocolates.length;
}

module.exports = {
  getAllChocolates,
  getTotalChocolates,
}