import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // icon added
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userRole = localStorage.getItem("userRole");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    setDropdownVisible(false);
    navigate("/login");
  };

  const handleViewProfile = () => {
    if (userRole === "admin") {
      navigate("/admin-dashboard/dashboard");
    } else {
      navigate("/client");
    }
    setDropdownVisible(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-text">aayojan</Link>
      </div>

      {userRole !== "admin" && (
        <>
          <nav className="nav-links">
            <Link to="/" className="active">Wedding</Link>
            <Link to="/parties">Parties</Link>
            <Link to="/meetups">Meetups</Link>
            <Link to="/seminars">Seminars</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>

          <div className="header-actions">
            <Link to="/event-plan">
              <button className="plan-event-btn">Plan Your Event</button>
            </Link>
          </div>
        </>
      )}

      <div className="profile-dropdown-container">
        {isLoggedIn ? (
          <>
            <span className="icon" onClick={() => setDropdownVisible(!dropdownVisible)}>
              <FaUserCircle />
            </span>
            {dropdownVisible && (
              <div className="dropdown-menu">
                <button onClick={handleViewProfile}>View Profile</button>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </>
        ) : (
          <Link to="/login" className="profile">
            <FaUserCircle className="icon" />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
