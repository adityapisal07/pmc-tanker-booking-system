import React, { useState } from "react";
import "./Payment.css";

const Payment = () => {
  const [amount, setAmount] = useState("1500");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [message, setMessage] = useState("");

  // Handle Razorpay Payment
  const handleRazorpayPayment = async (e) => {
    e.preventDefault();

    // ✅ Step 1: Create order on backend
    const response = await fetch("https://pmc-backend-and-database-deploy-production.up.railway.app/api/payment/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount }),
    });

    const order = await response.json();

    if (!order.id) {
      setMessage("Failed to create payment order!");
      return;
    }

    // ✅ Step 2: Open Razorpay Checkout
    const options = {
      key: "rzp_test_yourKeyId", // Replace with your Razorpay key
      amount: order.amount,
      currency: "INR",
      name: "PMC Tanker Booking",
      description: "Payment for Tanker Booking",
      image: "https://razorpay.com/favicon.png",
      order_id: order.id,
      handler: function (response) {
        setMessage(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Aditya Pisal",
        email: "adityapisal2004@gmail.com",
        contact: "7028698932",
      },
      notes: {
        address: "PMC Tanker Booking Portal",
      },
      theme: {
        color: "#667eea",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="payment-container">
      <div className="payment-wrapper">
        <h2>Complete Your Payment</h2>

        <div className="amount-display">
          <span className="amount-label">Total Amount</span>
          <span className="amount-value">₹{amount}</span>
        </div>

        <form onSubmit={handleRazorpayPayment} className="payment-form">
          {/* Payment Method Selection */}
          <div className="payment-methods">
           
          </div>

          {/* Pay Button */}
          <button type="submit" className="btn-pay">
            Pay ₹{amount} with Razorpay
          </button>

          <div className="secure-payment">
            <span className="lock-icon">🔒</span>
            <span>Secure Payment - Powered by Razorpay</span>
          </div>
        </form>

        {message && <p className="payment-message">{message}</p>}
      </div>
    </div>
  );
};

export default Payment;
