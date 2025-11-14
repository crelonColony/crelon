import React from "react";
import "../Style/About.css"
import ValueCard from "../Component/ValueCard";
import TeamSection from "../Component/Team";
import { useOnScreen } from "../hooks/useOnScreen";

import { Link } from "react-router-dom";
import Core from "../Component/Core";
const Info = () => {

    const [ref, isVisible] = useOnScreen();
    const [team, isteam] = useOnScreen();

    return(
  <>
    {/* <div className="info-card-head">
        <div className="info-head">
        <div className="heading">
            <h1>About</h1>
            <div class="content">
                <h1 class="title">CRELON
                    <div class="aurora">
                    <div class="aurora__item"></div>
                    <div class="aurora__item"></div>
                    <div class="aurora__item"></div>
                    <div class="aurora__item"></div>
                    </div>
                </h1>
                
            </div>
                            
            </div>
                <p className="para">Bridging the gap between academic learning and real-world innovation, one connection at a time.</p>
            </div>
    </div> */}

    <div className="about-card">
        <div class="about-content">
            <h1 class="about-title">CRELON
                <div class="about-aurora">
                <div class="about-aurora__item"></div>
                <div class="about-aurora__item"></div>
                <div class="about-aurora__item"></div>
                <div class="about-aurora__item"></div>
                </div>
            </h1>
        </div>
        <div className="about-para-container">
            <p className="about-para">Bridging the gap between academic learning and real-world innovation, one connection at a time.</p>
        </div>
        <div className="contact-btn">
            <Link to="/login" className='btn'>
              Get In Tocuh
            </Link>
        </div>
    </div>

    <div className="mv-container">
      <div className="mission">
        <div className="mission-head">
          <h2>
            Our <span>Mission</span>
          </h2>
        </div>
        <div className="mission-para">
          <p>
            CRELON was founded with a simple yet powerful vision: to create a
            thriving ecosystem where students don't just learn theory, but gain
            hands-on experience through real projects with innovative startups.
          </p>
          <p>
            We believe that the best learning happens through doing. By
            connecting passionate students with ambitious startups, we're
            creating opportunities for mutual growth, innovation, and success.
          </p>
        </div>
      </div>

      <div className="vission">
        <i className="fi fi-rs-rocket-lunch"></i>
        <h2>The Vision</h2>
        <p>
          To become the world's leading platform connecting the next generation
          of talent with innovative companies, fostering a culture of continuous
          learning and entrepreneurship.
        </p>
      </div>
    </div>

    


  </>
);
}
export default Info;
