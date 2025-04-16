import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EventDetail.css";

const EventDetail = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    "/src/images/service2.jpg",
    "/src/images/service3.webp",
    
 
  ];

  return (
    <div className="event-detail-container">
      {/* Left Section: Event Info */}
      <div className="event-info">
        <h1>Sangam Wedding Hall</h1>
        <p>
          A charming and historic venue in the heart of the city, perfect for
          weddings, corporate events, and gala dinners.
        </p>
        <h3>Capacity & Layout</h3>
        <ul>
          <li>Seats: 300</li>
          <li>Guests covered: 500</li>
          <li>Style: Theatre & Banquet</li>
          <li>Flexibility: Open dance floor</li>
        </ul>
        <h3>Amenities & Facilities</h3>
        <ul>
          <li>Wi-Fi: Yes</li>
          <li>Parking: Yes</li>
          <li>Audio Visibility: Yes</li>
          <li>Catering: Yes</li>
        </ul>
        <h3>Event Type</h3>
        <ul>
          <li>Weddings</li>
          <li>Corporate Meetings</li>
          <li>Product Launches</li>
          <li>Gala Dinners</li>
        </ul>
        <h3>Address & Contact</h3>
        <p>123, Royal Street, Prayagraj</p>
        <p>Contact: +91 9876543210</p>
      </div>

      {/* Right Section: Booking & Images */}
      <div className="event-booking">
        <div className="image-gallery">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Event ${index + 1}`}
              className="gallery-img"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
        <div className="booking-info">
          <h2>Total: 2,50,000/-</h2>
          <Link to="/booking-page">
          <button className="book-now">Book Now</button>
          </Link>
        </div>
      </div>

      {/* Image Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected Event" className="lightbox-img" />
        </div>
      )}
    </div>
  );
};

export default EventDetail;
