import React from "react";
import "../Style/card1.css";

// function Card1({ title_card1, description_card1, icon_card1, gradient_card1 }) {
//   return (
//     <div className="card1">
//       <div className="card-border"></div>
//       <div className="icon-box" style={{ background: gradient_card1 }}>
//         {icon_card1}
//       </div>
//       <div className="text-box">
//         <h3>{title_card1}</h3>
//         <p>{description_card1}</p>
//       </div>
//     </div>
//   );
// }
// function Card1({ title_card1, description_card1, icon_card1, gradient_card1 }) {
//   return (
//     <div className="card1-wrapper">

//       <div className="icon-box" style={{ background: gradient_card1 }}>
//         {icon_card1}
//       </div>

//       <div className="card1">
//         <div className="bg-expand"></div> {/* Background expansion layer */}
//         <h3>{title_card1}</h3>
//         <p>{description_card1}</p>
//       </div>

//     </div>
//   );
// }


export default Card1;


import { useOnScreen } from "../hooks/useOnScreen";

function Card1({ title_card1, description_card1, icon_card1, gradient_card1 }) {
  const [ref, visible] = useOnScreen();

  return (
    <div
      ref={ref}
      className={`card1-wrapper ${visible ? "animate" : ""}`} // ✅ add scroll animation class
    >
      <div className="circle-fill" style={{ background: gradient_card1 }}></div>

      <div className="icon-box" style={{ background: gradient_card1 }}>
        {icon_card1}
      </div>

      <div className="card1">
        <h3>{title_card1}</h3>
        <p>{description_card1}</p>
      </div>
    </div>
  );
}
