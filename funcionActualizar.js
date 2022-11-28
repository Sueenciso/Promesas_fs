const fs = require("fs"); 
const actualizarFile = (pathUp, content) => {
    return new Promise((resolve, reject) => {
      if (content) {
        fs.appendFile(pathUp, content, { encoding: "utf-8" }, (err) => {
            console.log("Se agregó: ",content);
        });
      } else {
        console.log("los datos para modificar son obligatorios");
      }
    });
  };
  const actualizar = async () => {
    const data = await actualizarFile("file.json", " Mas texto añadido");
    console.log(data);
  };
  actualizar();