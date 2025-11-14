import React from "react";
import "../Style/ConnectPlatform.css";

function ConnectPlatform() {
  return (
    <div className="connect-platform-container">
      <h1>
        Connect on Your <span className="highlight">Favorite Platform</span>
      </h1>
      <p className="subtitle">
        Choose where you want to engage with the community
      </p>
      <div className="platforms-row">
        <div className="platform-card">
          <div className="platform-icon discord">D</div>
          <h2>Discord</h2>
          <div className="member-count">2,500+ Members</div>
          <p className="platform-desc">
            Real-time chat, voice channels, and community events
          </p>
          <button className="platform-btn discord-btn">Join Discord</button>
        </div>
        <div className="platform-card">
          <div className="platform-icon slack">S</div>
          <h2>Slack</h2>
          <div className="member-count">1,800+ Members</div>
          <p className="platform-desc">
            Professional networking and project collaboration
          </p>
          <button className="platform-btn slack-btn">Join Slack</button>
        </div>
      </div>
    </div>
  );
}

export default ConnectPlatform;
