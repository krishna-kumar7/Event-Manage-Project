const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Load environment variables
require("dotenv").config();

// ✅ Import DB connection
const db = require("./db");

// ✅ Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Serve static image uploads (e.g., http://localhost:5000/uploads/image.jpg)
app.use("/uploads", express.static("uploads"));

// ✅ API Routes
const userRoutes = require("./routes/users");
const eventRoutes = require("./routes/events");
const bookingRoutes = require("./routes/bookings"); // ⬅️ Add bookings route
const adminRoutes = require("./routes/admin");

app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes); // ⬅️ Mount booking routes
app.use("/api/admin", adminRoutes);

// ✅ Default Route (Optional)
app.get("/", (req, res) => {
  res.send("Welcome to Aayojan Backend API 🎉");
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
