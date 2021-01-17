const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "kevin",
  password: "123456789",
  database: "jcwm1504",
  port: 3306,
});

module.exports = db;
