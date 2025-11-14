import React, { useState } from "react";
import axios from "axios";
import "../Style/LogPage.css"

const ROLES = [
  "Student",
  "Startup Founder",
  "Faculty / Mentor",
  "Partner / Collaborator",
  "Other",
];

const PURPOSES = [
  "Collaboration / Partnership",
  "Internship / Job Opportunity",
  "General Inquiry",
  "Feedback / Suggestion",
];

function LogPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    message: "",
    purpose: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "purpose") {
      setFormData((prev) => {
        if (checked) {
          return { ...prev, purpose: [...prev.purpose, value] };
        } else {
          return { ...prev, purpose: prev.purpose.filter((p) => p !== value) };
        }
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // For backend: purpose is a string (join for one-cell)
      await axios.post("http://localhost:5000/submit", {
        ...formData,
        purpose: formData.purpose.join(", "),
      });
      alert("Form submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: 560, margin: "auto" }}>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name* <br />
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email Address* <br />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Phone Number (optional) <br />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Organization / Institution Name <br />
          <input
            name="organization"
            placeholder="Organization / Institution"
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Role / Category <br />
          <select
            name="role"
            onChange={handleChange}
            value={formData.role}
            required
          >
            <option value="">Select Role</option>
            {ROLES.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Message / Query <br />
          <textarea
            name="message"
            placeholder="Write your message here"
            onChange={handleChange}
            required
          />
        </label>
        <br />
        {/* <fieldset style={{ margin: "20px 0 0 0" }}>
          <legend>
            <span role="img" aria-label="optional">
              ⚡
            </span>{" "}
            Purpose of Contact (optional)
          </legend>
          {PURPOSES.map((option) => (
            <label key={option} style={{ display: "block" }}>
              <input
                type="checkbox"
                name="purpose"
                value={option}
                checked={formData.purpose.includes(option)}
                onChange={handleChange}
              />
              {option}
            </label>
          ))}
        </fieldset> */}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LogPage;
