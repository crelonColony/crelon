import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentSidebar from "./DashboardNavbar";
import "../Style/StudentSetting.css";

function StudentSettings() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [passwords, setPasswords] = useState({ current: "", new: "", confirm: "" });
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser({ name: data.name, email: data.email, phone: data.phone });
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, [token]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:5000/api/profile/update", user, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Profile updated successfully!");
    } catch (error) {
      alert("Failed to update profile.");
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      return alert("New passwords do not match!");
    }
    try {
      await axios.put(
        "http://localhost:5000/api/profile/change-password",
        passwords,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Password changed successfully!");
      setPasswords({ current: "", new: "", confirm: "" });
    } catch (error) {
      alert("Failed to change password.");
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        await axios.delete("http://localhost:5000/api/profile/delete", {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Account deleted successfully!");
        localStorage.clear();
        window.location.href = "/login";
      } catch (error) {
        alert("Error deleting account.");
      }
    }
  };

  return (
    <div className="dashboard-container">
      <StudentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main className={`main-content ${isSidebarOpen ? "" : "collapsed"}`}>
        <h1>Settings</h1>

        {/* Profile Update Section */}
        <div className="settings-section">
          <h2>Profile Information</h2>
          <form onSubmit={handleProfileUpdate} className="settings-form">
            <input
              type="text"
              placeholder="Full Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
            <button type="submit" className="save-btn">
              Save Changes
            </button>
          </form>
        </div>

        {/* Password Change Section */}
        <div className="settings-section">
          <h2>Change Password</h2>
          <form onSubmit={handlePasswordChange} className="settings-form">
            <input
              type="password"
              placeholder="Current Password"
              value={passwords.current}
              onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="New Password"
              value={passwords.new}
              onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={passwords.confirm}
              onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
              required
            />
            <button type="submit" className="save-btn">
              Update Password
            </button>
          </form>
        </div>

        {/* Account Delete Section */}
        <div className="settings-section danger-zone">
          <h2>Danger Zone</h2>
          <p>Deleting your account is irreversible. All your data will be lost.</p>
          <button className="delete-btn" onClick={handleDeleteAccount}>
            Delete Account
          </button>
        </div>
      </main>
    </div>
  );
}

export default StudentSettings;
