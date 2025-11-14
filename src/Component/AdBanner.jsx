import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/AdBanner.css"; // External CSS file

export default function AdBanner() {
  const [banners, setBanners] = useState([]);
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Demo banners (replace later with backend data)
  useEffect(() => {
    const demoData = [
      {
        id: 1,
        title: "HackOverflow 2025 - Join Now!",
        image:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
        link: "/events/hackoverflow",
      },
      {
        id: 2,
        title: "Internship Alert: Frontend Developer at Google",
        image:
          "https://images.unsplash.com/photo-1581091870622-1e7e63a2b9b0?auto=format&fit=crop&w=1200&q=80",
        link: "/internships/frontend",
      },
      {
        id: 3,
        title: "Startup Bootcamp – Register for Free!",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        link: "/events/startup-bootcamp",
      },
    ];
    setBanners(demoData);
  }, []);

  // Auto slide (if more than one)
  useEffect(() => {
    if (banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners]);

  const handleClick = (link) => {
    navigate(link);
  };

  if (banners.length === 0) return null;

  return (
    <div className="ad-banner-container">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`ad-banner-slide ${
            index === current ? "active" : "inactive"
          }`}
          onClick={() => handleClick(banner.link)}
        >
          <img src={banner.image} alt={banner.title} className="ad-banner-img" />
          <div className="ad-banner-overlay">
            <h2 className="ad-banner-title">{banner.title}</h2>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      {banners.length > 1 && (
        <div className="ad-banner-dots">
          {banners.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current ? "active-dot" : ""}`}
              onClick={() => setCurrent(i)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
}
