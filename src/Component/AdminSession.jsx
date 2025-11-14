import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style/AdminSession.css";
import StudentSidebar from "./AdminNavbar";

function AdminSessions() {
  const [sessions, setSessions] = useState([]);
  const [mentors, setMentors] = useState([]);
  const token = localStorage.getItem("token");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const fetchSessions = async () => {
    const res = await axios.get("http://localhost:5000/api/sessions/all", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setSessions(res.data);
  };

  const fetchMentors = async () => {
    const res = await axios.get("http://localhost:5000/api/users/mentors", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setMentors(res.data);
  };

  useEffect(() => {
    fetchSessions();
    fetchMentors();
  }, []);

  const assignMentor = async (id, mentorId) => {
    if (!mentorId) return;
    await axios.put(
      `http://localhost:5000/api/sessions/${id}/assign`,
      { mentorId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchSessions();
  };

  const scheduleMeeting = async (id, time) => {
    if (!time) return;
    await axios.put(
      `http://localhost:5000/api/sessions/${id}/schedule`,
      { time },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchSessions();
  };

  return (
    <div className="dashboard-container">
      <StudentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <main className={`main-content ${isSidebarOpen ? "" : "collapsed"}`}>
        <div className="admin-sessions">
          <h1 className="page-title">🎓 Manage Sessions</h1>
          <div className="session-list">
            {sessions.map((s) => (
              <div key={s._id} className="session-card">
                <div className="session-info">
                  <h3>{s.topic}</h3>
                  <p>
                    <strong>Student:</strong> {s.student?.name || "Unknown"}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span className={`status ${s.status.toLowerCase()}`}>
                      {s.status}
                    </span>
                  </p>
                  <p>
                    <strong>Mentor:</strong>{" "}
                    {s.mentor ? s.mentor.name : "Not Assigned"}
                  </p>
                </div>

                <div className="session-actions">
                  {!s.mentor && (
                    <select
                      className="mentor-select"
                      onChange={(e) => assignMentor(s._id, e.target.value)}
                    >
                      <option value="">Assign Mentor</option>
                      {mentors.map((m) => (
                        <option key={m._id} value={m._id}>
                          {m.name}
                        </option>
                      ))}
                    </select>
                  )}
                  {s.mentor && !s.scheduledTime && (
                    <input
                      type="datetime-local"
                      className="schedule-input"
                      onBlur={(e) => scheduleMeeting(s._id, e.target.value)}
                    />
                  )}
                  {s.scheduledTime && (
                    <p className="meeting-time">
                      📅 {new Date(s.scheduledTime).toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminSessions;
