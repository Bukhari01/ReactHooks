import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ScreenTwo() {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  },[count]);

  //[] renders only once

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
        <h1 style={{ color: "red" }}>I have rendered {count} times!</h1>
        <button onClick={() => navigate("/ScreenThree")}>Go to Next Sceen</button>
      </div>
    </div>
  );
}
