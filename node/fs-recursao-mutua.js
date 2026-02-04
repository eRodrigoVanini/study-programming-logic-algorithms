const fs = require("fs").promises;
const path = require("path");

//File System para varrer as pastas;
//.then porque é uma promise;
//.catch para tratar caso erro.

//Sem o path ele leria a pasta 'errada'. Ele retona o conteúdo da pasta 'pai' learning-path, enquanto eu quero o conteúdo da minha pasta 'node'.
/*
fs.readdir("./")
  .then((files) => console.log(files))
  .catch((e) => console.log(e));
*/

//Preciso passar o caminho ABSOLUTO com path
fs.readdir(path.resolve(__dirname))
  .then((files) => console.log(files))
  .catch((e) => console.log(e));
