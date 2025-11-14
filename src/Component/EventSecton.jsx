import React, { useState, useRef, useEffect } from "react";
import "../Style/EventTab.css";
import "../Style/EventCard.css";
import { useOnScreen } from "../hooks/useOnScreen";
import WordshopImage from "../assets/workshop.png"; // sample image

/* =====================
   Tabs Component
===================== */
const tabs = ["All Events", "Workshops", "Hackathons"];

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

/* =====================
   Card Component
===================== */
function EventCard({ image, title, description, date, location, spots, button }) {
  const [eventRef, eventVisible] = useOnScreen();
  const tiltRef = useRef(null);

  // Subtle tilt hover animation
  useEffect(() => {
    const card = tiltRef.current;
    if (!card) return;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `rotateX(${-y / 25}deg) rotateY(${x / 25}deg)`;
    };

    const handleLeave = () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="tilt-wrapper">
      <div
        ref={(node) => {
          eventRef.current = node;
          tiltRef.current = node;
        }}
        className={`event-card-modern ${eventVisible ? "visible" : ""}`}
      >
        {/* === Image === */}
        <div className="event-img-modern">
          <img src={image} alt={title} />
        </div>

        {/* === Content === */}
        <div className="event-details-modern">
          <h3 className="event-title-modern">{title}</h3>
          <p className="event-description-modern">{description}</p>

          <div className="meta-modern">
            <span><i className="fi fi-br-calendar"></i> {date}</span>
            <span><i className="fi fi-br-marker"></i> {location}</span>
            <span><i className="fi fi-br-users-alt"></i> {spots}</span>
          </div>

          <div className="event-button-row-modern">
            <button className="register-btn-modern">
              {button} <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =====================
   Main Section Component
===================== */
export default function EventsSection() {
  const [activeTab, setActiveTab] = useState("All Events");

  const events = [
    {
      category: "Workshops",
      title: "Design Thinking Workshop",
      description:
        "Master the art of design thinking and learn how to create user-centered solutions for complex problems.",
      date: "Dec 25, 2024",
      location: "Design Studio, Floor 3",
      spots: "15 / 25 spots",
      button: "Register Now",
      image: WordshopImage,
    },
    {
      category: "Hackathons",
      title: "AI/ML Hackathon 2024",
      description:
        "48-hour hackathon focused on building innovative AI and ML solutions for real-world challenges.",
      date: "Dec 20, 2024",
      location: "Innovation Center",
      spots: "28 / 50 spots",
      button: "Register Now",
      image: WordshopImage,
    },
    {
      category: "Workshops",
      title: "Startup & Student Mixer",
      description:
        "Network with innovative startups and talented students. Great opportunity to find collaborators and mentors.",
      date: "Dec 22, 2024",
      location: "WeWork Downtown",
      spots: "45 / 100 spots",
      button: "Register Now",
      image: WordshopImage,
    },
    {
      category: "Workshops",
      title: "UI/UX Bootcamp",
      description:
        "Dive deep into user experience design — hands-on prototyping and creative collaboration.",
      date: "Dec 28, 2024",
      location: "Lab 301",
      spots: "10 / 20 spots",
      button: "Register Now",
      image: WordshopImage,
    },
  ];

  const filteredEvents =
    activeTab === "All Events"
      ? events
      : events.filter((event) => event.category === activeTab);

  return (
    <section className="events-section">
      
      <EventsTabs onTabChange={setActiveTab} />

      <div className="event-containers">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => <EventCard key={index} {...event} />)
        ) : (
          <p className="no-events">No events found for this category.</p>
        )}
      </div>
    </section>
  );
}
