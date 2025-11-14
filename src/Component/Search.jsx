import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Bell, LogOut } from "lucide-react";
import "../Style/LiveSearch.css"; // 👈 CSS file we'll create

export default function LiveSearch() {
  const [query, setQuery] = useState("");
  const [events, setEvents] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [imageFile, setImageFile] = useState(null);
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

  const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });
  const handleImageChange = (e) => setImageFile(e.target.files[0]);

  
  const navigate = useNavigate();

  useEffect(() => {
    if (!query) return setEvents([]);

    const controller = new AbortController();
    const timeout = setTimeout(async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/search?q=${query}`,
          { signal: controller.signal }
        );
        setEvents(data.events);
      } catch (err) {
        if (err.name !== "CanceledError") console.error(err);
      }
    }, 300);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [query]);

  const handleClick = (id) => {
    navigate(`/events/${id}`);
    setQuery("");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };


  return (
    <div className="search-header">
      {/* Search Input */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search events..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {events.length > 0 && (
          <div className="search-results">
            {events.map((e) => (
              <div key={e._id} className="search-item" onClick={() => handleClick(e._id)}>
                <strong>{e.title}</strong>
                <p>{e.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Icons (Notification + Profile) */}
      <div className="header-right">
        <div className="notification">
          <Bell size={22} />
          {/* <span className="badge">3</span> */}
        </div>

        <div className="profile-dropdown">
          {/* <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
            className="profile-img"
            onClick={() => setShowDropdown(!showDropdown)}
          /> */}
          <img
        src={`http://localhost:5000/${profile.profileImage}`}
        alt="Profile"
        className="profile-img"
      />
          {showDropdown && (
            <div className="dropdown-menu">
              <button onClick={handleLogout}>
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
