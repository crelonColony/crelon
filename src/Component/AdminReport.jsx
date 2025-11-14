import React, { useEffect, useState } from "react";
import axios from "axios";
// import "../Style/AdminReports.css";

function AdminReports() {
  const [reports, setReports] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/reports/all", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setReports(data);
      } catch (err) {
        console.error("Error fetching reports:", err);
      }
    };
    fetchReports();
  }, [token]);

  return (
    <div className="admin-reports">
      <h1>All Weekly Reports</h1>
      {reports.length === 0 ? (
        <p>No reports submitted yet.</p>
      ) : (
        <table className="report-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Internship</th>
              <th>Week</th>
              <th>Description</th>
              <th>File</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report._id}>
                <td>{report.student?.name}</td>
                <td>{report.internship?.title}</td>
                <td>{report.weekNumber}</td>
                <td>{report.description}</td>
                <td>
                  {report.file ? (
                    <a
                      href={`http://localhost:5000${report.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View File
                    </a>
                  ) : (
                    "No File"
                  )}
                </td>
                <td>{new Date(report.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminReports;
