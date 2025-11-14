import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import "../Style/ApplyInternshipForm.css"

function ApplyInternshipForm({ internshipId, onClose }) {
  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const token = localStorage.getItem("token");

  // Disable body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resume) return alert("Please upload your resume first!");

    const fd = new FormData();
    fd.append("resume", resume);

    try {
      setIsSubmitting(true);
      const res = await axios.post(
        `http://localhost:5000/api/internships/${internshipId}/apply`,
        fd,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(res.data.msg || "Application submitted successfully!");
      onClose();
    } catch (err) {
      alert(err.response?.data?.msg || "Error applying for internship");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <h2 className="modal-title">Apply for Internship</h2>
          <form onSubmit={handleSubmit} className="apply-form">
            <label className="upload-label">Upload Resume (PDF)</label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setResume(e.target.files[0])}
              className="upload-input"
            />

            <div className="btn-row">
              <button type="button" onClick={onClose} className="cancel-btn">
                Cancel
              </button>
              <button
                type="submit"
                className="submit-btn"
                disabled={!resume || isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ApplyInternshipForm;
