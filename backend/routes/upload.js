const express = require("express");
const router = express.Router();
const upload = require("../services/uploadService");

router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Tidak ada file yang diupload" });
  }

  res.status(200).json({
    message: "Upload berhasil",
    filename: req.file.filename,
    path: `/uploads/${req.file.filename}`,
  });
});

module.exports = router;