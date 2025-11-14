import React, { useState, useEffect } from 'react';
import "../Style/DashboardProfile.css";
import axios from "axios";
const DashboardProfile = () => {
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
  const [loading, setLoading] = useState(true);

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

  const [mentors, setMentors] = useState([
    {
      id: 1,
      name: 'Pushkraj Sainio',
      role: 'UI Designer',
      avatar: 'https://i.pravatar.cc/150?img=33',
      isOnline: true,
      isFollowing: false
    },
    {
      id: 2,
      name: 'Zakir Hossanshi',
      role: 'Mentor',
      avatar: 'https://i.pravatar.cc/150?img=59',
      isOnline: true,
      isFollowing: false
    },
    {
      id: 3,
      name: 'Leonardo Samuel',
      role: 'Mentor',
      avatar: 'https://i.pravatar.cc/150?img=68',
      isOnline: true,
      isFollowing: false
    }
  ]);

  const chartData = [
    { label: '01-06 Sep', height: 80 },
    { label: '11-20 Sep', height: 120 },
    { label: '21-30 Sep', height: 140 }
  ];

  const handleFollowToggle = (mentorId) => {
    setMentors(mentors.map(mentor => 
      mentor.id === mentorId 
        ? { ...mentor, isFollowing: !mentor.isFollowing }
        : mentor
    ));
  };

  const handleSeeAll = () => {
    alert('See All Mentors - Feature coming soon!');
  };

  return (
    <div className="container">
      {/* Statistics Card */}
      <div className="statistic-card">
        <div className="card-header">
          <h2 className="card-title">Statistic</h2>
          <span className="menu-icon">⋮</span>
        </div>
        
        <div className="profile-section">
          <div className="profile-avatar">
            <div className="avatar-ring">
              {profile.profileImage && (
                <img
                    src={`http://localhost:5000/${profile.profileImage}`}
                    alt="Profile"
                    width="150"
                    className="avatar-img"
                />
                )}
            </div>
            
          </div>
          <div className="greeting">
            {profile.name} <span className="greeting-emoji">👋</span>
          </div>
          <div className="subtitle">Continue your learning to achive your target.</div>
          <div className="subtitle">{profile.role}</div>
        </div>

        <div className="chart-section">
          <div className="chart-container">
            {chartData.map((bar, index) => (
              <div key={index} className="chart-bar">
                <div className="bar" style={{ height: `${bar.height}px` }}></div>
                <div className="bar-label">{bar.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Your Mentor Card */}
      <div className="mentor-card">
        <div className="card-header">
          <h2 className="card-title">Your mentor</h2>
          {/* <span className="menu-icon" style={{ fontSize: '24px', cursor: 'pointer' }}>+</span> */}
        </div>

        <div className="mentor-list">
          {mentors.map(mentor => (
            <div key={mentor.id} className="mentor-item">
              <div className="mentor-avatar-wrapper">
                <img 
                  src={mentor.avatar} 
                  alt={mentor.name} 
                  className="mentor-avatar" 
                />
                {/* {mentor.isOnline && <span className="online-indicator"></span>} */}
              </div>
              <div className="mentor-info">
                <div className="mentor-name">{mentor.name}</div>
                <div className="mentor-role">{mentor.role}</div>
              </div>
              {/* <button 
                className="follow-btn"
                onClick={() => handleFollowToggle(mentor.id)}
                style={{
                  background: mentor.isFollowing ? 'var(--color-primary)' : 'transparent',
                  color: mentor.isFollowing ? 'white' : 'var(--color-primary)'
                }}
              >
                <span>{mentor.isFollowing ? '✓' : '👤'}</span>
                <span>{mentor.isFollowing ? 'Following' : 'Follow'}</span>
              </button> */}
            </div>
          ))}
        </div>

        <button className="see-all-btn" onClick={handleSeeAll}>
          See All
        </button>
      </div>
    </div>
  );
};

export default DashboardProfile;
