import React from "react";
import HeroImage from "../assets/hero-image.jpg"
import "../Style/Hero.css";

function Hero() {
  return (
    <section>
        {/* <div className="top-heading">
            <i class="fi fi-rc-sparkles"></i>
            Where Innovation Meets Talent
        </div> */}
        <div className="section-part">
            <div className="left-container">
                <div className="heading">
                    <h1>Welcome to</h1>
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
                    <p>A community connecting students and startups through innovation, collaboration, and real-world learning.</p>
                </div>
                <div className="btn-container">
                    <button className="btn-style702">Go To Dashboard</button>
                    <button className="btn-style702" >Explore Event</button>
                </div>
                {/* <div className="bottom-bar">
                    <div>
                        <p>For  Student</p>
                    </div>
                    <div>
                        <p>For  Startup</p>
                    </div>
                    <div>
                        <p>Build Together</p>
                    </div>
                </div> */}
            </div>
            <div className="right-container">
                <img src={HeroImage} alt="heroImage" />
                <img src={HeroImage} alt="heroImage" className="glitch-overlay" />
            </div>
        </div>
    </section>
  );
}

export default Hero;
