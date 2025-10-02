import React from "react";
import "./History.css";

const History = () => {
  // Example static history, can fetch from backend API
  const bookings = [
    { id: 1, type: "Small", quantity: 1000, date: "2025-09-01" },
    { id: 2, type: "Medium", quantity: 3000, date: "2025-09-10" },
  ];

  return (
    <div className="history-container">
      <h2>Booking History</h2>
      <div className="history-list">
        {bookings.map((booking) => (
          <div key={booking.id} className="history-card">
            <p><strong>Booking ID:</strong> {booking.id}</p>
            <p><strong>Type:</strong> {booking.type}</p>
            <p><strong>Quantity:</strong> {booking.quantity} L</p>
            <p><strong>Date:</strong> {booking.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
