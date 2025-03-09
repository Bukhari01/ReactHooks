import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

export default function HomeScreen() {
  const navigate = useNavigate(); // Hook for navigation

  // Counter state
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);
  const reset = () => setCounter(0);

  // Color state
  const [color, setColor] = useState("red");
  const changeColor = () => setColor("blue");

  // Car state
  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2025",
    color: "red"
  });

  // Function to change car color
  const setCarBlue = () => {
    setCar((previous) => ({ ...previous, color: "blue" }));
  };

  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", overflowY: "auto", width: "100%", backgroundColor: "green", minHeight: "100vh", padding: 20 }}>
      
      {/* Button to navigate to ScreenTwo */}
      <button 
        onClick={() => navigate("/Screentwo")} 
        style={{ marginBottom: 20, padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Go to Screen Two
      </button>

      {/* Color change section */}
      <div style={{ padding: 20, textAlign: "center", borderRadius: 10, width: "50%", minWidth: 300, backgroundColor: "#121212", marginBottom: 20 }}>
        <h1>Welcome to My Web App</h1>
        <p>The color is {color}</p>
        <button onClick={changeColor}>Blue</button>
      </div>

      {/* Car details section */}
      <div style={{ padding: 20, textAlign: "center", borderRadius: 10, width: "50%", minWidth: 300, backgroundColor: "#121212", marginBottom: 20 }}>
        <h1>My {car.brand}</h1>
        <p>It is a {car.color} {car.model} from {car.year}</p>
        <button onClick={setCarBlue}>Change Car Color</button>
      </div>

      {/* Counter section */}
      <div style={{ padding: 20, textAlign: "center", borderRadius: 10, width: "50%", minWidth: 300, backgroundColor: "#121212", marginBottom: 20 }}>
        <h1>Counter: {counter}</h1>
        <button onClick={increase}>Increase</button>
        <button style={{ marginLeft: 100 }} onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
