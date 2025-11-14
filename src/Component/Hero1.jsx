import React from "react";

import "../Style/Hero.css";

function Hero1() {
  return (
    <section className="section-container">
        <div className="section-part">
                    <div className="left-container">
                        <div className="heading">
                            <h1>Welcome To</h1>
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
                        <p className="para">A community connecting students and startups through innovation, collaboration, and real-world learning.</p>
                        <div className="btn-container">
                            <button className="btn-style702">Go To Dashboard</button>
                            <button className="btn-style702" >Explore Event</button>
                        </div>
                    </div>
                    
        </div>
    </section>
  );
}

export default Hero1;
