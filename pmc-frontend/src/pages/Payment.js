import React, { useState } from "react";
import "./Payment.css";

const Payment = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    setMessage(`Payment of ₹${amount} successful!`);
    // Call payment API here
  };

  return (
    <div className="payment-container">
      <h2>Make a Payment</h2>
      <form onSubmit={handlePayment} className="payment-form">
        <div className="input-group">
          <label>Amount (₹)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>
        <button type="submit" className="btn-pay">Pay Now</button>
      </form>
      {message && <p className="payment-message">{message}</p>}
    </div>
  );
};

export default Payment;
