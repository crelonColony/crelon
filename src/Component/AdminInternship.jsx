import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentSidebar from "./AdminNavbar";
import "../Style/AdminInternship.css";

function AdminInternships() {
  const [internships, setInternships] = useState([]);
  const [form, setForm] = useState({
    title: "",
    company: "",
    description: "",
    duration: "",
    location: "",
    type: "free",
    stipend: 0,
  });
  const [image, setImage] = useState(null);
  const token = localStorage.getItem("token");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  const fetchInternships = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/internships", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setInternships(data);
    } catch (error) {
      console.error("Error fetching internships:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInternships();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    Object.keys(form).forEach((k) => fd.append(k, form[k]));
    if (image) fd.append("image", image);

    await axios.post("http://localhost:5000/api/internships", fd, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    setForm({
      title: "",
      company: "",
      description: "",
      duration: "",
      location: "",
      type: "free",
      stipend: 0,
    });
    setImage(null);
    fetchInternships();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/internships/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchInternships();
  };

  if (loading) return <p className="loading">Loading internships...</p>;

  return (
    <div className="dashboard-container">
      <StudentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <main className={`main-content ${isSidebarOpen ? "" : "collapsed"}`}>
        <div className="internship-header">
          <h1>Manage Internships</h1>
          <p>Create, View, and Delete Internship Opportunities</p>
        </div>

        <form className="internship-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
            <input
              placeholder="Company"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              required
            />
          </div>

          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />

          <div className="form-row">
            <input
              placeholder="Duration"
              value={form.duration}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
              required
            />
            <input
              placeholder="Location"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              required
            />
          </div>

          <div className="form-row">
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option value="free">Free</option>
              <option value="stipend">Stipend</option>
            </select>

            {form.type === "stipend" && (
              <input
                type="number"
                placeholder="Stipend Amount"
                value={form.stipend}
                onChange={(e) =>
                  setForm({ ...form, stipend: e.target.value })
                }
              />
            )}

            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              accept="image/*"
            />
          </div>

          <button type="submit" className="create-btn">
            + Create Internship
          </button>
        </form>

        <section className="internship-list">
          <h2>All Internships</h2>
          <div className="internship-grid">
            {internships.map((i) => (
              <div key={i._id} className="internship-card">
                <img
                  src={`http://localhost:5000${i.image}`}
                  alt={i.title}
                  className="internship-image"
                />
                <div className="internship-info">
                  <h3>{i.title}</h3>
                  <p><strong>Company:</strong> {i.company}</p>
                  <p>{i.description}</p>
                  <p>
                    <strong>Type:</strong>{" "}
                    {i.type === "free" ? "Free" : `Stipend ₹${i.stipend}`}
                  </p>
                  <p>
                    <strong>Registered:</strong> {i.applicants?.length || 0}
                  </p>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(i._id)}
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
}

export default AdminInternships;
