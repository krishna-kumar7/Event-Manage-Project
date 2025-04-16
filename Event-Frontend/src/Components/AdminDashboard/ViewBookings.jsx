import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings/admin/all")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Booking data:", data);
        setBookings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching bookings:", err);
        setLoading(false);
      });
  }, []);


  return (
    <div className="dashboard-content">
      <h2>Booking Details</h2>

      {loading ? (
        <p>Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p className="no-bookings">No bookings found.</p>
      ) : (
        <div className="booking-table-container">
          <table className="booking-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Event</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.user_name}</td>
                  <td>{booking.user_email}</td>
                  <td>{booking.event_name}</td>
                  <td>{new Date(booking.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  );
};

export default ViewBookings;
