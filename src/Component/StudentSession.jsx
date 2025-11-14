import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentSidebar from "./DashboardNavbar";
import "../Style/StudentSession.css";
import Search from "../Component/Search";

function StudentSessions() {
  const [sessions, setSessions] = useState([]);
  const [form, setForm] = useState({ topic: "", description: "" });
  const token = localStorage.getItem("token");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const fetchSessions = async () => {
    const res = await axios.get("http://localhost:5000/api/sessions/my-sessions", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setSessions(res.data);
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/sessions/book", form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert("Session requested!");
    setForm({ topic: "", description: "" });
    fetchSessions();
  };

  return (
    <div className="dashboard-container">
      <StudentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main className={`main-content ${isSidebarOpen ? "" : "collapsed"}`}>
        <h1>Book a Mentor Session</h1>
        <form className="session-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Topic"
            value={form.topic}
            onChange={(e) => setForm({ ...form, topic: e.target.value })}
            required
          />
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <button type="submit">Book Session</button>
        </form>

        <h2>My Sessions</h2>
        <div className="session-list">
          {sessions.map((s) => (
            <div className="session-card" key={s._id}>
              <h3>{s.topic}</h3>
              <p>{s.description}</p>
              <p>Status: <strong>{s.status}</strong></p>
              {s.mentor && (
                <p>Mentor: {s.mentor.name} ({s.mentor.email})</p>
              )}
              {s.scheduledTime && (
                <p>Meeting Time: {new Date(s.scheduledTime).toLocaleString()}</p>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default StudentSessions;
