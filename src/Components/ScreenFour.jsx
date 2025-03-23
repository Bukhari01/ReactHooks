import React, { useEffect, useState,useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function ScreenFour() {
  const navigate = useNavigate();
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const cubenum = function (num) {
    console.log(`calculation done!`);
    return Math.pow(num, 3);
  };

  const result = useMemo(() => {return cubenum(number)},[number]);

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
      <div style={{ marginBottom: "20%" }}>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <h1>Cube of the number: {result}</h1>
      </div>
      <button onClick={() => setCounter(counter + 1)}>Counter++</button>
      <h1>Counter: {counter}</h1>
      <button onClick={() => navigate("/ScreenFive")}>next screen</button>

    </div>
  );
}
