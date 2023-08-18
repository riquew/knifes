const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const path = require("path");
const app = express();
const router = express.Router();

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

app.use(cors());

app.get("/teste", (req, res) => {
  res.json({ funciona: "sim" });
});

app.post("/admin", (req, res) => {
  console.log(res);
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
