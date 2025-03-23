import React, { useEffect, useState,useMemo, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ScreenFive() {
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(`Message from useEffect`);
  }, []);

  useLayoutEffect(() => {
      console.log(`Message from useLayoutEffect`);
  })

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
      <button onClick={() => navigate("/")}>Go Back to Home</button>
      <div>
        <h2>Test</h2>
      </div>
    </div>
  );
}
