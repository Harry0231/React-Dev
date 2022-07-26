import { React, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(false);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
    setError("");
   
  };

  //decrease counter
  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    } else {
      setError("The Counter can not contain negative value");
    }
  };

  //reset counter

  const handleSet = () => {
    setError("");
    setCounter(0);
  };

  return (
    <div className="counter">
      <h1>COUNTER</h1>
      
      <h2 className="counter__output">{counter}</h2>
      <p style={{color:"red"}}>{error}</p>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>
          +
        </button>
        <button className="control__btn" onClick={decrease}>
          -
        </button>
        <button className="control__btn" onClick={handleSet}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
