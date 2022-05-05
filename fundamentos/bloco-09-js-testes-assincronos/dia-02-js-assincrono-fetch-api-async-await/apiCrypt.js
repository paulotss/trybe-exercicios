const url = `https://api.coincap.io/v2/assets`;

const getCrypt = async () => {
  let response = await fetch(url);
  return response.json();
}

console.log(getCrypt());