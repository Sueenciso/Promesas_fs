
const fs = require("fs");

const borrarFile = (pathDelete) => {
  return new Promise((resolve, reject) => {
    if (!pathDelete) {
      console.error("El archivo debe existir para ser eliminado");
    } else {
      fs.unlink(pathDelete, (err) => {
        if (!err) resolve(`Archivo ${pathDelete} eliminado correctamente`);
        else reject(err);
      });
    }
  });
};
const borrar = async () => {
  const data = await borrarFile("file.json");
  console.log(data);
};

borrar();
