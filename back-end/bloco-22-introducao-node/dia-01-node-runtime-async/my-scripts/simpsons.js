const fs = require("fs").promises;

const simpsons = async () => {
  let data = await fs.readFile("./simpsonsData.json", "utf-8");
  data = JSON.parse(data);
  return data;
}

const getSimpson = (id) => {
  const promise = new Promise(async (response, reject) => {
    let data = await simpsons();
    const result = data.find((val) => Number(val.id) === id);
    if(result) {
      return response(result)
    } else {
      return reject(new Error("Personagem não encontrado!"));
    }
  });
  return promise;
}

const delSimpsons = async (data) => {
  console.log(typeof data);
  const newData = data.filter((val) => Number(val.id) !== 10 && Number(val.id) !== 6);
  console.log(newData);
  await fs.writeFile("./simpsonsData.json", JSON.stringify(newData));
}

const simpsonFamily = async (data) => {
  const result = data.filter((val) => Number(val.id) >= 1 && Number(val.id) <= 4);
  await fs.writeFile("./simpsonsFamily.json", JSON.stringify(result));
}

const addSimpson = async (data) => {
  const simp = data.find((val) => val.name === "Nelson Muntz");
  let result = await fs.readFile("./simpsonsFamily.json", "utf-8");
  result = JSON.parse(result);
  result.push(simp);
  await fs.writeFile("./simpsonsFamily.json", JSON.stringify(result));
}

const subSimpson = async () => {
  let family = await fs.readFile("./simpsonsFamily.json", "utf-8");
  family = JSON.parse(family);
  family[family.length - 1] = {
    id: "5",
    name: "Maggie Simpson"
  }
  await fs.writeFile("./simpsonsFamily.json", JSON.stringify(family));
}

const show = async () => {

  const all = await simpsons();
  await delSimpsons(all);

  all.forEach((val) => {
    console.log(`${val.id} - ${val.name}`);
  });

  const result = await getSimpson(1);
  console.log(result);

  await simpsonFamily(all);
  await addSimpson(all);
  await subSimpson();

}

show();
