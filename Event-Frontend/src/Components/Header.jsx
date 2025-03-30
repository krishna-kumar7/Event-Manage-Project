import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-text">aayojan</Link>
      </div>
      <nav className="nav-links">
        <Link to="/" className="active">Wedding</Link>
        <Link to="/parties">Parties</Link>
        <Link to="/meetups">Meetups</Link>
        <Link to="/seminars">Seminars</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <div className="header-actions">
        <button className="plan-event-btn">Plan Your Event</button>
        <div className="profile">
          <span className="icon">👤</span>
          <span className="dropdown-arrow">▼</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
