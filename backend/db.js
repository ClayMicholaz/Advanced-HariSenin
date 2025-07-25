const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "061206",
  database: "harisenin",
});

module.exports = db;