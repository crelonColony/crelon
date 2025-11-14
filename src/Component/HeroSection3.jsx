import React, { useEffect, useState } from "react";
import myVideo from "../assets/video.mp4";
import "../Style/HeroSection3.css";

export default function HeroSection3() {
  const words = ["Connect", "Collaborate", "Create", "with" ,"Crelon"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setText((prev) => prev + currentWord[charIndex]);
        setCharIndex(charIndex + 1);
      } 
      else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      } 
      else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1200); // hold word before deleting
      } 
      else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }, isDeleting ? 60 : 90); // typing speed vs deleting speed

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className="hero3-container">
      <video
        src={myVideo}
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        className="hero3-video"
      />

      <div className="hero3-text">
        <h1>
          <span className="typed-word">{text}</span>
          
        </h1>
      </div>
    </div>
  );
}

