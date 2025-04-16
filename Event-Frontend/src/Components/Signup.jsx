import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) return alert("Passwords do not match!");

    try {
      const res = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      alert("Error signing up");
      console.error(err);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Enter your name" required />
          <label>E-Mail:</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required />
          <label>Password:</label>
          <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Enter your password" required />
          <label>Confirm Password:</label>
          <input name="confirm" type="password" value={form.confirm} onChange={handleChange} placeholder="Confirm your password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
