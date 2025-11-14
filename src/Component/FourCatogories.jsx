import React from "react";
import "../Style/FourCategories.css";
import { FaPalette, FaHandsHelping, FaLightbulb, FaRocket } from "react-icons/fa";
import { useOnScreen } from "../hooks/useOnScreen"; // make sure this path is correct

const FourCategories = () => {
  const [cardRef, cardVisible] = useOnScreen();

  return (
    <section
      ref={cardRef}
      className={`four-categories ${cardVisible ? "visible" : ""}`}
    >
      <div className="four-grid">
        {/* Row 1 */}
        <div className={`four-item fade-slide ${cardVisible ? "show" : ""}`}>
          <div className="four-icon-box left">
            <div className="four-circle">
              <FaPalette />
            </div>
          </div>
          <div className="four-text">
            <h3>Create Beyond Limits</h3>
            <p>
              Build Across Boundaries — design, tech, business, or content —
              bring your skills, explore new domains, and create without limits.
            </p>
          </div>

          <div className="four-text right-text">
            <h3>Together, We Build Better</h3>
            <p>
              Collaborate, Don't Compete — designers meet developers, marketers
              meet makers. The best projects happen when different minds unite.
            </p>
          </div>
          <div className="four-icon-box right">
            <div className="four-circle">
              <FaHandsHelping />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className={`four-item fade-slide delay ${cardVisible ? "show" : ""}`}>
          <div className="four-icon-box left">
            <div className="four-circle">
              <FaLightbulb />
            </div>
          </div>
          <div className="four-text">
            <h3>Your Ideas Deserve the Spotlight</h3>
            <p>
              Your Project, Your Voice — whether it's an app, a campaign, or a
              startup idea — your work gets the spotlight and support it
              deserves.
            </p>
          </div>

          <div className="four-text right-text">
            <h3>Grow by Building</h3>
            <p>
              Learn While You Create — every project is a classroom. Build your
              portfolio while mastering skills that matter in the real world.
            </p>
          </div>
          <div className="four-icon-box right">
            <div className="four-circle">
              <FaRocket/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourCategories;
