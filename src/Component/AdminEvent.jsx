import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar"; // sidebar component
import "../Style/StudentSidebar.css";
import "../Style/AdminEvents.css";

const AdminEvents = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [events, setEvents] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    type: "free",
    price: 0,
    mentor: "",
  });
  const [image, setImage] = useState(null);
  const token = localStorage.getItem("token");

  const fetchEvents = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/events", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvents(data);
    } catch (err) {
      console.error("Error fetching events", err);
    }
  };

  const fetchMentors = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/users/mentors", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMentors(data);
    } catch (err) {
      console.error("Error fetching mentors", err);
    }
  };

  useEffect(() => {
    fetchEvents();
    fetchMentors();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));
    if (image) formData.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/events", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Event created successfully!");
      setForm({
        title: "",
        description: "",
        date: "",
        location: "",
        type: "free",
        price: 0,
        mentor: "",
      });
      setImage(null);
      fetchEvents();
    } catch (err) {
      alert(err.response?.data?.msg || "Error creating event");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchEvents();
    } catch (err) {
      alert(err.response?.data?.msg || "Error deleting event");
    }
  };

  return (
    <div className="dashboard-container">
      <AdminNavbar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <main className={`main-content ${isSidebarOpen ? "" : "collapsed"}`}>
        <h1 className="page-title">🎯 Admin Event Management</h1>

        {/* Event Creation Form */}
        <form className="event-form" onSubmit={handleCreate}>
          <div className="form-grid">
            <input
              type="text"
              placeholder="Event Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Location"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>

            {form.type === "paid" && (
              <input
                type="number"
                placeholder="Price"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            )}

            <select
              value={form.mentor}
              onChange={(e) => setForm({ ...form, mentor: e.target.value })}
            >
              <option value="">Select Mentor</option>
              {mentors.map((m) => (
                <option key={m._id} value={m._id}>
                  {m.name}
                </option>
              ))}
            </select>

            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>

          <textarea
            placeholder="Event Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          ></textarea>

          <button type="submit" className="create-btn">
            + Create Event
          </button>
        </form>

        {/* Event List */}
        <section className="event-list-section">
          <h2>📅 All Events</h2>
          <div className="event-list">
            {events.map((ev) => (
              <div className="event-card" key={ev._id}>
                {ev.image && (
                  <img
                    src={`http://localhost:5000${ev.image}`}
                    alt={ev.title}
                    className="event-img"
                  />
                )}
                <div className="event-info">
                  <h3>{ev.title}</h3>
                  <p>{ev.description}</p>
                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(ev.date).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Type:</strong> {ev.type}{" "}
                    {ev.type === "paid" && `(₹${ev.price})`}
                  </p>
                  <p>
                    <strong>Mentor:</strong> {ev.mentor?.name || "TBA"}
                  </p>
                  <p>
                    <strong>Registered:</strong>{" "}
                    {ev.registeredStudents?.length || 0}
                  </p>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(ev._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminEvents;
