import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin</h2>
      <nav>
        <Link to="/admin-dashboard">Dashboard</Link>
        <Link to="/admin-dashboard/add-event">Add Event</Link>
        <Link to="/admin-dashboard/update-event">Update Event</Link>
        <Link to="/admin-dashboard/delete-event">Delete Event</Link>
        <Link to="/admin-dashboard/view-bookings">View Bookings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;