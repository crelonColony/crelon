import React from "react";
import "../Style/LogoAnimation.css";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
]
function LogoCarousel() {
  return (
    <div className="logo-carousel">
      <div className="logo-track">
        {logos.concat(logos).map((logo, index) => (
          <div className="logo-slide" key={index}>
            <div className="logo-circle">
              <img src={logo} alt={`logo-${index}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoCarousel;
