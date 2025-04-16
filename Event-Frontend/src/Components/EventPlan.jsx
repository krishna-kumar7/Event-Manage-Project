import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventPlan.css";

const events = [
  { name: "Wedding", icon: "💒", path: "/" },
  { name: "Parties", icon: "🎉", path: "/parties" },
  { name: "Meetup", icon: "🤝", path: "/meetup" },
  { name: "Seminar", icon: "🎤", path: "/seminar" },
];

const EventPlan = () => {
  const navigate = useNavigate();

  return (
    <div className="event-plan-container">
      <h2>Which type of event do you want to plan?</h2>
      <div className="event-grid">
        {events.map((event, index) => (
          <div
            key={index}
            className="event-card"
            onClick={() => navigate(event.path)}
          >
            <span className="event-icon">{event.icon}</span>
            <p>{event.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPlan;
