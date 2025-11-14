import React from "react";
import "../Style/Team.css";

const team = [
  {
    img: "🧑‍💼", // Replace with actual image if needed
    name: "Alex Johnson",
    title: "Founder & CEO",
  },
  {
    img: "🧑‍💼",
    name: "Sarah Chen",
    title: "Head of Programs",
  },
  {
    img: "🎓",
    name: "Michael Torres",
    title: "Community Manager",
  },
  {
    img: "🧑‍🔬",
    name: "Emily Davis",
    title: "Partnerships Lead",
  },
];

export default function TeamSection() {
  return (
    <section className="team-section">
      <h2 className="team-title">
        Meet Our <span className="highlight">Team</span>
      </h2>
      <p className="team-subtitle">
        Passionate individuals dedicated to making a difference
      </p>
      <div className="team-cards">
        {team.map((member) => (
          <div className="team-card" key={member.name}>
            <div className="team-img">{member.img}</div>
            <div className="team-name">{member.name}</div>
            <div className="team-role">{member.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
