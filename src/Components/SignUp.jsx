import React from "react";
import "./SignUp.css";
import googleIcon from"./images/Google.png";
import facebookIcon from './images/Facebook.png'

const SignUp = () => {
  return (
    <div className="signup-container">

      <main className="signup-main">
        <section className="signup-box">
          <h1>Sign Up</h1>
          <form className="signup-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" />

            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" placeholder="E-Mail" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm Password" />

            <button type="submit" className="signup-button">Sign Up</button>
          </form>

          <div className="separator">
            <hr />
            <span>OR</span>
            <hr />
          </div>

          <div className="social-login">
            <button className="google-btn">
              <img src={googleIcon} alt="Google"  className="google"/>
            </button>
            <button className="facebook-btn">
              <img src={facebookIcon} alt="Facebook"  className="facebook"/>
            </button>
          </div>

          <p className="login-text">
            Already have an account? <a href="#">Login</a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default SignUp;
