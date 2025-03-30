import React, { useState } from "react";
import "./Contect.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange} 
        />
        
        <label htmlFor="email">E-mail*</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="E-mail" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        
        <label htmlFor="message">Your Message</label>
        <textarea 
          id="message" 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
        ></textarea>
        
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
