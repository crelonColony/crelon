import React, { useState } from "react";
import "../Style/Program.css";
import Card1 from "../Component/Card1";
import EventsTabs from "../Component/EventCard";
import EventCard from "../Component/EventCard";
import { useOnScreen } from "../hooks/useOnScreen";
import ProgramHero from "../assets/programImages.png"
import GlimpseCarousel from "../Component/GlimpseCarousel";
import Testimonial from "../Component/Testonomial";

import EvetnSection from "../Component/EventSecton"
const Program = () => {
  const [cardRef, cardVisible] = useOnScreen();
  const [testinomialRef, testinomialVisible] = useOnScreen();
  
  const [activeTab, setActiveTab] = useState("All Events");

  return (
    <>
      {/* <div className="info-card-head">
        <div className="info-head">
          <div className="heading">
            <h1>Programs & </h1>
            <div className="content">
              <h1 className="title">
                Events
                <div className="aurora">
                  <div className="aurora__item"></div>
                  <div className="aurora__item"></div>
                  <div className="aurora__item"></div>
                  <div className="aurora__item"></div>
                </div>
              </h1>
            </div>
          </div>
          <p className="para">
            Immersive learning experiences designed to accelerate your growth and connect you with opportunities
          </p>
        </div>
      </div>
       */}
      <div className="program-hero">
            <div className="left-program-hero">
              <div className="heading-hero-program">
                <div>
                  <div className="sign"></div>
                  <p>Learn Something New</p>
                </div>
                <h1>Programs That Don’t Just Teach <span>— They Transform. </span></h1>
                <p>Because at Crelon, growth isn’t theoretical — it’s practical</p>
              </div>    
              {/* <div className="btn-hero-program">
                <a href="#courses" className="btn">
                      Find Course
                </a>
                <button className="btn">Watch Previews</button>
              </div> */}
            </div>
            <div className="right-hero-program">
              <img src={ProgramHero} alt="ProgramHero" />
            </div>     
      </div>
      <div className="value-head">
        <h2>Your <span>Learning Pathway</span></h2>
        <p>Multiple pathways to achieve your goals</p>
      </div>
      
      <div 
        ref={cardRef}
        className={`core-value-section ${cardVisible ? "visible" : ""}`}
      >
        <div className="value-card" id="box1">
          <div>
            <h1>Discover Your Interest</h1>
            <p>Dive into events, discussions, and hands-on sessions that match your passion and curiosity.</p>
          </div>
        </div>

        <div className="value-card" id="box2">
          <div>
            <h1>Create Real Projects</h1>
            <p>Collaborate on challenges and build solutions that strengthen your portfolio and skills.</p>
          </div>
        </div>

        <div className="value-card" id="box3">
          <div>
            <h1>Get Your Work Seen</h1>
            <p>Present your projects to real audiences, mentors, and potential employers.</p>
          </div>
        </div>

        <div className="value-card" id="box4">
          <div>
            <h1>Grow Your Brand</h1>
            <p>Develop your personal brand and expand your network.</p>
          </div>
        </div>
      </div>

      <section className="glimpse-section">
        <div className="value-head">
          <h2>Your <span>Glimpses</span></h2>
          {/* <p>Multiple pathways to achieve your goals</p> */}
        </div>
        <GlimpseCarousel/>
      </section>
      
      <div className="value-head" id="courses">
        <h2>Upcoming <span>Events Calendar</span></h2>
        <p>Mark your calendar and join us for these exciting opportunities</p>
      </div>
      <EvetnSection/>
      {/* 
      {/* <section className="cta-section">
        <h2 className="cta-title">Don't Miss Out on Opportunities</h2>
        <p className="cta-subtitle">
          Join our community and get notified about upcoming events and programs
        </p>
        <button className="cta-btn">
          Join Community <span className="arrow">&#8594;</span>
        </button>
      </section> */}
      <section
        ref={testinomialRef}
        className={`testomial-section ${testinomialVisible ? "visible" : ""}`}
      >
        <Testimonial/>
      </section>
    </>
  );
};

export default Program;

