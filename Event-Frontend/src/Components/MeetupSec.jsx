import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventSection.css";

const MeetupSec = () => {
  // Banner images
  const banners = [
    "/src/images/banner_2.jpg",
    "/src/images/banner_3.png",
    "/src/images/banner_5.jpg",
  ];

  // Venue data
  const venues = [
    {
      name: "Hotel Saket",
      rating: 4.7,
      reviews: 545,
      location: "Civil Lines",
      image: "/src/images/banner2.jpg",
    },
    {
      name: "Sangam Castle",
      rating: 4.6,
      reviews: 387,
      location: "Civil Lines",
      image: "/src/images/banner2.jpg",
    },
    {
      name: "Divine Vatika",
      rating: 4.6,
      reviews: 374,
      location: "Civil Lines",
      image: "/src/images/banner2.jpg",
    },
    {
      name: "Palms Resort",
      rating: 4.5,
      reviews: 347,
      location: "Civil Lines",
      image: "/src/images/banner2.jpg",
    },
    {
      name: "Om Sai Resort",
      rating: 4.4,
      reviews: 345,
      location: "Civil Lines",
      image: "/src/images/banner2.jpg",
    },
  ];

  // Slider settings for banner
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
      {/* Auto-Sliding Banner */}
      <div className="banner-slider">
        <Slider {...bannerSettings}>
          {banners.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Banner ${index + 1}`} className="banner-img" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Scrollable Venue Cards */}
      <h2 className="venue-title">Meetup Venues</h2>
      <div className="venue-scroll">
        {venues.map((venue, index) => (
          <div key={index} className="venue-card">
            <img src={venue.image} alt={venue.name} />
            <h3>{venue.name}</h3>
            <p>⭐ {venue.rating} ({venue.reviews}) - {venue.location}</p>
            <button className="checkin-btn">CHECK IN</button>
          </div>
        ))}
      </div>
      <div className="venue-scroll">
        {venues.map((venue, index) => (
          <div key={index} className="venue-card">
            <img src={venue.image} alt={venue.name} />
            <h3>{venue.name}</h3>
            <p>⭐ {venue.rating} ({venue.reviews}) - {venue.location}</p>
            <button className="checkin-btn">CHECK IN</button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default MeetupSec;