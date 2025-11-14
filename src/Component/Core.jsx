import React from "react";

function Core({ head, image }) {
  return (
    <div
      style={{
        border:"1px solid #ddd",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // color: "#fff",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "3rem", marginBottom: "20px", color: "#000" }}>{head}</h2>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#FF5100",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        READ MORE
      </button>
    </div>
  );
}

export default Core;
