import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StudentSidebar from "../Component/DashboardNavbar";
import "../Style/StudentSidebar.css";
import axios from "axios";
import Search from "../Component/Search";
import DemoNotifications from "../Component/DemoNotification";
import AdBanner from "../Component/AdBanner";
import "../Style/StudentDashboard.css"
import DashboardProfile from "../Component/DashboardProfile";
import EventCard from "../Component/EventCard";
const StudentDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const token = localStorage.getItem("token");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const config = token
          ? { headers: { Authorization: `Bearer ${token}` } }
          : {}; // allow public access if no token
        const { data } = await axios.get("http://localhost:5000/api/events", config);
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
        if (error.response?.status === 401) {
          alert("Unauthorized — please log in first.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [token]);

   if (loading) return <p className="loading">Loading events...</p>;

  const latestEvents = events.slice(-2).reverse();
  return (
    <div className="dashboard-container">
      <StudentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <main className={`main-content ${isSidebarOpen ? "" : "collapsed"}`}>
        

        <Search/>
        

        <div className="studentDashGrid">
          <div className="grid1">
            <AdBanner/>
            {/* <section className="latest-events">
              <h2>🌟 Latest Events</h2>
              <div className="event-grid">
                {latestEvents.map((event) => (
                  <div className="event-card latest" key={event._id}>
                    <img
                      src={`http://localhost:5000${event.image}`}
                      alt={event.title}
                      className="event-image"
                    />
                    <div className="event-info">
                      <h3>{event.title}</h3>
                      <p>{event.description}</p>
                      <p>
                        <strong>Mentor:</strong> {event.mentorName || "TBA"}
                      </p>
                      <p>
                        <strong>Date:</strong>{" "}
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                      <button onClick={() => handleRegister(event)} className="register-btn">
                        {event.type === "paid"
                          ? `Pay ₹${event.price}`
                          : "Register Free"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section> */}
      <section className="latest-events">
        <h3>Latest Event</h3>
        <div className="event-grid-for-dash">
          {latestEvents.map((event) => (
            <EventCard
              key={event._id}
              image={`http://localhost:5000${event.image}`}
              // category="Workshop"
              // status="Upcoming"
              title={event.title}
              description={event.description}
              date={new Date(event.date).toLocaleDateString()}
              location={event.location}
              spots={`${event.registeredStudents?.length || 0} / 25 spots`}
              button={event.type === "paid" ? `Pay ₹${event.price}` : "Register Free"}
              onClick={() => handleRegister(event)}
            />
          ))}
        </div>
        <Link to="/studentevent" className="btn">More</Link>
      </section>

          </div>
          <div className="grid2">
              <DashboardProfile/>
          </div>
        </div>


        {/* <p>
          This is your main dashboard area. The content adjusts dynamically when
          you toggle the sidebar.
        </p>

        <section style={{ marginTop: "30px" }}>
          <h2>Profile</h2>
          <p>
            Here you can view or edit your personal details, update your profile
            picture, and manage account preferences.
          </p>
        </section> */}

        {/* <section style={{ marginTop: "30px" }}>
          <h2>Internship Tracker</h2>
          <p>
            Track your ongoing internships, upload reports, and view mentor
            feedback.
          </p>
        </section> */}
        {/* <section className="latest-events">
        <h2>🌟 Latest Events</h2>
        <div className="event-grid">
          {latestEvents.map((event) => (
            <div className="event-card latest" key={event._id}>
              <img
                src={`http://localhost:5000${event.image}`}
                alt={event.title}
                className="event-image"
              />
              <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <p>
                  <strong>Mentor:</strong> {event.mentorName || "TBA"}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(event.date).toLocaleDateString()}
                </p>
                <button onClick={() => handleRegister(event)} className="register-btn">
                  {event.type === "paid"
                    ? `Pay ₹${event.price}`
                    : "Register Free"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      </main>
    </div>
  );
};

export default StudentDashboard;
