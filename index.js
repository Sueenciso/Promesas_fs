const fs = require("fs");

const simiFetch = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (!err) resolve(data);
      else reject(err);
    });
  });
};

simiFetch("jsontext.json")
  .then((data) => {
    return data;
  }).then((data)=>{
    console.log(JSON.parse(data));
  })
  .catch((err) => {
    console.log("proceso fallido");
    console.error(err);
  });
