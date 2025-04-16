const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");

// ✅ Signup Route
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const checkQuery = "SELECT * FROM users WHERE email = ?";
    db.query(checkQuery, [email], async (err, results) => {
      if (err) {
        console.error("❌ DB error during user check:", err);
        return res.status(500).json({ message: "Database error" });
      }

      if (results.length > 0) {
        return res.status(409).json({ message: "User already exists with this email" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const insertQuery = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
      db.query(insertQuery, [name, email, hashedPassword, "client"], (err, result) => {
        if (err) {
          console.error("❌ Error inserting user:", err);
          return res.status(500).json({ message: "Error creating user" });
        }
        res.status(201).json({ message: "User registered successfully", userId: result.insertId });
      });
    });
  } catch (err) {
    console.error("❌ Server error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Login Route
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (err) {
      console.error("❌ Login DB error:", err);
      return res.status(500).json({ message: "Server error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: "User not found" });
    }

    const user = results[0];

    try {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      res.json({
        message: "Login successful",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          phone: user.phone || null,
        },
      });
    } catch (compareError) {
      console.error("❌ Error comparing password:", compareError);
      res.status(500).json({ message: "Error processing login" });
    }
  });
});

// ✅ Get User Profile by ID
router.get("/:id", (req, res) => {
  const userId = req.params.id;

  db.query("SELECT id, name, email, phone FROM users WHERE id = ?", [userId], (err, results) => {
    if (err) {
      console.error("❌ Error fetching user:", err);
      return res.status(500).json({ message: "Error fetching user" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(results[0]);
  });
});

// ✅ Update User Profile
router.put("/:id", (req, res) => {
  const { name, email, phone } = req.body;
  const userId = req.params.id;

  db.query(
    "UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?",
    [name, email, phone, userId],
    (err, result) => {
      if (err) {
        console.error("❌ Error updating profile:", err);
        return res.status(500).json({ message: "Error updating profile" });
      }
      res.json({ id: userId, name, email, phone });
    }
  );
});

module.exports = router;
