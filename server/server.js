const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "domfacone",
  port: "3306",
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/produtos", (req, res) => {
  connection.connect(function (error) {
    if (error) throw error;
    else
      connection.query(
        "SELECT * FROM PRODUTOS",
        function (error, result, fields) {
          if (error) throw error;
          const data = Object.values(result);
          res.json(data);
        }
      );
  });
});

app.post("/admin", (req, res) => {
  let query = req.body.sql;
  console.log(query);
  connection.query(query);
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
