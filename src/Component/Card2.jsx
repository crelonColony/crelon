import React from "react";
import "../Style/Card2.css";

function Card2({
  title,
  description,
  icon,
  arrow_icon,
  point1,
  point2,
  point3,
  point4,
  point5,
  btn,
  bg_color,
  btn_color,
}) {
  return (
    <div className="card2 animated-card" style={{ background: bg_color }}>
      <div className="icon-container">{icon}</div>
      <div className="text-container">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="list-container">
        <ul>
          <li>
            <div>
              {arrow_icon}
              {point1}
            </div>
          </li>
          <li>
            <div>
              {arrow_icon}
              {point2}
            </div>
          </li>
          <li>
            <div>
              {arrow_icon}
              {point3}
            </div>
          </li>
          <li>
            <div>
              {arrow_icon}
              {point4}
            </div>
          </li>
          <li>
            <div>
              {arrow_icon}
              {point5}
            </div>
          </li>
        </ul>
      </div>
      {/* {btn && (
        <div className="btn-container1">
          <button style={{ color: bg_color, backgroundColor: btn_color }}>
            {btn}
          </button>
        </div>
      )} */}
    </div>
  );
}

export default Card2;
