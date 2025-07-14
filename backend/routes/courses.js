const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
});

router.post("/", (req, res) => {
  const data = req.body;
  db.query("INSERT INTO products SET ?", [data], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Product created", id: result.insertId });
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  db.query("UPDATE products SET ? WHERE id = ?", [data, id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Product updated", affectedRows: result.affectedRows });
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM products WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Product deleted", affectedRows: result.affectedRows });
  });
});

module.exports = router;
