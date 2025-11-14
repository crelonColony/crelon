import React from "react";
import "../Style/GlimpseCarousel.css";
import img from "../assets/image.jpg"

const glimpses = [img, img, img, img, img, img];
function GlimpseCarousel() {
  return (
    <div className="glimpse-carousel">
      <div className="glimpse-track">
        {glimpses.concat(glimpses).map((img, index) => (
          <div className="glimpse-slide" key={index}>
            <div className="glimpse-frame">
              <img src={img} alt={`glimpse-${index}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GlimpseCarousel;
