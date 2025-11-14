import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style/CreateUser.css";
import StudentSidebar from "./AdminNavbar";

function CreateUser() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    role: "mentor",
  });
  const token = localStorage.getItem("token");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/auth/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Create new user
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/create-user", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert(`${form.role} created successfully`);
      setForm({
        name: "",
        email: "",
        contact: "",
        password: "",
        role: "mentor",
      });
      fetchUsers();
    } catch (err) {
      alert(err.response?.data?.msg || "Error creating user");
    }
  };

  // Update user role
  const updateRole = async (id, role) => {
    try {
      await axios.put(
        `http://localhost:5000/api/users/${id}/role`,
        { role },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Role updated successfully");
      fetchUsers();
    } catch (err) {
      alert(err.response?.data?.msg || "Error updating role");
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("User deleted successfully");
      fetchUsers();
    } catch (err) {
      alert(err.response?.data?.msg || "Error deleting user");
    }
  };

  return (
    <div className="dashboard-container">
      <StudentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <main className={`main-content ${isSidebarOpen ? "" : "collapsed"}`}>
        <div className="create-user-container">
          <h1 className="page-title">👥 Manage Users</h1>

          {/* Create User Form */}
          <form className="create-user-form" onSubmit={handleCreate}>
            <h2>Create New User</h2>
            <div className="form-grid">
              <input
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <input
                placeholder="Contact"
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                required
              />
              <input
                placeholder="Password"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
              >
                <option value="mentor">Mentor</option>
                <option value="member">Member</option>
                <option value="student">Startup</option>
              </select>
            </div>
            <button type="submit" className="create-btn">
              ➕ Create User
            </button>
          </form>

          {/* Users Table */}
          <div className="user-table-section">
            <h2>All Registered Users</h2>
            <div className="table-wrapper">
              <table className="user-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Role</th>
                    <th>Assign Role</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.contact}</td>
                      <td>
                        <span className={`role-badge ${user.role}`}>
                          {user.role || "student"}
                        </span>
                      </td>
                      <td>
                        <select
                          value={user.role || ""}
                          onChange={(e) => updateRole(user._id, e.target.value)}
                        >
                          <option value="student">Student</option>
                          <option value="mentor">Mentor</option>
                          <option value="member">Member</option>
                          <option value="admin">Admin</option>
                          <option value="admin">Startup</option>
                        </select>
                      </td>
                      <td>
                        <button
                          className="delete-btn"
                          onClick={() => deleteUser(user._id)}
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CreateUser;
