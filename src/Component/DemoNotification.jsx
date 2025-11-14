import React, { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function DemoNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [notifOpen, setNotifOpen] = useState(false);
  const navigate = useNavigate();

  // Demo notifications
  useEffect(() => {
    const demoNotifs = [
      { _id: "1", type: "Event", message: "Hackathon starts tomorrow! Register now.", read: false, link: "/events/demo1" },
      { _id: "2", type: "Internship", message: "New internship posted: Frontend Developer", read: false, link: "/internships/demo2" },
      { _id: "3", type: "Alert", message: "Your profile is incomplete. Update it now.", read: false, link: "/profile" },
    ];
    setNotifications(demoNotifs);
  }, []);

  const handleClick = (id, link) => {
    setNotifications(prev => prev.map(n => n._id === id ? { ...n, read: true } : n));
    if (link) navigate(link);
    setNotifOpen(false);
  };

  return (
    <div style={{ position: "relative", display: "inline-block", marginLeft: "10px" }}>
      {/* Bell icon */}
      <FaBell size={24} onClick={() => setNotifOpen(!notifOpen)} style={{ cursor: "pointer" }} />

      {/* Unread badge */}
      {notifications.filter(n => !n.read).length > 0 && (
        <span style={{
          position: "absolute",
          top: -5,
          right: -5,
          background: "red",
          color: "#fff",
          borderRadius: "50%",
          padding: "2px 6px",
          fontSize: "12px",
          zIndex: 1001
        }}>
          {notifications.filter(n => !n.read).length}
        </span>
      )}

      {/* Notification dropdown */}
      {notifOpen && (
        <div style={{
          position: "absolute",
          top: "30px",
          right: 0,
          width: "300px",
          maxHeight: "300px",
          overflowY: "auto",
          border: "1px solid #ccc",
          borderRadius: "5px",
          background: "#fff",
          zIndex: 1000,
          marginTop: "5px",
        }}>
          {notifications.map(n => (
            <div
              key={n._id}
              onClick={() => handleClick(n._id, n.link)}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
                background: n.read ? "#f9f9f9" : "#e6f7ff"
              }}
            >
              <strong>{n.type}</strong>
              <p style={{ margin: "5px 0", fontSize: "14px" }}>{n.message}</p>
            </div>
          ))}
          {notifications.length === 0 && <p style={{ padding: "10px" }}>No notifications</p>}
        </div>
      )}
    </div>
  );
}
