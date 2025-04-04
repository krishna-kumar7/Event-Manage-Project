import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <main className="main-content">
        <section className="contact-form-section">
          <h1>Contact Us</h1>
          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" />

            <label htmlFor="email">E-mail*</label>
            <input type="email" id="email" placeholder="E-mail*" />

            <label htmlFor="message">Your Message</label>
            <textarea id="message" placeholder="Your Message"></textarea>

            <button type="submit">Submit</button>
          </form>
        </section>  
      </main>
    </div>
  );
};

export default ContactUs;
