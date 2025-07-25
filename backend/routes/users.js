const express = require("express");
const router = express.Router();
const db = require("../db"); // gunakan koneksi dari file db.js

// GET semua user
router.get("/", async (req, res) => {
  try {
    const [users] = await db.query("SELECT * FROM users"); // ini query yang benar
    res.json(users); // kirim hasil query
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal mengambil data users" });
  }
});

module.exports = router;