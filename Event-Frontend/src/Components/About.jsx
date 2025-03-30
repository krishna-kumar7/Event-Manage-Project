// About.jsx
import React from "react";
import "./About.css";
import profilePic from "../images/profile.png";
 // Change to actual image path

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">ABOUT US</h1>
      <div className="profile-section">
        <img src={profilePic} alt="Profile" className="profile-img" />
        <p className="brought-by">Devlop <strong>@Krishu</strong></p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2 className="section-title">Our Story</h2>
          <p>
            At Aayojan, we understand the challenges and stress that often come with event planning.
            That’s why we’ve embraced the mission of revolutionizing the way people plan and celebrate
            memorable occasions. We aim to make every event unique and unforgettable.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">What Sets Us Apart</h2>
          <p>
            At the core of Aayojan’s mission is a commitment to delivering exceptional service with
            utmost professionalism. Our user-friendly platform ensures seamless event planning,
            giving you complete control over your budget, themes, and vendor selection.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">Our Vision</h2>
          <p>
            Our vision is simple yet profound: To be your trusted partner in crafting unforgettable moments.
            We believe in blending tradition with innovation, offering a platform that simplifies event
            planning while preserving the beauty of celebrations.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">Our Commitment</h2>
          <p>
            At Aayojan, we are committed to making your event-planning journey stress-free and enjoyable.
            Our team is dedicated to providing you with top-notch solutions, ensuring that every detail is
            meticulously taken care of.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">Why Choose Aayojan</h2>
          <ul>
            <li>Access to a wide selection of event venues.</li>
            <li>Budget-friendly options without compromising quality.</li>
            <li>Seamless online booking experience with trusted vendors.</li>
            <li>Personalized event planning assistance.</li>
            <li>Innovative and user-friendly interface for effortless management.</li>
          </ul>
        </div>
      </div>

      <div className="developer-section">
        <h2 className="developer-title">Designer & Developer</h2>
        <p className="developer-name">College Team </p>
        <p className="developer-role">UI/UX Designer & Web Developer</p>
      </div>
    </div>
  );
};

export default About;
