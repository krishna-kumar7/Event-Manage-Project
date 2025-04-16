import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Check admin login
    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", "admin");
      localStorage.setItem("userName", "Admin");
      localStorage.setItem("userId", "0"); // Optional for consistency
      navigate("/admin-dashboard/dashboard");
      return;
    }

    // ✅ Regular user login
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Login response:", data);

      if (res.ok) {
        // Save data to localStorage
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userRole", data.user.role);
        localStorage.setItem("userId", data.user.id);         // ✅ Needed for ClientProfile
        localStorage.setItem("userName", data.user.name);
        localStorage.setItem("userEmail", data.user.email);

        navigate("/client");
      } else {
        alert(data.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("⚠️ Server error. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p>
          Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
