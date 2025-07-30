const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../db");
const { v4: uuidv4 } = require("uuid");
const sendMail = require("../services/emailService");

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password, gender, phoneNumber } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const verificationToken = uuidv4();

  try {
    await db.query(
      `INSERT INTO users (name, email, password, gender, phoneNumber, verification_token) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [name, email, hashedPassword, gender, phoneNumber, verificationToken]
    );

    await sendMail(email, verificationToken);

    res
      .status(201)
      .json({ message: "Register berhasil. Cek email untuk verifikasi." });
  } catch (err) {
    console.error("❌ ERROR REGISTER:", err);
    res.status(500).json({ error: "Gagal register" });
  }

});

// VERIFIKASI EMAIL
router.get("/verifikasi-email", async (req, res) => {
  const { token } = req.query;
  try {
    const [user] = await db.query(
      "SELECT * FROM users WHERE verification_token = ?",
      [token]
    );

    if (!user || user.length === 0) {
      return res
        .status(400)
        .json({ error: "Token tidak valid atau sudah diverifikasi" });
    }

    await db.query(
      "UPDATE users SET verification_token = NULL WHERE verification_token = ?",
      [token]
    );

    res.status(200).json({ message: "Email berhasil diverifikasi" });
  } catch (err) {
    res.status(500).json({ error: "Gagal verifikasi email" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [user] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (!user || user.length === 0)
      return res.status(400).json({ error: "Email tidak ditemukan" });

    if (user[0].verification_token)
      return res.status(403).json({ error: "Email belum diverifikasi" });

    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) return res.status(400).json({ error: "Password salah" });

    res.status(200).json({
      message: "Login berhasil",
      user: { id: user[0].id, name: user[0].name },
    });
  } catch (err) {
    res.status(500).json({ error: "Gagal login" });
  }
});

module.exports = router;