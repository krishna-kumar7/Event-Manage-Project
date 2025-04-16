const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const db = require("../db");

// 📂 Multer Setup for File Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

// ✅ GET All Events
router.get("/", (req, res) => {
  const sql = "SELECT * FROM events ORDER BY id DESC";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching events:", err);
      return res.status(500).json({ message: "Error fetching events" });
    }
    res.json(results);
  });
});

// ✅ POST Add New Event
router.post("/", upload.single("image"), (req, res) => {
  const { name, location, price, description, category } = req.body;
  const image_url = req.file ? "/uploads/" + req.file.filename : null;

  if (!name || !location || !price || !description || !category || !image_url) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = `
    INSERT INTO events (name, location, price, description, image_url, category)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(
    sql,
    [name, location, price, description, image_url, category],
    (err, result) => {
      if (err) {
        console.error("Error adding event:", err);
        return res.status(500).json({ message: "Error adding event" });
      }
      res.status(201).json({ message: "Event added successfully", id: result.insertId });
    }
  );
});

// ✅ PUT Update Event by ID
router.put("/:id", upload.single("image"), (req, res) => {
  const { name, location, price, description, category } = req.body;
  const { id } = req.params;

  let sql = `
    UPDATE events
    SET name = ?, location = ?, price = ?, description = ?, category = ?
  `;
  const values = [name, location, price, description, category];

  if (req.file) {
    sql += `, image_url = ?`;
    values.push("/uploads/" + req.file.filename);
  }

  sql += ` WHERE id = ?`;
  values.push(id);

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Update error:", err);
      return res.status(500).json({ message: "Error updating event" });
    }
    res.json({ message: "Event updated", affectedRows: result.affectedRows });
  });
});

// ✅ DELETE Event by ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM events WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ message: "Error deleting event" });
    res.json({ message: "Event deleted successfully" });
  });
});

module.exports = router;
