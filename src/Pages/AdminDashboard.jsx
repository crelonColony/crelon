import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../Component/AdminNavbar";
import "../Style/StudentSidebar.css"; // reuse the same sidebar styling
import "../Style/StudentDashboard.css";
import axios from "axios";
import Search from "../Component/Search";
import AdBanner from "../Component/AdBanner";
import DashboardProfile from "../Component/DashboardProfile";
import EventCard from "../Component/EventCard";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
        const { data } = await axios.get("http://localhost:5000/api/events", config);
        setEvents(data);
      } catch (error) {
        console.error("Error fetching admin events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [token]);

  if (loading) return <p className="loading">Loading admin dashboard...</p>;

  const latestEvents = events.slice(-3).reverse();

  return (
    <div className="dashboard-container">
      {/* Sidebar / Navbar */}
      <AdminNavbar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Dashboard Content */}
      <main className={`main-content ${isSidebarOpen ? "" : "collapsed"}`}>
        <Search />

        <div className="studentDashGrid">
          <div className="grid1">
            <AdBanner />

            {/* Event Management Section */}
            <section className="latest-events">
              <h3>Recent Events</h3>
              <div className="event-grid-for-dash">
                {latestEvents.map((event) => (
                  <EventCard
                    key={event._id}
                    image={`http://localhost:5000${event.image}`}
                    title={event.title}
                    description={event.description}
                    date={new Date(event.date).toLocaleDateString()}
                    location={event.location}
                    spots={`${event.registeredStudents?.length || 0} / 25`}
                    button="View Details"
                    onClick={() => (window.location.href = `/adminevent`)}
                  />
                ))}
              </div>
              <Link to="/adminevent" className="btn">
                Manage All Events
              </Link>
            </section>

            {/* Internship & Reports Section */}
            <section className="latest-events">
              <h3>Internships & Reports</h3>
              <div className="admin-card-grid">
                <div className="admin-card" onClick={() => (window.location.href = "/admininternship")}>
                  <h4>Internships</h4>
                  <p>View and approve student internships</p>
                </div>
                <div className="admin-card" onClick={() => (window.location.href = "/admin/weekly-report")}>
                  <h4>Reports</h4>
                  <p>Monitor student weekly reports</p>
                </div>
                <div className="admin-card" onClick={() => (window.location.href = "/admin/sessions")}>
                  <h4>Sessions</h4>
                  <p>Manage upcoming mentor sessions</p>
                </div>
              </div>
            </section>
          </div>

          <div className="grid2">
            <DashboardProfile />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
