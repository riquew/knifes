const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const path = require("path");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "domfacone",
  port: "3306",
});

// connection.query(
//   "INSERT INTO PRODUTOS (NOMEPRODUTO, IMAGEM, QUANTIDADE, PRECO, DESCRICAO) VALUES ('NOME', 'imagem', 10, 5.20, 'descricao do produto')"
// );
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api/getList", (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("Sent list of items");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
