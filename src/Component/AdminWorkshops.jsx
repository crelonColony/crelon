import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentSidebar from "./AdminNavbar"; // your sidebar component
import "../Style/AdminWorkshops.css";

function AdminWorkshops() {
  const [workshops, setWorkshops] = useState([]);
  const [form, setForm] = useState({
    title: "",
    trainer: "",
    description: "",
    date: "",
    location: "",
    type: "free",
    price: 0,
  });
  const [image, setImage] = useState(null);
  const token = localStorage.getItem("token");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  // Fetch all workshops
  const fetchWorkshops = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/workshops");
      setWorkshops(data);
    } catch (error) {
      console.error("Error fetching workshops:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkshops();
  }, []);

  // Create new workshop
  const handleCreate = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    Object.keys(form).forEach((key) => fd.append(key, form[key]));
    if (image) fd.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/workshops", fd, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      alert("✅ Workshop created successfully!");
      setForm({
        title: "",
        trainer: "",
        description: "",
        date: "",
        location: "",
        type: "free",
        price: 0,
      });
      setImage(null);
      fetchWorkshops();
    } catch (err) {
      console.error("Error creating workshop:", err);
      alert(err.response?.data?.msg || "Failed to create workshop.");
    }
  };

  // Delete workshop
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this workshop?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/workshops/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("🗑️ Workshop deleted successfully!");
      fetchWorkshops();
    } catch (err) {
      console.error("Error deleting workshop:", err);
      alert("Failed to delete workshop.");
    }
  };

  if (loading) return <p className="loading">Loading workshops...</p>;

  return (
    <div className="dashboard-container">
      <StudentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <main className={`main-content ${isSidebarOpen ? "" : "collapsed"}`}>
        <div className="workshop-header">
          <h1>Manage Workshops</h1>
          <p>Create, View, and Manage all workshops</p>
        </div>

        {/* Workshop Creation Form */}
        <form className="workshop-form" onSubmit={handleCreate}>
          <div className="form-row">
            <input
              type="text"
              placeholder="Workshop Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Trainer Name"
              value={form.trainer}
              onChange={(e) => setForm({ ...form, trainer: e.target.value })}
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
          </div>

          <div className="form-row">
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
                placeholder="Price (₹)"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            )}

            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              accept="image/*"
            />
          </div>

          <button type="submit" className="create-btn">
            + Create Workshop
          </button>
        </form>

        {/* Workshop Listing */}
        <section className="workshop-list">
          <h2>All Workshops</h2>
          <div className="workshop-grid">
            {workshops.length === 0 ? (
              <p>No workshops available.</p>
            ) : (
              workshops.map((w) => (
                <div key={w._id} className="workshop-card">
                  {w.image ? (
                    <img
                      src={`http://localhost:5000${w.image}`}
                      alt={w.title}
                      className="workshop-image"
                    />
                  ) : (
                    <div className="placeholder">No Image</div>
                  )}
                  <div className="workshop-info">
                    <h3>{w.title}</h3>
                    <p><strong>Trainer:</strong> {w.trainer}</p>
                    <p><strong>Date:</strong> {new Date(w.date).toLocaleDateString()}</p>
                    <p><strong>Type:</strong> {w.type === "free" ? "Free" : `Paid (₹${w.price})`}</p>
                    <p><strong>Location:</strong> {w.location || "Online"}</p>
                    <p><strong>Registered:</strong> {w.registeredStudents?.length || 0} students</p>

                    <button className="delete-btn" onClick={() => handleDelete(w._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminWorkshops;
