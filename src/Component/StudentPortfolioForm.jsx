import React from "react";
import "../Style/StudentPortfolioForm.css"
import Case from "../assets/case1.png"
const features = [
  {
    icon: "🏷️",
    title: "Fix your Resume",
    desc: "See how your resume stacks up against the Job Description.",
    btn: "Analyze my Resume"
  },
  {
    icon: "🤖",
    title: "AI Mock Interview",
    desc: "Land your dream job with 100% confidence.",
    btn: "Begin Mock Interview"
  },
  {
    icon: "💸",
    title: "Salary Negotiation",
    desc: "Learn how to negotiate and get the salary you deserve.",
    btn: "Plan My Negotiation"
  },
  {
    icon: "📧",
    title: "Job Email Generator",
    desc: "Personalized emails for any interview situation.",
    btn: "Try now"
  },
  {
    icon: "📝",
    title: "Case Study Generator",
    desc: "Get detailed case studies in seconds with a few questions.",
    btn: "Generate My Case Study"
  },
  {
    icon: "🧐",
    title: "Analyze Case Study",
    desc: "Measure and improve your case studies vs. industry best.",
    btn: "Analyze my Case Study"
  },
];

const projects = [
  {
    img: "/project1.jpg",
    title: "Zenly wellness: mental health digital app",
    btn: "View project"
  },
  {
    img: "/project2.jpg",
    title: "Boosting user trust & completion",
    btn: "View project"
  },
  {
    img: "/project3.jpg",
    title: "Freshworks Quote Builder redesign",
    btn: "View project"
  }
];

function HeroCard() {
  return (
    <div className="main-hero-card">
      <div className="hero-header">
        <span className="hero-logo">🏆</span>
        <span className="hero-app-name">YourAppfolio</span>
      </div>
      <h2 className="hero-title">
        Build a brag<span className="hero-emph">worthy</span><br />
        <span className="hero-title2">portfolio with AI</span>
      </h2>
      <p className="hero-subtext">
        Built for Developers, Designers, and Creators—launch your standout site in minutes.
      </p>
      <form className="hero-form">
        <input type="text" placeholder="yourname.crelon.co" className="hero-input" />
        {/* <span className="domain-label">.yourappfolio.me</span> */}
        <button type="submit" className="hero-btn">Start Building — it's free</button>
      </form>
      <p className="domain-warning">🔒 Claim your domain before it's taken!</p>
    </div>
  );
}

function TrustedSection() {
  return (
    // <div className="trusted-section">
    //   <span>Trusted by teams at</span>
    //   <div className="trusted-logos">
    //     <span>Google</span>
    //     <span>Amazon</span>
    //     <span>Swiggy</span>
    //     <span>OLA</span>
    //   </div>
    // </div>
    <></>
  );
}

function StepsSection() {
  return (
    <div className="steps-section">
      <div className="step-card">
        <span className="step-label">Step 1</span>
        <div className="step-title">Claim your unique link</div>
        <input type="text" value="yourname.crelon.co" disabled className="step-input" />
        {/* <span className="step-domain">.yourappfolio.me</span> */}
      </div>
      <div className="step-card">
        <span className="step-label">Step 2</span>
        <div className="step-title">Set up your profile</div>
        <div className="profile-card">
          <div className="profile-pic">👤</div>
          <div>
            <div className="profile-name">Bruce Wayne</div>
            {/* <div className="profile-badges">
              <span className="badge">UX Design</span>
              <span className="badge green">Leadership</span>
              <span className="badge purple">NextJS</span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="step-card large">
        <span className="step-label">Step 3</span>
        <div className="step-title">Build your case study</div>
        <img src={Case} alt="" className="case-image"/>
      </div>
      <div className="step-card">
        <span className="step-label">Step 4</span>
        <div className="step-title">Publish your website</div>
        <button className="publish-btn">Publish Website</button>
      </div>
    </div>
  );
}

function FeaturesGrid() {
  return (
    <div className="features-section">
      <h3 className="utility-heading">...and so much more ✨</h3>
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <span className="feature-icon">{f.icon}</span>
            <span className="feature-title">{f.title}</span>
            <span className="feature-desc">{f.desc}</span>
            <button className="feature-btn">{f.btn}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    // <div className="projects-section">
    //   <h3 className="utility-heading">Created with YourAppfolio</h3>
    //   <div className="projects-grid">
    //     {projects.map((p, idx) => (
    //       <div className="project-card" key={idx}>
    //         <div className="project-img" style={{ backgroundImage: `url(${p.img})` }}></div>
    //         <div className="project-title">{p.title}</div>
    //         <button className="project-btn">{p.btn}</button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <></>
  );
}

function FooterCTA() {
  return (
    <div className="footer-cta-card">
      <h2>
        Your dream <span className="hero-emph">portfolio</span> is, not days, not
        hours but minutes away — <b>Start now!</b>
      </h2>
      <form className="hero-form">
        <input type="text" placeholder="yourname.crelon.co" className="hero-input" />
        {/* <span className="domain-label">.yourappfolio.me</span> */}
        <button type="submit" className="hero-btn">Start Building — it's free</button>
      </form>
      <p className="domain-warning">🔒 Claim your domain before it's late!</p>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="landing-main">
      <HeroCard />
      <TrustedSection />
      <StepsSection />
      <FeaturesGrid />
      <ProjectsSection />
      <FooterCTA />
      <div className="footer-note">
        <span>Copyright © 2025 YourAppfolio</span>
        <span>Privacy Policy · Terms & Conditions · Refund Policy</span>
      </div>
    </div>
  );
}
