import React from "react";
import "../Style/Home1.css"; // save the CSS below as this file
// import Card1 from "../Component/Card1";
import { Link } from "react-router-dom";
import Img from "../assets/OIP.webp"

function Home1() {
  return (
    <div className="home1-container">
      <div className="home1-left-container">
        <div className="home1-heading">
          <h1>Welcome to</h1>
          <div className="home1-content">
            <h1 className="home1-title">
              CRELON
              <div className="aurora">
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
              </div>
            </h1>
          </div>
          <p className="home1-para">
            A community connecting students and startups through innovation, collaboration, and real-world learning.
          </p>
        </div>
        <div className="home1-btn">
          <a href="#join-section" className="btn">
            Get Start
          </a>
          <Link to="/community" className="btn">
            Join Community
          </Link>
        </div>
      </div>
      <div className="home1-right-container">
        {/* <div className="circle1" /> */}
        <img src={Img} alt=""  className="oip-img"/>
      </div>
    </div>
  );
}

export default Home1;
