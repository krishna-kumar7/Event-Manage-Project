import React from "react";
import "./EventPage.css";

const EventPage = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <nav className="navbar">
          <h1 className="logo">aayojan</h1>
          <ul className="nav-links">
            <li>Wedding</li>
            <li className="active">Parties</li>
            <li>Meetups</li>
            <li>Seminars</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <button className="plan-btn">Plan Your Event</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <img src="/images/party-hero.jpg" alt="Party" />
      </section>

      {/* Venue Cards */}
      <section className="venues">
        <h2>Top Venues</h2>
        <div className="venue-list">
          {venues.map((venue, index) => (
            <div key={index} className="venue-card">
              <img src={venue.image} alt={venue.name} />
              <h3>{venue.name}</h3>
              <p>⭐ {venue.rating} ({venue.reviews}) - {venue.location}</p>
              <button className="checkin-btn">CHECK IN</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="categories">
            <h3>Categories</h3>
            <ul>
              <li>Social Events</li>
              <li>Corporate Events</li>
              <li>Entertainment Events</li>
              <li>Educational Events</li>
            </ul>
          </div>
          <div className="address">
            <h3>Address</h3>
            <p>RK University, Rajkot, Gujarat</p>
          </div>
          <div className="contact-form">
            <h3>Get in Touch</h3>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Venue Data
const venues = [
  {
    name: "Hotel Saket",
    rating: 4.7,
    reviews: 545,
    location: "Civil Lines",
    image: "/images/hotel-saket.jpg",
  },
  {
    name: "Sangam Castle",
    rating: 4.6,
    reviews: 387,
    location: "Civil Lines",
    image: "/images/sangam-castle.jpg",
  },
  {
    name: "Divine Vatika",
    rating: 4.6,
    reviews: 374,
    location: "Civil Lines",
    image: "/images/divine-vatika.jpg",
  },
  {
    name: "Palms Resort",
    rating: 4.5,
    reviews: 347,
    location: "Civil Lines",
    image: "/images/palms-resort.jpg",
  },
  {
    name: "Om Sai Resort",
    rating: 4.4,
    reviews: 345,
    location: "Civil Lines",
    image: "/images/om-sai-resort.jpg",
  },
];

export default EventPage;