import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile"
          className="profile-avatar"
        />
        <h2>{user?.name || "User"}</h2>
        <p className="profile-email">{user?.email || "example@mail.com"}</p>
        
        <div className="profile-info">
          <p><strong>User ID:</strong> {user?.id || "12345"}</p>
          <p><strong>Phone:</strong> {user?.phone || "Not provided"}</p>
          <p><strong>Address:</strong> {user?.address || "Not provided"}</p>
          <p><strong>Member Since:</strong> {user?.createdAt || "2025"}</p>
        </div>

        <div className="profile-actions">
          <button onClick={() => navigate("/")} className="back-btn">
          ← Back to Home
          </button>


          <button onClick={() => navigate("/edit-profile")} className="edit-btn">
            ✏️ Edit Profile
          </button>
          <button onClick={() => navigate("/login")} className="logout-btn">
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
