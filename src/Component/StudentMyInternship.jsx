import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentSidebar from "./DashboardNavbar";
import InternshipCard from "../Component/IntersnhipCard";
import "../Style/StudentMyInternship.css"; // make sure this CSS file exists
import Search from "../Component/Search";
function StudentMyInternships() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchAppliedInternships = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/internships/applied",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setInternships(data);
      } catch (error) {
        console.error("Error fetching applied internships:", error);
        if (error.response?.status === 401) {
          alert("Unauthorized — please log in again.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchAppliedInternships();
  }, [token]);

  return (
    <div className="dashboard-container">
      <StudentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <main
        className={`main-content ${isSidebarOpen ? "" : "collapsed"}`}
        style={{
          position: "relative",
          zIndex: 5, // ensures dropdowns or modals above sidebar still show properly
        }}
      >
        <Search/>
        <div className="internship-header">
          <h1 className="internship-heading">My Applied Internships</h1>
        </div>

        {loading ? (
          <p className="loading-text">Loading your internships...</p>
        ) : internships.length === 0 ? (
          <div className="empty-state">
            <p>You haven’t applied for any internships yet.</p>
            <a href="/internships" className="browse-link">
              🔍 Browse Internships
            </a>
          </div>
        ) : (
          <div className="internship-grid">
            {internships.map((internship) => (
              <InternshipCard
                key={internship._id}
                image={`http://localhost:5000${internship.image}`}
                title={internship.title}
                company={internship.company}
                location={internship.location}
                duration={internship.duration}
                type={internship.type}
                stipend={internship.stipend}
                isApplied={true}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default StudentMyInternships;
