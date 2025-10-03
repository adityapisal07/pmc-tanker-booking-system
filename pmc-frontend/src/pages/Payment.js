import React, { useState } from "react";
import "./Payment.css";

const Payment = () => {
;
  const [amount, setAmount] = useState("1500");
  const [cardNumber, setCardNumber] = useState("");  const [paymentMethod, setPaymentMethod] = useState("card")
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");
  const [message, setMessage] = useState("");

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\s/g, "");
    const formatted = cleaned.match(/.{1,4}/g);
    return formatted ? formatted.join(" ") : cleaned;
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\s/g, "");
    if (value.length <= 16 && /^\d*$/.test(value)) {
      setCardNumber(formatCardNumber(value));
    }
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    if (value.length <= 5) {
      setExpiryDate(value);
    }
  };

  const handleCvvChange = (e) => {
    const value = e.target.value;
    if (value.length <= 3 && /^\d*$/.test(value)) {
      setCvv(value);
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();
    
    if (paymentMethod === "card") {
      if (!cardNumber || !cardName || !expiryDate || !cvv) {
        setMessage("Please fill all card details!");
        return;
      }
    } else if (paymentMethod === "upi") {
      if (!upiId) {
        setMessage("Please enter UPI ID!");
        return;
      }
    }
    
    setMessage(`Payment of ₹${amount} successful via ${paymentMethod.toUpperCase()}!`);
    // Call payment API here
  };

  return (
    <div className="payment-container">
      <div className="payment-wrapper">
        <h2>Complete Your Payment</h2>
        
        <div className="amount-display">
          <span className="amount-label">Total Amount</span>
          <span className="amount-value">₹{amount}</span>
        </div>

        <form onSubmit={handlePayment} className="payment-form">
          {/* Payment Method Selection */}
          <div className="payment-methods">
            <button
              type="button"
              className={`method-btn ${paymentMethod === "card" ? "active" : ""}`}
              onClick={() => setPaymentMethod("card")}
            >
              <span className="method-icon">💳</span>
              <span>Card</span>
            </button>
            <button
              type="button"
              className={`method-btn ${paymentMethod === "upi" ? "active" : ""}`}
              onClick={() => setPaymentMethod("upi")}
            >
              <span className="method-icon">📱</span>
              <span>UPI</span>
            </button>
            <button
              type="button"
              className={`method-btn ${paymentMethod === "wallet" ? "active" : ""}`}
              onClick={() => setPaymentMethod("wallet")}
            >
              <span className="method-icon">👛</span>
              <span>Wallet</span>
            </button>
          </div>

          {/* Card Payment Form */}
          {paymentMethod === "card" && (
            <div className="payment-fields card-fields">
              <div className="input-group">
                {/* <label htmlFor="cardNumber">Card Number</label> */}
                <input
                  id="cardNumber"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  required
                />
              </div>

              <div className="input-group">
                {/* <label htmlFor="cardName">Cardholder Name</label> */}
                <input
                  id="cardName"
                  type="text"
                  placeholder="John Doe"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  required
                />
              </div>

              <div className="input-row">
                <div className="input-group">
                  {/* <label htmlFor="expiryDate">Expiry Date</label> */}
                  <input
                    id="expiryDate"
                    type="text"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={handleExpiryChange}
                    required
                  />
                </div>

                <div className="input-group">
                  {/* <label htmlFor="cvv">CVV</label> */}
                  <input
                    id="cvv"
                    type="password"
                    placeholder="123"
                    value={cvv}
                    onChange={handleCvvChange}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* UPI Payment Form */}
          {paymentMethod === "upi" && (
            <div className="payment-fields upi-fields">
              <div className="input-group">
                {/* <label htmlFor="upiId">UPI ID</label> */}
                <input
                  id="upiId"
                  type="text"
                  placeholder="yourname@upi"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  required
                />
              </div>
              <div className="upi-apps">
                <span className="upi-label">Quick Pay:</span>
                <div className="upi-icons">
                  <button type="button" className="upi-icon-btn">GPay</button>
                  <button type="button" className="upi-icon-btn">PhonePe</button>
                  <button type="button" className="upi-icon-btn">Paytm</button>
                </div>
              </div>
            </div>
          )}

          {/* Wallet Payment Form */}
          {paymentMethod === "wallet" && (
            <div className="payment-fields wallet-fields">
              <div className="wallet-options">
                <button type="button" className="wallet-option">
                  <span className="wallet-icon">💰</span>
                  <div className="wallet-info">
                    <span className="wallet-name">Paytm Wallet</span>
                    <span className="wallet-balance">Balance: ₹5,000</span>
                  </div>
                </button>
                <button type="button" className="wallet-option">
                  <span className="wallet-icon">💳</span>
                  <div className="wallet-info">
                    <span className="wallet-name">PhonePe Wallet</span>
                    <span className="wallet-balance">Balance: ₹3,200</span>
                  </div>
                </button>
                <button type="button" className="wallet-option">
                  <span className="wallet-icon">🎯</span>
                  <div className="wallet-info">
                    <span className="wallet-name">Amazon Pay</span>
                    <span className="whallet-balance">Balance: ₹8,500</span>
                  </div>
                </button>
              </div>
            </div>
          )}

          <button type="submit" className="btn-pay">
            Pay ₹{amount}
          </button>

          <div className="secure-payment">
            <span className="lock-icon">🔒</span>
            <span>Secure Payment - Your data is encrypted</span>
          </div>
        </form>

        {message && <p className="payment-message">{message}</p>}
      </div>
    </div>
  );
};

export default Payment;