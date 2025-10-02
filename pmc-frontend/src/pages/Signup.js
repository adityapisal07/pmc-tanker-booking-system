import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../api";
import "./Signup.css";

const Signup = ({ setIsLoggedIn }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false); // track signup success
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const data = { name, email, password, phone };
    try {
      const response = await signupUser(data);

      // Make sure response has success property or adapt to your backend response
      if (response === "Signup successful" || response.success) {
        setIsLoggedIn(true);
        setMessage("Registration successful!");
        setIsSuccess(true);
      } else {
        setMessage(response.message || response);
        setIsSuccess(false);
      }
    } catch (err) {
      setMessage("Signup failed. Try again.");
      setIsSuccess(false);
    }
  };

  return (
    <div className="signup-bg">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">Sign up to get started</p>
        <form onSubmit={handleSignup} className="signup-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        {/* Message and login link */}
        {message && (
          <div className={`message ${isSuccess ? "success" : "error"}`}>
            {message}
            {isSuccess && (
              <span
                className="login-link"
                onClick={() => navigate("/login")}
              >
                {" "}Login Here
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
