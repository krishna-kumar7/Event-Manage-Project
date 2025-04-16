const express = require("express");
const router = express.Router();
const db = require("../db");

// Dashboard summary route
router.get("/summary", (req, res) => {
  const summary = {};

  const eventQuery = "SELECT COUNT(*) as totalEvents FROM events";
  const userQuery = "SELECT COUNT(*) as totalUsers FROM users";
  const revenueQuery = "SELECT SUM(total) as totalRevenue FROM bookings";

  db.query(eventQuery, (err, eventResult) => {
    if (err) return res.status(500).json({ message: "Error fetching events" });
    summary.totalEvents = eventResult[0].totalEvents;

    db.query(userQuery, (err, userResult) => {
      if (err) return res.status(500).json({ message: "Error fetching users" });
      summary.totalUsers = userResult[0].totalUsers;

      db.query(revenueQuery, (err, revenueResult) => {
        if (err) return res.status(500).json({ message: "Error fetching revenue" });
        summary.totalRevenue = revenueResult[0].totalRevenue || 0;
        res.json(summary);
      });
    });
  });
});

module.exports = router;
