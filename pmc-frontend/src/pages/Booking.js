import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking.css";

const Booking = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [tankerType, setTankerType] = useState("");
  const [tankerSize, setTankerSize] = useState("");
  const [availableTankers, setAvailableTankers] = useState([]);
  const [message, setMessage] = useState("");

  const puneAreas = ["Hadapsar", "Wagholi", "VimanNagar", "Kharadi", "Magarpatta"];
  const tankersByArea = {
    Hadapsar: ["GuruKrupa Water Suppliers", "Om Sai Water Suppliers"],
    Wagholi: ["Nisarg Water Suppliers", "Aditya Water Suppliers"],
    VimanNagar: ["Utkarsha Water Suppliers", "G.S Water Suppliers"],
    Kharadi: ["Shree Water Suppliers", "H.S Water Suppliers"],
    Magarpatta: ["Sainath Water Suppliers", "Mahakal Watrer Suppliers"]
  };
  const tankerSizes = ["1000L - Small", "3000L - Medium", "5000L - Large"];

  // Get API URL from environment variable
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

  useEffect(() => {
    if (area) setAvailableTankers(tankersByArea[area]);
    else setAvailableTankers([]);
    setTankerType("");
  }, [area]);

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!name || !phone || !area || !address || !tankerType || !tankerSize) {
      setMessage("Please fill all fields!");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          area,
          address,
          tankerType,
          tankerSize,
        }),
      });

      if (response.ok) {
        setMessage(`Booking confirmed for ${tankerType} (${tankerSize}) in ${area}.`);
        setTimeout(() => navigate("/payment"), 1500);
      } else {
        setMessage("Failed to confirm booking. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Server error. Please try again later.");
    }
  };

  return (
    <div className="booking-page">
      <div className="booking-card">
        <h2>Book Your Water Tanker</h2>
        <form onSubmit={handleBooking} className="booking-form">
          <div className="input-group">
            <input 
              id="name" 
              type="text" 
              placeholder="Enter your full name"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>

          <div className="input-group">
            <input 
              id="phone" 
              type="tel" 
              placeholder="Enter your phone number"
              value={phone} 
              onChange={(e) => setPhone(e.target.value)}
              maxLength="10"
            />
          </div>

          <div className="input-group">
            <select id="area" value={area} onChange={(e) => setArea(e.target.value)}>
              <option value="">Select Area</option>
              {puneAreas.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <input 
              id="address" 
              type="text" 
              placeholder="Enter your complete address"
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
            />
          </div>

          <div className="input-group">
            <select 
              id="tankerType" 
              value={tankerType} 
              onChange={(e) => setTankerType(e.target.value)}
              disabled={!area}
            >
              <option value="">Select Tanker Type</option>
              {availableTankers.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <select id="tankerSize" value={tankerSize} onChange={(e) => setTankerSize(e.target.value)}>
              <option value="">Select Tanker Size</option>
              {tankerSizes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn-book">Confirm Booking</button>
        </form>

        {message && <p className="booking-message">{message}</p>}
      </div>
    </div>
  );
};

export default Booking;