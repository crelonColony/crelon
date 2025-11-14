import React from "react";
import "../Style/Community.css"
import ConnectPlatform from "../Component/ConnectPlatform";
import { useOnScreen } from "../hooks/useOnScreen";
import Card1 from "../Component/Card1";
import Testimonial from "../Component/Testonomial";
import CommunityImage from "../assets/community2.png"
import FourCategories from "../Component/FourCatogories"
import GlimpseCarousel from "../Component/GlimpseCarousel"
import { Link } from "react-router-dom";

const Community = () => {
  const [cardRef, cardVisible] = useOnScreen();
  return (
  <>
      {/* <div className="info-card-head">
        <div className="info-head">
        <div className="heading">
            <h1>Welcome to the </h1>
            <div class="content">
                <h1 class="title">Creative Colony 
                    <div class="aurora">
                    <div class="aurora__item"></div>
                    <div class="aurora__item"></div>
                    <div class="aurora__item"></div>
                    <div class="aurora__item"></div>
                    </div>
                </h1>
                
            </div>
                            
          </div>
              <p className="community-para"> Because growth feels better when you’re not doing it alone.</p>
              <div className="join-btn">
                <button className="btn">Join Commmunity</button>
                
              </div>
          </div>
          
    </div> */}
    <section className="community-hero">
      
      {/* LOGO (optional) */}
      

      {/* TEXT SECTION */}
      <h1 className="community-title">
        Welcome to the <span>Creative Colony </span>
      </h1>

      <p className="community-subtext">
        Because growth feels better when you’re not doing it alone.
      </p>

      {/* BUTTON */}
      <Link to="https://www.instagram.com/crelon.co" 
          className="community-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
              Join Now
        </Link>
      {/* <button className="community-btn">Join Now</button> */}

      {/* SOCIAL ICONS */}
      {/* <div className="community-socials">
        <a href="#">𝕏</a>
        <a href="#">𝔽</a>
        <a href="#">𐌑</a>
      </div> */}

      {/* ILLUSTRATION (replace with your actual illustration) */}
      {/* <img
        className="community-people-img"
        src={CommunityImage}
        alt="People Community"
      /> */}

    </section>
    <section className="why-join-container">
        <div className="join-head">
          <div>
            <h2>Community </h2>
            <h2 className="name">Cultural Values</h2>
          </div>
          <p>
            At Crelon, we believe in collaboration, real learning, and giving every idea its moment.
          </p>
        </div>
    </section>
    <section className="culture-value">
      <FourCategories/>
    </section>

    <section className="glimpse-section">
        <div className="value-head">
          <h2>Your <span>Glimpses</span></h2>
          {/* <p>Multiple pathways to achieve your goals</p> */}
        </div>
        <GlimpseCarousel/>
      </section>

    {/* <ConnectPlatform/>
    <section className="why-join-container">
        <div className="join-head">
          <div>
            <h2>Community</h2>
            <h2 className="name">Features</h2>
          </div>
          <p>
            Everything you need to learn, grow, and succeed together
          </p>
        </div>
    </section>
    <section
        ref={cardRef}
        className={`card1-container ${cardVisible ? "visible" : ""}`}
      >
        <Card1
          title_card1="Events & Workshops"
          description_card1="Participate in hands-on workshops, hackathons, and collaborative projects"
          icon_card1={<i className="fi fi-rr-calendar"></i>}
          gradient_card1="linear-gradient(135deg, #3288F1, #17A9DD)"
        />
        <Card1
          title_card1="Network & Connect"
          description_card1="Build meaningful relationships with like-minded students and innovative startups"
          icon_card1={<i className="fi fi-rr-users"></i>}
          gradient_card1="linear-gradient(135deg, #B254E6, #DC4CAD)"
        />
        <Card1
          title_card1="Real Experience"
          description_card1="Gain practical skills and portfolio-worthy projects that matter"
          icon_card1={<i className="fi fi-rs-trophy-star"></i>}
          gradient_card1="linear-gradient(135deg, #F7960D, #F77C15)"
        />
        <Card1
          title_card1="Events & Workshops"
          description_card1="Participate in hands-on workshops, hackathons, and collaborative projects"
          icon_card1={<i className="fi fi-rs-rocket-lunch"></i>}
          gradient_card1="linear-gradient(135deg, #1DC165, #14B978)"
        />
      </section> */}
      <Testimonial/>
  </>
);
}
// Welcome to Our Community
export default Community;
