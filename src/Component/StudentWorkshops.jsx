import React, { useEffect, useState } from "react";
import axios from "axios";
import WorkshopCard from "../Component/WorkshopCard";
import ApplyWorkshopForm from "../Component/ApplyWorkshopForm";
import StudentSidebar from "./DashboardNavbar";
import "../Style/Workshop.css"

function StudentWorkshops() {
  const [workshops, setWorkshops] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchWorkshops = async () => {
      const { data } = await axios.get("http://localhost:5000/api/workshops");
      setWorkshops(data);
    };
    fetchWorkshops();
  }, []);

  return (
    <div className="dashboard-container">
      <StudentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main className={`main-content ${isSidebarOpen ? "" : "collapsed"}`}>
        <h1>Upcoming Workshops</h1>
        <div className="workshop-grid">
          {workshops.map((w) => (
            <WorkshopCard
              key={w._id}
              image={`http://localhost:5000${w.image}`}
              title={w.title}
              trainer={w.trainer}
              location={w.location}
              date={new Date(w.date).toLocaleDateString()}
              type={w.type}
              price={w.price}
              onApply={() => setSelected(w._id)}
            />
          ))}
        </div>

        {selected && (
          <ApplyWorkshopForm
            workshopId={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </main>
    </div>
  );
}
export default StudentWorkshops;
