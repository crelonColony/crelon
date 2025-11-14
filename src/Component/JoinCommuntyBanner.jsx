import React from 'react';
import '../Style/JoinCommunityBaner.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function JoinCommunityBaner() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/community");
    window.scrollTo(0, 0);
  }

  return (
    <section className="community-container">
      {/* Top Avatar Group */}
      <div className="community-avatars top">
        <div className="avatar avatar1"></div>
        <div className="avatar avatar2"></div>
      </div>
      {/* Main Content */}
      <div className="community-content">
        <div className="community-label">OUR COMMUNITY</div>
        <h1>
          <span className="community-highlight">Join to Community of</span>
        </h1>
        <h2>
          Supporters That are Working <br /> Together to Success
        </h2>
        {/* <Link to="/community" className="btn">
          Join Community
        </Link> */}
        <button onClick={handleClick} className="btn">
          Join Community
        </button>
      </div>
      {/* Bottom Avatar Group */}
      <div className="community-avatars bottom">
        <div className="avatar avatar3"></div>
        <div className="avatar avatar4"></div>
        <div className="avatar avatar5"></div>
      </div>
    </section>
  );
}