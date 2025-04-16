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


// Login API
app.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    const selectQuery = "SELECT * FROM users WHERE email = ?";
    db.query(selectQuery, [email], (err, result) => {
      if (err) return res.status(500).json({ error: "DB error" });
  
      if (result.length === 0) {
        return res.status(400).json({ message: "User not found" });
      }
  
      const user = result[0];
  
      // If password is hashed with bcrypt:
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) return res.status(500).json({ error: "Compare error" });
  
        if (!isMatch) {
          return res.status(401).json({ message: "Invalid credentials" });
        }
  
        res.status(200).json({ message: "Login successful", user: { id: user.id, name: user.name, email: user.email } });
      });
  
      // OR ➤ if password is stored as plain text (not recommended)
      // if (password === user.password) {
      //   return res.status(200).json({ message: "Login successful" });
      // } else {
      //   return res.status(401).json({ message: "Invalid credentials" });
      // }
  
    });
  });
  
// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
