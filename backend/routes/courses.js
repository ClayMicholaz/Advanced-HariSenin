const express = require("express");
const router = express.Router();
const db = require("../db");

// GET semua kursus
router.get("/", async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM products");

    const mapped = results.map((course) => ({
      id: course.id,
      judul: course.judul || "",
      subjudul: course.subjudul || "",
      harga: course.harga || 0,
      photos: course.photos || "",
      profile_pengajar: course.profile_pengajar || "",
    }));

    res.json(mapped);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal mengambil data kursus" });
  }
});

// GET kursus berdasarkan ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await db.query("SELECT * FROM products WHERE id = ?", [
      id,
    ]);

    res.json(results[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal mengambil kursus" });
  }
});

// POST kursus baru
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const [result] = await db.query("INSERT INTO products SET ?", [data]);

    res
      .status(201)
      .json({ message: "Kursus berhasil dibuat", id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal menambahkan kursus" });
  }
});

// PUT update kursus
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const [result] = await db.query("UPDATE products SET ? WHERE id = ?", [
      data,
      id,
    ]);

    res.json({
      message: "Kursus berhasil diperbarui",
      affectedRows: result.affectedRows,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal update kursus" });
  }
});

// DELETE kursus
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query("DELETE FROM products WHERE id = ?", [id]);

    res.json({
      message: "Kursus berhasil dihapus",
      affectedRows: result.affectedRows,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal hapus kursus" });
  }
});

module.exports = router;
