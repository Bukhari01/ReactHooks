import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ScreenFour() {
  const navigate = useNavigate();


  return (
    <div
      style={{
        backgroundColor: "#121212",
        height: "100vh", // Full height of the viewport
        width: "100vw", // Full width of the viewport
        display: "flex", // Enables flexbox for centering
        flexDirection: "column", // Keeps elements in a column layout
        justifyContent: "center", // Centers content vertically
        alignItems: "center", // Centers content horizontally
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "20%" }}>
        <button onClick={() => navigate("/")}>Go Back to Home</button>
        <button onClick={() => navigate("/ScreenThree")}>Go to Next Sceen</button>
      </div>
    </div>
  );
}
