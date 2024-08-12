import React, { useState } from "react";
import "../styles/Signup.css";
import back from "../../Assets/Image 1.png";
import img from "../../Assets/signlogo.png";
import apple from "../../Assets/apple.svg";
import fb from "../../Assets/fb.svg";
import google from "../../Assets/google.svg";
import { TextField, Button, Divider, Typography } from "@mui/material";
import { Link, Navigate } from 'react-router-dom'

const Signup = (props) => {

  const { login } = props;
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);


  const handleRegister = () => {
    // Validation checks
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!mobile.match(/^\d{10}$/)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    // If all validations pass, register the user
    props.register_user(name, email, password, mobile);
    // Clear input fields
    setRedirect(true)
    setName("");
    setEmail("");
    setPassword("");
    setMobile("");
  };
  if (redirect === true) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <div className="background__image"></div>
      <div className="signup_container">
        <div className="logo-container">
          {/* Your logo here */}
          <img src={img} alt="Logo" />
        </div>
        <div className="signup-form">
          <h2>Create Account</h2>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                height: "40px",
                padding: "7px",
                marginBottom: "15px",
                boxSizing: "border-box",
                borderRadius: "10px",
                border: "1px solid #cbcbcb",
                fontSize: "16px",
              }}
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="text"
              id="mobile"
              pattern="\d{10}"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              style={{
                width: "100%",
                height: "40px",
                padding: "7px",
                marginBottom: "15px",
                boxSizing: "border-box",
                borderRadius: "10px",
                border: "1px solid #cbcbcb",
                fontSize: "16px",
              }}
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                height: "40px",
                padding: "7px",
                marginBottom: "15px",
                boxSizing: "border-box",
                borderRadius: "10px",
                border: "1px solid #cbcbcb",
                fontSize: "16px",
              }}
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              minLength="6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                height: "40px",
                padding: "7px",
                marginBottom: "15px",
                boxSizing: "border-box",
                borderRadius: "10px",
                border: "1px solid #cbcbcb",
                fontSize: "16px",
              }}
              required
            />
          </div>
          <button
            onClick={handleRegister}
            style={{
              backgroundColor: "#4AA3DA",
              color: "white",
              padding: "10px 20px",
              borderRadius: "30px",
              border: 'none',
              cursor: "pointer",
              width: "98%",
            }}
          >
            Verify
          </button>

          <Divider style={{ margin: "10px 0" }}>
            OR
          </Divider>

          <div className="social-logins">
            <img src={google} alt="Google" />
            <img src={fb} alt="Apple" />
            <img src={apple} alt="Facebook" />
          </div>
          <p>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>

      </div>
    </>
  );
};
export default Signup;
