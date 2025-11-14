import React, { useState, useEffect } from "react";
import StudentSidebar from "../Component/DashboardNavbar"; // sidebar
import "../Style/StudentSidebar.css";
import "../Style/Profile.css"
import axios from "axios";

const ProfilePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [profile, setProfile] = useState({
    name: "",
    tagline: "",
    role: "",
    bio: "",
    address: "",
    dob: "",
    skills: [],
    projects: [],
    socialLinks: [],
    profileImage: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/profile", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setProfile({
          name: data.name || "",
          tagline: data.tagline || "",
          role: data.role || "",
          bio: data.bio || "",
          address: data.address || "",
          dob: data.dob ? new Date(data.dob).toISOString().substr(0, 10) : "",
          skills: data.skills || [],
          projects: data.projects || [],
          socialLinks: data.socialLinks || [],
          profileImage: data.profileImage || "",
        });
      } catch (err) {
        console.error(err);
        alert("Failed to load profile. Please login again.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) return <p>Loading...</p>;

  const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });
  const handleImageChange = (e) => setImageFile(e.target.files[0]);

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      Object.keys(profile).forEach((key) => {
        if (Array.isArray(profile[key]) || typeof profile[key] === "object") {
          formData.append(key, JSON.stringify(profile[key]));
        } else {
          formData.append(key, profile[key]);
        }
      });
      if (imageFile) formData.append("profileImage", imageFile);

      const { data } = await axios.put("http://localhost:5000/api/profile", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setProfile(data);
      setEditMode(false);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="dashboard-container">
      <StudentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <main className={`main-content ${isSidebarOpen ? "" : "collapsed"} ${editMode ? "editing-mode" : ""}`}>
  <h1>Profile</h1>

  <div className={`profile-card ${editMode ? "editing" : ""}`}>
    {profile.profileImage && (
      <img
        src={`http://localhost:5000/${profile.profileImage}`}
        alt="Profile"
        className="profile-image"
      />
    )}
    {editMode && <input type="file" onChange={handleImageChange} />}

    <input
      name="name"
      value={profile.name}
      onChange={handleChange}
      disabled={!editMode}
      placeholder="Full Name"
      className="profile-input"
    />
    <input
      name="tagline"
      value={profile.tagline}
      onChange={handleChange}
      disabled={!editMode}
      placeholder="Tagline"
      className="profile-input"
    />
    <input
      name="role"
      value={profile.role}
      onChange={handleChange}
      disabled={!editMode}
      placeholder="Role"
      className="profile-input"
    />
    <input
      name="bio"
      value={profile.bio}
      onChange={handleChange}
      disabled={!editMode}
      placeholder="Bio"
      className="profile-input"
    />
    <input
      name="address"
      value={profile.address}
      onChange={handleChange}
      disabled={!editMode}
      placeholder="Address"
      className="profile-input"
    />
    <input
      type="date"
      name="dob"
      value={profile.dob}
      onChange={handleChange}
      disabled={!editMode}
      className="profile-input"
    />

    <div className="button-group">
      {!editMode ? (
        <button onClick={() => setEditMode(true)}>Edit Profile</button>
      ) : (
        <>
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setEditMode(false)} className="cancel-btn">Cancel</button>
        </>
      )}
    </div>
  </div>
</main>

    </div>
  );
};

export default ProfilePage;
