import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventSection.css";
import { useNavigate } from "react-router-dom";

const MeetupSec = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const banners = [
    "/src/images/m1.jpeg",
    "/src/images/m2.jpg",
    "/src/images/m3.webp",
  ];

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((event) => event.category === "meetup");
        setEvents(filtered);
      })
      .catch((err) => console.error("Failed to load meetup events", err));
  }, []);

  const handleCheckIn = () => {
    navigate(isLoggedIn ? "/event-detail" : "/login");
  };

  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="event-section">
      {/* Banner Carousel */}
      <div className="banner-slider">
        <Slider {...bannerSettings}>
          {banners.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Banner ${index + 1}`} className="banner-img" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Event Cards */}
      <h2 className="venue-title">Meetup Venues</h2>
      <div className="venue-scroll">
        {events.map((event) => (
          <div key={event.id} className="venue-card">
            <img
              src={`http://localhost:5000${event.image_url}`}
              alt={event.name}
              className="venue-img"
              onError={(e) => (e.target.style.display = "none")}
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

export default MeetupSec;
