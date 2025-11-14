import React from "react";
import "../Style/Home.css";
import Navbar from "../Component/Navbar";
import Home1 from "./Home1";
import HeroSection3 from "../Component/HeroSection3";
import Card1 from "../Component/Card1";
import Card2 from "../Component/Card2";
import JoinCommunityBaner from "../Component/JoinCommuntyBanner";
import { useOnScreen } from "../hooks/useOnScreen";
import LogoCarousel from "../Component/LogoAnimation";
import ContactForm from "../Component/ContactForm";
import FAQ from "../Component/FAQ";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const [cardRef, cardVisible] = useOnScreen();
  const [joinRef, joinVisible] = useOnScreen();
  const [contactRef, contactVisible] = useOnScreen();
  const [FAQRef, FAQVisible] = useOnScreen();
  const [bannerRef, bannerVisible] = useOnScreen();

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);
  return (
    <>
      {/* Navbar can be included here if needed */}
      {/* <Navbar /> */}

      <div className="hero-container">
        <HeroSection3 />
      </div>

      <section className="why-join-container">
        <div className="join-head">
          <div>
            <h2>Why Join</h2>
            <h2 className="name">Crelon</h2>
            <h2>?</h2>
          </div>
          <p>
            Experience hands-on learning, build your network, and launch your
            career
          </p>
        </div>
      </section>

      <section
        // ref={cardRef}
        className="card1-container"
      >
        <div
          ref={cardRef}
          className={`card1-container-show1 ${cardVisible ? "visible" : ""}`}
        >
          <Card1
          title_card1="Real-World Exposure "
          description_card1="No More Just Theory Learn from industry projects, not just theory."
          // No More Just Theory Learn from industry projects, not just theory. 

          icon_card1={<i className="fi fi-rr-calendar"></i>}
          gradient_card1="linear-gradient(135deg, #F7960D, #F77C15)"
          />
        </div>
        <div 
          ref={cardRef}
        className={`card1-container-show2 ${cardVisible ? "visible" : ""}`}
        >
          <Card1
          title_card1="Career Growth"
          description_card1="Internships That Actually Happen Unlock opportunities, internships, and mentorships."
          icon_card1={<i className="fi fi-rr-users"></i>}
          gradient_card1="linear-gradient(135deg, #F7960D, #F77C15)"
        />
        </div>
       <div
        ref={cardRef}
        className={`card1-container-show1 ${cardVisible ? "visible" : ""}`}
       >
         <Card1
          title_card1="Exclusive Access"
          description_card1="Get In Before Everyone Else Events, workshops, and insider programs that fuel your growth.Stop waiting for the “right time.”"
          icon_card1={<i className="fi fi-rs-trophy-star"></i>}
          gradient_card1="linear-gradient(135deg, #F7960D, #F77C15)"
        />
       </div>
        <div
          ref={cardRef}
        className={`card1-container-show2 ${cardVisible ? "visible" : ""}`}
        >
          <Card1
          title_card1="Community Support"
          description_card1="Your People, Your Vibe Collaborate with like-minded changemakers."
          icon_card1={<i className="fi fi-rs-rocket-lunch"></i>}
          gradient_card1="linear-gradient(135deg, #F7960D, #F77C15)"
        />
        </div>
      </section>

      <section className="logoCarousel">
        <LogoCarousel/>
      </section>

      


      <section
        ref={joinRef}
        id="join-section"
        className={`join-container ${joinVisible ? "visible" : ""}`}
      >
        <Card2
          title="For Students"
          description="Gain hands-on experience through real projects, connect with innovative startups, and build a portfolio that stands out."
          arrow_icon={<i className="fi fi-br-angle-small-right"></i>}
          point1="Internship"
          point2="workshops and upskilling events"
          point3="Peer learning groups by domain"
          point4="Resume-building portfolio work"
          point5="Access to live projects"
          // btn="Join as Student"
          icon={<i className="fi fi-br-code-simple"></i>}
          bg_color="linear-gradient(75deg, #F39B0A, #EB650D)"
          btn_color="#5242E5"
        />
        <Card2
          title="For Startups"
          description="Gain hands-on experience through real projects, connect with innovative startups, and build a portfolio that stands out."
          icon={<i className="fi fi-rr-gym-bag"></i>}
          arrow_icon={<i className="fi fi-br-angle-small-right"></i>}
          point1="Student teams for pilot projects"
          point2="Brand visibility on campus networks"
          point3="Co-creation and testing opportunities"
          point4="Recruitment for interns and hires"
          point5="Community-driven innovation"
          // btn="Join as Student"
          bg_color="linear-gradient(135deg, #EB650D, #F39B0A)"
          btn_color="#EB650D"
        />
      </section>


      <section 
        ref={contactRef}
        className={`contact-form ${contactVisible ? "visible" : ""}`}
        id="contactform"
      >
        <ContactForm/>
      </section>

      <section
        ref={FAQRef}
        className={`faq-section ${FAQVisible ? "visible" : ""}`}
        id="faq"
      >
        <FAQ/>
      </section>
      <div className="joincommnitybanner">
        {/* <JoinCommunityBaner /> */}
      </div>
    </>
  );
}

export default Home;
