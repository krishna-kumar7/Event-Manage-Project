import React from "react";
import { useNavigate } from "react-router-dom";
import "./BookingPage.css";

const BookingPage = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const handleConfirmBooking = async () => {
    const booking = {
      user_id: userId,
      event_name: "Glodias Palace & Inn",
      venue_charge: 85000,
      decoration_charge: 123000,
      comfort_charge: 6500,
      people_count: 70,
      per_head: 300,
      service_charge: 15000,
      gst: 4200,
      portal_charge: 700,
      total: 255000,
    };

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      });

      const data = await res.json();

      if (res.ok) {
        alert("🎉 Booking confirmed!");
        navigate("/client");
      } else {
        alert(data.message || "Booking failed");
      }
    } catch (err) {
      console.error("Booking error:", err);
      alert("⚠️ Server error. Please try again.");
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-card">
        <h2 className="invoice-title">YOUR INVOICE</h2>
        <div className="invoice-details">
          <p>Venue Charge <span>85,000/-</span></p>
          <p>Decoration Charge <span>1,23,000/-</span></p>
          <p>Comfort Zone Charge <span>6,500/-</span></p>
          <p>People Per Head <span>300*70 = 21,000/-</span></p>
          <hr />
          <p>Service Charge <span>15,000/-</span></p>
          <p>GST <span>4,200/-</span></p>
          <p>Portal Charge <span>700/-</span></p>
          <hr />
          <p><strong>Total</strong> <strong>2,55,000/-</strong></p>
        </div>
        <button className="confirm-btn" onClick={handleConfirmBooking}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
