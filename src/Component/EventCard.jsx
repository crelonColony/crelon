import React, { useRef, useEffect } from "react";
import "../Style/EventCard.css";
import { useOnScreen } from "../hooks/useOnScreen";

function EventCard({ image, title, description, date, location, spots, button, onClick }) {

  const [eventRef, eventVisible] = useOnScreen();
  const tiltRef = useRef(null);

  /* === Subtle 3D Tilt Hover Effect === */
  useEffect(() => {
    const card = tiltRef.current;

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
        {/* ====== IMAGE ====== */}
        <div className="event-img-modern">
          <img src={image} alt={title} />
        </div>

        {/* ====== CONTENT ====== */}
        <div className="event-details-modern">
          <div className="event-title-modern">{title}</div>
          <div className="event-description-modern">{description}</div>

          <div className="meta-modern">
            <span><i className="fi fi-br-calendar"></i> {date}</span>
            <span><i className="fi fi-br-marker"></i> {location || "TBA"}</span>
            <span><i className="fi fi-br-users-alt"></i> {spots}</span>
          </div>

          <div className="event-button-row-modern">
            <button className="register-btn-modern" onClick={onClick}>
              {button} <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
