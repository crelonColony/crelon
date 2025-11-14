// import React from "react";
// // import "../Style/WorkshopCard.css";
// import "../Style/Workshop.css"

// function WorkshopCard({
//   image,
//   title,
//   trainer,
//   location,
//   date,
//   type,
//   price,
//   onApply,
//   isRegistered = false,
// }) {
//   return (
//     <div className="workshop-card">
//       <div
//         className="workshop-img"
//         style={{
//           backgroundImage: `url(${image || "/default-workshop.jpg"})`,
//         }}
//       ></div>

//       <div className="workshop-content">
//         <h3>{title}</h3>
//         <p className="workshop-trainer">
//           <i className="fi fi-br-user"></i> {trainer}
//         </p>
//         <p className="workshop-location">
//           <i className="fi fi-br-marker"></i> {location || "Online"}
//         </p>
//         <p className="workshop-date">
//           <i className="fi fi-br-calendar"></i> {date}
//         </p>

//         {type === "free" ? (
//           <p className="workshop-type free">Free Workshop</p>
//         ) : (
//           <p className="workshop-type paid">Paid Workshop — ₹{price}</p>
//         )}

//         <button
//           className={isRegistered ? "registered-btn" : "apply-btn"}
//           onClick={!isRegistered ? onApply : null}
//           disabled={isRegistered}
//         >
//           {isRegistered ? "Registered" : "Apply Now →"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default WorkshopCard;

import React from "react";
import "../Style/Workshop.css"; // Use this for your new styles

function WorkshopCard({
  image,
  title,
  trainer,
  location,
  date,
  type,
  price,
  onApply,
  isRegistered = false,
}) {
  return (
    <div className="workshop-card-modern">
      {/* Workshop Image Section */}
      <div className="workshop-img-modern">
        <img src={image || "/default-workshop.jpg"} alt={title} />
        <div className="badge-workshop">
          {type === "free" ? "Free" : "Paid"}
        </div>
        {/* <div className="action-icons-workshop">
          <button className="icon-btn-workshop" title="Share">🗺️</button>
          <button className="icon-btn-workshop" title="Favorite">❤️</button>
        </div> */}
      </div>

      {/* Workshop Content */}
      <div className="workshop-content-modern">
        <div className="workshop-title-modern">{title}</div>
        <div className="meta-workshop">
          <span><i className="fi fi-br-user"></i> {trainer}</span>
          <span><i className="fi fi-br-marker"></i> {location || "Online"}</span>
          <span><i className="fi fi-br-calendar"></i> {date}</span>
        </div>
        <div className={type === "free" ? "workshop-type-modern free" : "workshop-type-modern paid"}>
          {type === "free" ? "Free Workshop" : `Paid Workshop — ₹${price}`}
        </div>
        <div className="workshop-button-row-modern">
          <button
            className={isRegistered ? "registered-btn-modern" : "apply-btn-modern"}
            onClick={!isRegistered ? onApply : null}
            disabled={isRegistered}
          >
            {isRegistered ? "Registered" : "Apply Now →"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkshopCard;
