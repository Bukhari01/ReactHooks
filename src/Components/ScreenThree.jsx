import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ScreenThree() {
  const navigate = useNavigate();

  const [value, setValue] = useState(0);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setCount((prev) => prev + 1);
//   },[value])
  
  
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  }, [value]);

  const inputelem = useRef();

  const [show, setShow] = useState('');

  const btnclicked = () => {
    setShow(inputelem.current.value)
  }


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
      <div style={{ marginBottom: "10%" }}>
        <button onClick={() => navigate("/")}>Go Back to Home</button>
      </div>
      <div>
        <button
          onClick={() => {
            setValue((prev) => prev - 1);
          }}
        >
          -1
        </button>
        <h1>{value}</h1>
        <button
          onClick={() => {
            setValue((prev) => prev + 1);
          }}
        >
          +1
        </button>
        <h1>Count: {count.current}</h1>
      </div>
      <button onClick={() => {navigate("/ScreenFour")}}>Next Screen</button>
      <div>
        <input type = "text" ref={inputelem}></input>
        <button onClick={btnclicked}>click here</button>
      </div>
      <div>
      <h1>{show}</h1>
      </div>
    </div>
  );
}
