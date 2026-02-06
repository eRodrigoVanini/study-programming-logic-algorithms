const fs = require("fs").promises;
const path = require("path");

//==============File System para varrer as pastas;
//==========.then porque é uma promise;
//====.catch para tratar caso erro.

//==========Sem o path ele leria a pasta 'errada'. Ele retona o conteúdo da pasta 'pai' learning-path, enquanto eu quero o conteúdo da minha pasta 'node'.
/*
fs.readdir("./") 
  .then((files) => console.log(files))
  .catch((e) => console.log(e));
*/

//==========Precisaria passar o caminho ABSOLUTO com path
/*fs.readdir(path.resolve(__dirname))
  .then((files) => console.log(files))
  .catch((e) => console.log(e));
*/

//========= Vou otimizar criando uma função
//====Uma alternativa ao then/catch é o async await
async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    if (stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }

    console.log(fileFullPath, stats.isDirectory());
  }
}

readdir("/Users/arqrv/Documents/00-dev/projetos");
