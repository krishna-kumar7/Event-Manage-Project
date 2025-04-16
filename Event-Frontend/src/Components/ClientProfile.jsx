import React, { useEffect, useState } from "react";
import "./ClientProfile.css";

const ClientProfile = () => {
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      console.warn("⚠️ userId not found in localStorage");
      return;
    }

    const fetchUserAndBookings = async () => {
      try {
        const userRes = await fetch(`http://localhost:5000/api/users/${userId}`);
        if (!userRes.ok) throw new Error("User fetch failed");

        const userData = await userRes.json();
        setUser(userData);
        setForm(userData);

        const bookingsRes = await fetch(`http://localhost:5000/api/bookings/${userId}`);
        const bookingsData = await bookingsRes.json();
        setBookings(bookingsData);
      } catch (error) {
        console.error("❌ Error loading data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserAndBookings();
  }, [userId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const updated = await res.json();
        setUser(updated);
        setEditing(false);
        alert("✅ Profile updated successfully");
      } else {
        alert("❌ Failed to update profile");
      }
    } catch (err) {
      console.error("❌ Update error:", err);
    }
  };

  const handleCancelBooking = async (bookingId) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
    if (!confirmCancel) return;

    try {
      const res = await fetch(`http://localhost:5000/api/bookings/${bookingId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        setBookings(bookings.filter((b) => b.id !== bookingId));
      } else {
        alert("❌ Failed to cancel booking");
      }
    } catch (err) {
      console.error("❌ Cancel booking error:", err);
    }
  };

  if (!userId) {
    return <div className="profile-container"><p>⚠️ You're not logged in. Please <a href="/login">Login</a>.</p></div>;
  }

  if (loading) {
    return <div className="profile-container"><p>⏳ Loading profile...</p></div>;
  }

  if (!user) {
    return <div className="profile-container"><p>❌ User not found.</p></div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-section">
        <h2>Welcome, {user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone || "N/A"}</p>
        <button onClick={() => setEditing(true)}>Update Profile</button>
      </div>

      {editing && (
        <div className="update-form">
          <h3>Update Your Profile</h3>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
          <input name="phone" value={form.phone || ""} onChange={handleChange} placeholder="Phone" />
          <button onClick={handleUpdate}>Save</button>
        </div>
      )}

      <div className="booking-history">
        <h3>Your Bookings</h3>
        <div className="booking-cards">
          {bookings.length > 0 ? (
            bookings.map((b) => (
              <div className="booking-card" key={b.id}>
                <h4>{b.event_name}</h4>
                <p><strong>Venue:</strong> ₹{b.venue_charge}</p>
                <p><strong>Decoration:</strong> ₹{b.decoration_charge}</p>
                <p><strong>Comfort:</strong> ₹{b.comfort_charge}</p>
                <p><strong>Guests:</strong> {b.people_count} x ₹{b.per_head}</p>
                <p><strong>Total:</strong> ₹{b.total}</p>
                <p><strong>Status:</strong> {b.status || "Confirmed"}</p>
                <button className="cancel-btn" onClick={() => handleCancelBooking(b.id)}>Cancel Booking</button>
              </div>
            ))
          ) : (
            <p>No bookings yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
