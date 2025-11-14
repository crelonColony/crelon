// https://docs.google.com/forms/d/e/1FAIpQLSeFleTS5K7FXPgmMVLDTwQTnsqq3Gpo7kN2zp-tGEXGXQBncg/viewform?usp=dialog


import React, { useState } from "react";
import "../Style/ContactForm.css";
import { useOnScreen } from "../hooks/useOnScreen";
import Img from "../assets/image.png"

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeFleTS5K7FXPgmMVLDTwQTnsqq3Gpo7kN2zp-tGEXGXQBncg/formResponse";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [contactrightRef, contactrightVisible] = useOnScreen();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append("entry.1299830177", formData.name); // replace with your entry IDs
    formDataObj.append("entry.85567216", formData.email);
    formDataObj.append("entry.1808623657", formData.phone);
    formDataObj.append("entry.1498930045", formData.message);

    fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      body: formDataObj,
    }).then(() => {
      alert("✅ Submitted!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    });
  };

  return (
    <div className="contact-section">
  <div className="contact-left">
    {/* <img src={Img} alt="contact-banner" /> */}

    <div className="contact-left-brand">
      <h3>Crelon</h3>
      <p>Empowering students and innovation together.</p>
      <div className="social-row">
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
      </div>
    </div>
  </div>

  <div className="contact-right"
    
  >
    <h2>GET IN <span>TOUCH</span></h2>
    <p>24/7 We will answer your questions and problems</p>

    <form 
      ref={contactrightRef}
    className={`contact-form ${contactrightVisible ? "visible" : ""}`}
    onSubmit={handleSubmit}>
      <div className="name-grid">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Describe your Message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">Send</button>
    </form>
  </div>
</div>

  );
}

export default ContactForm;
