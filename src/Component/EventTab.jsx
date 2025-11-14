import React, { useState } from "react";
import "../Style/EventTab.css"; 

const tabs = [
  "All Events",
  "Workshops",
  "Hackathons",

];

function EventsTabs({ onTabChange }) {
  const [active, setActive] = useState(0);

  function handleTab(idx) {
    setActive(idx);
    if (onTabChange) onTabChange(tabs[idx]);
  }

  return (
    <div className="events-tabs-container">
      {tabs.map((tab, idx) => (
        <button
          key={tab}
          className={`events-tab ${active === idx ? "active" : ""}`}
          onClick={() => handleTab(idx)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default EventsTabs;
