// import React from "react";
// // import "../Style/InternshipCard.css";
// import "../Style/Internship.css"

// function InternshipCard({
//   image,
//   title,
//   company,
//   location,
//   duration,
//   type,
//   stipend,
//   onApply,
//   isApplied = false,
// }) {
//   return (
//     <div className="internship-card">
//       <div
//         className="intern-img"
//         style={{ backgroundImage: `url(${image})` }}
//       ></div>

//       <div className="internship-content">
//         <h3>{title}</h3>
//         <p>{company}</p>
//         <p><i className="fi fi-br-marker"></i> {location}</p>
//         <p><i className="fi fi-br-clock"></i> {duration}</p>
        

//         {type === "free" ? (
//           <p className="internship-type free">Free Internship</p>
//         ) : (
//           <p className="internship-type stipend">Stipend: ₹{stipend}/month</p>
//         )}

//         <button
//             className={isApplied ? "applied-btn" : "apply-btn"}
//             onClick={!isApplied ? onApply : null}
//             disabled={isApplied}
//         >
//   {isApplied ? "Applied" : "Apply Now →"}
// </button>

//       </div>
//     </div>
//   );
// }

// export default InternshipCard;


import React from "react";
import "../Style/Internship.css";
import AdminImg from "../assets/logo-light-C.png"
function InternshipCard({
  image,
  title,
  company,
  location,
  duration,
  type,
  stipend,
  onApply,
  isApplied = false,
}) {
  return (
    <div className="internship-card-modern">
      <div className="internship-header">
        <div className="intern-logo-container">
          <img src={image} alt={company} className="intern-logo" />
          <span className="logo-link-btn">↗</span>
        </div>
        <div className="internship-header-text">
          <div className="internship-program">LinkedIn Growth Blueprint</div>
        </div>
      </div>

      <div className="internship-content-modern">
        <div className="internship-title">{title}</div>
        <div className="internship-meta">
          <span className="internship-duration"><i className="fi fi-br-clock"></i> {duration}</span>
        </div>
        <div className="internship-stipend">{type === "free" ? "Free Internship" : `₹${stipend}`}</div>
        <div className="internship-company-info">
          <img src={AdminImg} alt={company} className="intern-user-photo" />
          <div>
            <div className="intern-company">{company}</div>
            <div className="intern-location">{location}</div>
          </div>
        </div>
        <button
          className={isApplied ? "applied-btn-modern" : "apply-btn-modern"}
          onClick={!isApplied ? onApply : null}
          disabled={isApplied}
        >
          {isApplied ? "Applied" : "Apply Now →"}
        </button>
      </div>
    </div>
  );
}

export default InternshipCard;
