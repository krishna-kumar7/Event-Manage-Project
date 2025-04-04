import React from "react";
import "./Login.css";
import googleIcon from"./images/Google.png";
import facebookIcon from './images/Facebook.png'

const Login = () => {
  return (
    <div className="login-container">
      <main className="login-main">
        <section className="login-box">
          <h1>LOGIN</h1>
          <form className="login-form">
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" placeholder="E-Mail" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
            <button type="submit" className="login-button">Login</button>
          </form>
          <div className="separator">
            <hr />
            <span>OR</span>
            <hr />
          </div>
          <div className="social-login">
            <button className="google-btn">
              <img src={googleIcon} className="google" ></img>
            </button>
            <button className="facebook-btn">
            <img src={facebookIcon} className="facebook" ></img>
            </button>
          </div>
          <p className="signup-text">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Login;
