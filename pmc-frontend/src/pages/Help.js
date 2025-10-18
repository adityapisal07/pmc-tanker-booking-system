import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Help.css";

const Help = () => {
  const navigate = useNavigate();
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Feedback form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [ { question: "How do I book a water tanker?", answer: "Navigate to the Booking page from the home screen, select your area, choose the tanker type and size, fill in your details, and confirm your booking." }, { question: "What payment methods are accepted?", answer: "We accept Credit/Debit Cards, UPI (GPay, PhonePe, Paytm), and Digital Wallets (Paytm Wallet, PhonePe Wallet, Amazon Pay)." }, { question: "How long does delivery take?", answer: "Typically, water tankers arrive within 2-4 hours of booking. During peak hours, it may take up to 6 hours. You'll receive updates via SMS and in-app notifications." }, { question: "Can I cancel my booking?", answer: "Yes, you can cancel your booking up to 1 hour before the scheduled delivery time. Go to History page, select your booking, and click Cancel." }, { question: "What are the tanker sizes available?", answer: "We offer three sizes: Small (1000L), Medium (3000L), and Large (5000L). Choose based on your water requirements." }, { question: "How do I track my order?", answer: "After booking confirmation, you'll receive a tracking link via SMS. You can also check the status in the History section of the app." }, { question: "What if the water quality is poor?", answer: "All our water is tested and certified. If you face any quality issues, contact our support immediately at support@pmctanker.com or call our helpline." }, { question: "Are there any additional charges?", answer: "The price displayed during booking is final. There are no hidden charges. However, cancellation after the tanker has been dispatched may incur a small fee." } ];
 const contactInfo = [ { icon: "📞", title: "Customer Support", detail: "+91 7028698932", subtext: "Available 24/7" }, { icon: "📧", title: "Email Support", detail: "adityapisal1508.com", subtext: "Response within 24 hours" }, { icon: "💬", title: "WhatsApp", detail: "+91 7028698932", subtext: "Quick assistance" }, { icon: "📍", title: "Office Address", detail: "PMC Office, Pune - 411001", subtext: "Mon-Sat: 9 AM - 6 PM" } ];

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setResponse("⚠️ Please fill all fields!");
      return;
    }

    try {
      const res = await fetch("https://pmc-backend-and-database-deploy-production.up.railway.app/api/help/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setResponse("✅ Feedback submitted successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setResponse("❌ Failed to submit feedback.");
      }
    } catch (error) {
      console.error(error);
      setResponse("❌ Error submitting feedback.");
    }
  };

  return (
    <div className="help-container">
      <div className="help-wrapper">
        {/* Header */}
        <div className="help-header">
          <button className="back-button" onClick={() => navigate("/")}>
            ← Back
          </button>
          <h1>Help & Support</h1>
          <p className="help-subtitle">We're here to help you 24/7</p>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <div className="action-card">
            <span className="action-icon">📚</span>
            <h3>FAQs</h3>
            <p>Find answers to common questions</p>
          </div>
          <div className="action-card">
            <span className="action-icon">💡</span>
            <h3>Guides</h3>
            <p>Step-by-step tutorials</p>
          </div>
          <div className="action-card">
            <span className="action-icon">🎧</span>
            <h3>Live Chat</h3>
            <p>Chat with our support team</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeAccordion === index ? "active" : ""}`}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle">
                    {activeAccordion === index ? "−" : "+"}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="contact-section">
          <h2>Contact Us</h2>
          <div className="contact-grid">
            {contactInfo.map((contact, index) => (
              <div key={index} className="contact-card">
                <span className="contact-icon">{contact.icon}</span>
                <h3>{contact.title}</h3>
                <p className="contact-detail">{contact.detail}</p>
                <p className="contact-subtext">{contact.subtext}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback Form */}
        <div className="feedback-section">
          <h2>Send Us Your Feedback</h2>
          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="form-group">
              {/* <label htmlFor="name">Name</label> */}
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="message">Message</label> */}
              <textarea
                id="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
          {response && <p className="feedback-response">{response}</p>}
        </div>
      </div>
    </div>
  );
};

export default Help;
