import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBook, FaMoneyCheckAlt, FaHistory, FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import "./Home.css";

const Home = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      {/* Header */}
      <header className="home-header">
        <div className="logo">PMC Tanker Booking</div>
        <div className="header-right">
          <span className="welcome-text">Welcome, {user?.name || "User"}</span>
          <FaUserCircle className="profile-icon" onClick={() => navigate("/profile")} />
        </div>
      </header>

      {/* Main Sections */}
      <main className="home-main">
        <h1 className="home-title">Welcome to Tanker Booking System</h1>
        <div className="sections-container">
          <div className="section-card booking" onClick={() => navigate("/booking")}>
            <FaBook className="section-icon" />
            <h2>Booking</h2>
            <p>Check and manage your tanker bookings.</p>
          </div>
          <div className="section-card payment" onClick={() => navigate("/payment")}>
            <FaMoneyCheckAlt className="section-icon" />
            <h2>Payment</h2>
            <p>View pending and completed payments.</p>
          </div>
          <div className="section-card history" onClick={() => navigate("/history")}>
            <FaHistory className="section-icon" />
            <h2>History</h2>
            <p>Check your past bookings and transactions.</p>
          </div>
          <div className="section-card help" onClick={() => navigate("/help")}>
            <FaQuestionCircle className="section-icon" />
            <h2>Help</h2>
            <p>Get assistance and support for your bookings.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="home-footer">
        <p>© 2025 PMC Tanker Booking System. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy | Contact</p>
      </footer>
    </div>
  );
};

export default Home;
