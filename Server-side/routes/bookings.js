const express = require("express");
const router = express.Router();
const db = require("../db");

// ✅ CREATE Booking
router.post("/", (req, res) => {
  const {
    user_id,
    event_name,
    venue_charge,
    decoration_charge,
    comfort_charge,
    people_count,
    per_head,
    service_charge,
    gst,
    portal_charge,
    total
  } = req.body;

  const status = "Confirmed"; // default status
  const created_at = new Date();

  const sql = `
    INSERT INTO bookings (
      user_id, event_name, venue_charge, decoration_charge, comfort_charge,
      people_count, per_head, service_charge, gst, portal_charge, total, status, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [
    user_id,
    event_name,
    venue_charge,
    decoration_charge,
    comfort_charge,
    people_count,
    per_head,
    service_charge,
    gst,
    portal_charge,
    total,
    status,
    created_at
  ], (err, result) => {
    if (err) {
      console.error("❌ Booking insert error:", err);
      return res.status(500).json({ message: "Booking failed", error: err.message });
    }
    res.status(201).json({ message: "✅ Booking successful", bookingId: result.insertId });
  });
});

// ✅ GET bookings by user
router.get("/:userId", (req, res) => {
  const { userId } = req.params;
  db.query("SELECT * FROM bookings WHERE user_id = ?", [userId], (err, results) => {
    if (err) {
      console.error("❌ Error loading bookings:", err);
      return res.status(500).json({ message: "Error loading bookings", error: err.message });
    }
    res.json(results);
  });
});

// ✅ DELETE a booking (cancel)
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM bookings WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("❌ Booking cancel error:", err);
      return res.status(500).json({ message: "Failed to cancel booking", error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ message: "❌ Booking canceled successfully" });
  });
});

// ✅ GET ALL BOOKINGS (Admin View)
// ✅ GET ALL BOOKINGS (Admin View)
router.get("/admin/all", (req, res) => {
  const sql = `
    SELECT 
      b.id, b.event_name, b.created_at,
      u.name AS user_name, u.email AS user_email
    FROM bookings b
    JOIN users u ON b.user_id = u.id
    ORDER BY b.created_at DESC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Error fetching all bookings:", err);
      return res.status(500).json({ message: "Error loading booking data", error: err.message });
    }
    res.json(results);
  });
});


module.exports = router;
