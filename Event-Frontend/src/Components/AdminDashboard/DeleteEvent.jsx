import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";

const DeleteEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this event?");
    if (!confirm) return;

    try {
      const response = await fetch(`http://localhost:5000/api/events/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setEvents(events.filter((event) => event.id !== id));
        alert("Event deleted successfully.");
      } else {
        alert("Failed to delete event.");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("An error occurred while deleting the event.");
    }
  };

  return (
    <div className="dashboard-content">
      {/* <h2>Delete Event</h2> */}
      <div className="event-list">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="event-item">
              <div className="event-image">
                {event.image && (
                  <img
                    src={`http://localhost:5000${event.image}`}
                    alt={event.name}
                    onError={(e) => (e.target.style.display = "none")}
                  />
                )}
              </div>
              <div className="event-info">
                <h3>{event.name}</h3>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Price:</strong> ₹{event.price}</p>
                <p><strong>Description:</strong> {event.description}</p>
              </div>
              <button
                onClick={() => handleDelete(event.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No events available.</p>
        )}
      </div>
    </div>
  );
};

export default DeleteEvent;
