const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../db"); // asumsi kamu punya file db.js

// Register
router.post("/register", async (req, res) => {
  const { name, email, password, gender, phoneNumber } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query(
      "INSERT INTO users (name, email, password, gender, phoneNumber) VALUES (?, ?, ?, ?, ?)",
      [name, email, hashedPassword, gender, phoneNumber]
    );
    res.status(201).json({ message: "Register berhasil" });
  } catch (err) {
    console.error(err); // tambahkan log error
    res.status(500).json({ error: "Gagal register" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const [user] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (!user || user.length === 0)
      return res.status(400).json({ error: "Email tidak ditemukan" });

    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) return res.status(400).json({ error: "Password salah" });

    res
      .status(200)
      .json({
        message: "Login berhasil",
        user: { id: user[0].id, name: user[0].name },
      });
  } catch (err) {
    res.status(500).json({ error: "Gagal login" });
  }
});

module.exports = router;