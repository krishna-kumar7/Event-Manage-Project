import React from "react";
import './Venue.css'
import EventImage from './Images/EventImage.jpg'

const VenueDetails = () => {
  return (
    <div className="venue-details-container">
      <main className="main-content">
        <section className="venue-description">
          <h1>GLODIAS PALACE & INN</h1>
          <p>
            Glodias Palace and Inn is a charming and historic venue located in
            the heart of the city. With a legacy spanning over a century, our
            venue exudes elegance and sophistication. The beautiful architecture
            and well-preserved interiors provide a timeless backdrop for any
            event, from weddings to corporate functions.
          </p>

          <h2>CAPACITY & LAYOUT</h2>
          <p>
            Capacity and Layout: Glodias Palace and Inn can accommodate up to 300
            seated guests or 500 standing for your event. Choose from various
            layout options, including banquet-style seating, theater-style, or an
            open dance floor arrangement.
          </p>
          <ul>
            <li>Seats: 300</li>
            <li>Guests covered: 500</li>
            <li>Style: Theatre & Banquet</li>
            <li>Flexibility: Open dance floor</li>
          </ul>

          <h2>AMENITIES & FACILITIES</h2>
          <ul>
            <li>Wi-Fi: Yes</li>
            <li>Parking: Yes</li>
            <li>Audio Visibility: Yes</li>
            <li>Catering: Yes</li>
          </ul>

          <h2>EVENT TYPE</h2>
          <p>
            Glodias Palace and Inn is ideal for a range of events, including:
          </p>
          <ul>
            <li>Weddings</li>
            <li>Corporate meetings</li>
            <li>Product launches</li>
            <li>Gala dinners</li>
          </ul>

          <h2>ADDRESS & CONTACT</h2>
          <p>
            Address: 123, Royal Street, Prayagraj
            <br />
            Contact: +91 941***229
          </p>
        </section>

        <aside className="booking-card">
          <div className="card-image">
            <img src={EventImage} alt="Glodias Palace & Inn" />
          </div>
          <h3>GLODIA'S PALACE & INN</h3>
          <p>Seminars, Weddings, Parties & Stay</p>
          <div className="guest-details">
            <label htmlFor="guest">Guest</label>
            <input type="number" id="guest" min="1" defaultValue="2" />
          </div>
          <div className="date-picker">
            <label>Check-in & Check-out</label>
            <input type="date" defaultValue="2023-10-25" />
            <input type="date" defaultValue="2023-10-27" />
          </div>
          <div className="price">
            <h4>Total: ₹2,50,000/-</h4>
          </div>
          <button className="book-now-button">BOOK NOW</button>
        </aside>
      </main>
    </div>
  );
};

export default VenueDetails;
