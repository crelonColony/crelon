import React from "react";
import "../Style/ValueCard.css";

function ValueCard({ 
  icon, 
  title, 
  description, 
  bgColor = "#fff", 
  iconBg = "#7b53f7",
  iconColor = "#fff", 
}) {
  return (
    <div className="value-card" style={{ background: bgColor }}>
      <div className="value-icon-container" style={{ background: iconBg }}>
        <span style={{ color: iconColor }}>{icon}</span>
      </div>
      <div className="value-title">{title}</div>
      <div className="value-description">{description}</div>
    </div>
  );
}

export default ValueCard;
