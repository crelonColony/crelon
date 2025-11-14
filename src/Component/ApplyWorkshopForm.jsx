import React, { useState } from "react";
import axios from "axios";

function ApplyWorkshopForm({ workshopId, onClose, onRegisterSuccess }) {
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `http://localhost:5000/api/workshops/${workshopId}/register`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert(res.data.msg);
      if (onRegisterSuccess) onRegisterSuccess();
      onClose();
    } catch (error) {
      alert(error.response?.data?.msg || "Something went wrong while applying.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="workshop-modal">
      <div className="workshop-form-container">
        <h2>Workshop Registration</h2>
        <p>Confirm your registration for this workshop?</p>
        <div className="form-btns">
          <button type="button" onClick={onClose} className="cancel-btn">
            Cancel
          </button>
          <button type="submit" onClick={handleSubmit} className="confirm-btn">
            {loading ? "Registering..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApplyWorkshopForm;
