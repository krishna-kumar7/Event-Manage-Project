const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",        // XAMPP default
  password: "",        // default is empty
  database: "userdb",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to MySQL");
});

// Registration API
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const checkQuery = "SELECT * FROM users WHERE email = ?";
  db.query(checkQuery, [email], (err, result) => {
    if (err) return res.status(500).json({ error: "DB error" });

    if (result.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Insert new user
    const insertQuery = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(insertQuery, [name, email, password], (err, result) => {
      if (err) return res.status(500).json({ error: "Insert error" });

      res.status(201).json({ message: "User registered successfully" });
    });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
