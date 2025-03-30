import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Categories</h3>
        <ul>
          <li>Social Events</li>
          <li>Corporate Events</li>
          <li>Entertainment Events</li>
          <li>Educational Events</li>
          <li>Non-Profit Events</li>
          <li>Sporting Events</li>
          <li>Cultural & Art Events</li>
          <li>Religious & Spiritual Events</li>
          <li>Trade & Industries Events</li>
          <li>Community & Civic Events</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Address</h3>
        <p>RK UNIVERSITY, RAJKOT<br />GUJARAT</p>
      </div>

      <div className="footer-section">
        <h3>Follow us on</h3>
        <div className="social-icons">
          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
          <FaPinterest />
        </div>
      </div>

      <div className="footer-section">
        <h3>Get in Touch</h3>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
