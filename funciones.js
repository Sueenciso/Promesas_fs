const fs = require("fs"); // CommonJS
const { resolve } = require("path");

const createFile = (pathCreate, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(pathCreate, content, {}, (err, data) => {
      if (!err) resolve(`Archivo ${pathCreate} creado con exito.`, data);
      else reject(err);
    });
  });
};
const crear = async () => {
  const data = await createFile("file.json", "texto del file");
  console.log(data);
};

const leerFile = (pathread) => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathread, { encoding: "utf-8" }, (err, data) => {
      if (!err) resolve(data);
      else reject(err);
    });
  });
};
const leer = async () => {
  const data = await leerFile("file.json");
  console.log(data);
};

crear();
leer();