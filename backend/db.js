const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "061206",
  database: "harisenin",
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL Connected");
});

module.exports = db;
