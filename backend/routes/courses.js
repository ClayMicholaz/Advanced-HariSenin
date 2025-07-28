const express = require("express");
const router = express.Router();
const db = require("../db");

// GET semua kursus dengan filter, search, dan sort
router.get("/", async (req, res) => {
  try {
    const search = req.query.search || "";
    const minHarga =
      req.query.minHarga !== undefined ? parseFloat(req.query.minHarga) : 0;
    const maxHarga =
      req.query.maxHarga !== undefined
        ? parseFloat(req.query.maxHarga)
        : 1000000000;
    const sortBy = req.query.sortBy || "id";
    const sortOrder = req.query.sortOrder || "asc";

    // Validasi kolom sort dan order
    const allowedSort = ["id", "judul", "harga"];
    const allowedOrder = ["asc", "desc"];
    const finalSortBy = allowedSort.includes(sortBy) ? sortBy : "id";
    const finalSortOrder = allowedOrder.includes(sortOrder.toLowerCase())
      ? sortOrder.toLowerCase()
      : "asc";

    // Query dengan filter, search, dan sort
    const query = `
      SELECT * FROM products
      WHERE judul LIKE ? AND harga >= ? AND harga <= ?
      ORDER BY ${finalSortBy} ${finalSortOrder}
    `;
    const values = [`%${search}%`, minHarga, maxHarga];

    const [results] = await db.query(query, values);

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
    res.status(500).json({ error: "Gagal hapus kursus" });
  }
});

module.exports = router;