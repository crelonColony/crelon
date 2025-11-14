import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentSidebar from "./DashboardNavbar";
import "../Style/StudentWeeklyReport.css";

function StudentWeeklyReport() {
  const [internships, setInternships] = useState([]);
  const [reports, setReports] = useState([]);
  const [form, setForm] = useState({ internshipId: "", weekNumber: "", description: "" });
  const [file, setFile] = useState(null);
  const token = localStorage.getItem("token");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const fetchInternships = async () => {
      const res = await axios.get("http://localhost:5000/api/internships/applied", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setInternships(res.data);
    };

    const fetchReports = async () => {
      const res = await axios.get("http://localhost:5000/api/reports/myreports", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setReports(res.data);
    };

    fetchInternships();
    fetchReports();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    Object.keys(form).forEach((key) => fd.append(key, form[key]));
    if (file) fd.append("file", file);

    await axios.post("http://localhost:5000/api/reports/submit", fd, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    alert("Weekly Report Submitted!");
    setForm({ internshipId: "", weekNumber: "", description: "" });
    setFile(null);
  };

  return (
    <div className="dashboard-container">
      <StudentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main className={`main-content ${isSidebarOpen ? "" : "collapsed"}`}>
        <h1>Weekly Internship Reports</h1>

        <form className="report-form" onSubmit={handleSubmit}>
          <select
            value={form.internshipId}
            onChange={(e) => setForm({ ...form, internshipId: e.target.value })}
            required
          >
            <option value="">Select Internship</option>
            {internships.map((i) => (
              <option key={i._id} value={i._id}>
                {i.title}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Week Number"
            value={form.weekNumber}
            onChange={(e) => setForm({ ...form, weekNumber: e.target.value })}
            required
          />

          <textarea
            placeholder="Weekly activities / summary"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />

          <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setFile(e.target.files[0])} />
          <button type="submit">Submit Report</button>
        </form>

        <h2 className="report-heading">My Submitted Reports</h2>
        <div className="report-list">
          {reports.map((r) => (
            <div key={r._id} className="report-item">
              <p>
                <strong>Internship:</strong> {r.internship?.title}
              </p>
              <p>
                <strong>Week:</strong> {r.weekNumber}
              </p>
              <p>
                <strong>Description:</strong> {r.description}
              </p>
              {r.file && (
                <a
                  href={`http://localhost:5000${r.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Report
                </a>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default StudentWeeklyReport;
