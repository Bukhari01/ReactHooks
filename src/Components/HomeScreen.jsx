import React from "react";
import { useState } from "react";

export default function HomeScreen() {
  // const counter = useState(0)[0];
  // const setCounter = useState(0)[1];
  // console.log(counter);
  // console.log(setCounter);

  const [color, setColor] = useState("red");

  const changeColor = () => {
    setColor("blue");
  };

  // const [brand, setBrand] = useState("Ferrari");
  // const [model, setModel] = useState("Rome");
  // const [year, setYear] = useState("2025");

  const [car,setCar] = useState({
    brand: "ferrari",
    model: "Roma",
    year: "2025",
    color:"red"
  })
  const setcarblue = function(){
    setCar((previous) => {
      console.log(previous);
      return {...previous, color: "blue"}
    })
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "20px",
          textAlign: "center", // Centers text inside
          borderRadius: "10px",
          width: "50%", // Adjust width to make it responsive
          minWidth: "300px", // Prevent it from being too small
        }}
      >
        <h1>Welcome to My Web App</h1>
        <p>The color is {color}</p>
        <button onClick={changeColor}>Blue</button>
      </div>
      <div
        style={{
          padding: "20px",
          textAlign: "center", // Centers text inside
          borderRadius: "10px",
          width: "50%", // Adjust width to make it responsive
          minWidth: "300px", // Prevent it from being too small
        }}
      >
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color} {car.model} from {car.year}
        </p>
        <button onClick={setcarblue}>change car color</button>
      </div>
    </div>
  );
}
