import React, { useEffect, useState } from "react";
import axios from "axios";
// import MentorSidebar from "./MentorSidebar";
// import "../Style/MentorSessions.css";

function MentorSessions() {
  const [sessions, setSessions] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/sessions/mentor", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSessions(data);
      } catch (error) {
        console.error("Error fetching mentor sessions:", error);
      }
    };
    fetchSessions();
  }, [token]);

  return (
    <div className="dashboard-container">
      {/* <MentorSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} /> */}
      <main className={`main-content ${isSidebarOpen ? "" : "collapsed"}`}>
        <h1>My Assigned Sessions</h1>

        {sessions.length === 0 ? (
          <p>No sessions assigned yet.</p>
        ) : (
          <div className="mentor-session-list">
            {sessions.map((session) => (
              <div key={session._id} className="session-card">
                <h3>{session.topic}</h3>
                <p><strong>Student:</strong> {session.student?.name}</p>
                <p><strong>Email:</strong> {session.student?.email}</p>
                <p><strong>Status:</strong> {session.status}</p>

                {session.scheduledTime ? (
                  <p><strong>Meeting Time:</strong> {new Date(session.scheduledTime).toLocaleString()}</p>
                ) : (
                  <p className="pending">Meeting not scheduled yet</p>
                )}

                {session.description && (
                  <p><strong>Description:</strong> {session.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default MentorSessions;
