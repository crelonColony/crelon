import React, { useEffect, useState } from "react";
import axios from "axios";
import InternshipCard from "../Component/IntersnhipCard";
import ApplyInternshipForm from "../Component/ApplyInternshipForm";
import StudentSidebar from "./DashboardNavbar";
import "../Style/Internship.css"
import Search from "../Component/Search";

function StudentInternships() {
  const [internships, setInternships] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/internships", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setInternships(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, [token]);

  return (
    <div className="dashboard-container">
      <StudentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main className={`main-content ${isSidebarOpen ? "" : "collapsed"}`}>
        <h1>Explore Internships</h1>
        <div className="internship-grid">
          {internships.map((i) => (
            <InternshipCard
              key={i._id}
              image={`http://localhost:5000${i.image}`}
              title={i.title}
              company={i.company}
              location={i.location}
              duration={i.duration}
              type={i.type}
              stipend={i.stipend}
              isApplied={i.isApplied}
              onApply={() => setSelected(i._id)}
            />
          ))}
        </div>

        {selected && (
          <ApplyInternshipForm
            internshipId={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </main>
    </div>
  );
}

export default StudentInternships;
