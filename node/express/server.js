// ################################################### BÁSICO PARA COLOCAR O SERVIDOR ONLINE ###################################################
// 1 - Importar o Express;
const express = require("express");
// 2 - Crio uma variável de nome qualquer para carregar o Express;
const app = express();
// 3 - Atribuir porta ao Express
app.listen(3000);
// #############################################################################################################################################

// ################################################## ADICIONANDO PRIMEIRA RESPOSTA DO SERVIDOR ################################################

// CRUD -> CREATE, READ, UPDATE, DELETE
// 4 - Adiciono o método a ser utilizado. Adicione os parâmetros (x, y, z). Rota, Middlewares, Função com parâmetros requisição e resposta.
app.get("/", (req, res) => {
  res.send("Hello World!"); //Resposta a ser enviada
});
