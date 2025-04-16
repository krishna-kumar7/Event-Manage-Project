import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventSection.css";
import { useNavigate } from "react-router-dom";

const EventSection = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const banners = [
    "/src/images/wedding03.jpg",
    "/src/images/wedding002.png",
    "/src/images/wedding01.jpg",
  ];

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then(setEvents)
      .catch((err) => console.error("Failed to load events", err));
  }, []);

  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const handleCheckIn = () => {
    navigate(isLoggedIn ? "/event-detail" : "/login");
  };

  return (
    <div className="event-section">
      <div className="banner-slider">
        <Slider {...bannerSettings}>
          {banners.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Banner ${index + 1}`} className="banner-img" />
            </div>
          ))}
        </Slider>
      </div>

      <h2 className="venue-title">All Events</h2>
      <div className="venue-scroll">
        {events.map((event, index) => (
          <div key={index} className="venue-card">
            <img
              src={`http://localhost:5000${event.image_url}`}
              alt={event.name}
              className="venue-img"
            />
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>📍 {event.location} | ₹{event.price}</p>
            <button className="checkin-btn" onClick={handleCheckIn}>
              CHECK IN
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSection;
