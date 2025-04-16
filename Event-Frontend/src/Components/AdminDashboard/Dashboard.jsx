import React, { useState, useEffect } from "react";
import AddEvent from "./AddEvent";
import UpdateEvent from "./UpdateEvent";
import DeleteEvent from "./DeleteEvent";
import ViewBookings from "./ViewBookings";
import "./Dashboard.css";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [refreshKey, setRefreshKey] = useState(0);
  const [summary, setSummary] = useState({
    totalEvents: 0,
    totalUsers: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    if (activePage === "dashboard") {
      fetch("http://localhost:5000/api/admin/summary")
        .then((res) => res.json())
        .then((data) => {
          setSummary(data);
        })
        .catch((err) => console.error("Failed to fetch dashboard summary:", err));
    }
  }, [activePage, refreshKey]);

  const renderContent = () => {
    switch (activePage) {
      case "add":
        return <AddEvent onEventAdded={() => setRefreshKey((prev) => prev + 1)} />;
      case "update":
        return <UpdateEvent key={refreshKey} />;
      case "delete":
        return <DeleteEvent key={refreshKey} />;
      case "bookings":
        return <ViewBookings key={refreshKey} />;
      default:
        return (
          <div className="card-container classy-cards">
            <div className="card card-events">
              <h3>Total Events</h3>
              <p>{summary.totalEvents}</p>
            </div>
            <div className="card card-users">
              <h3>Total Users</h3>
              <p>{summary.totalUsers}</p>
            </div>
            <div className="card card-revenue">
              <h3>Total Revenue</h3>
              <p>₹{summary.totalRevenue}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar fixed-sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <nav className="nav-menu">
          <button onClick={() => setActivePage("dashboard")}>Dashboard</button>
          <button onClick={() => setActivePage("add")}>Add Event</button>
          <button onClick={() => setActivePage("update")}>Update Event</button>
          <button onClick={() => setActivePage("delete")}>Delete Event</button>
          <button onClick={() => setActivePage("bookings")}>View Bookings</button>
        </nav>
      </aside>

      <main className="dashboard-content padded-content">
        {activePage === "dashboard" && <h2 className="dashboard-title">Dashboard Summary</h2>}
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;
