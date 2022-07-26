import React, { useState } from "react";

function Hoc() {
  return (
    <div>
      <h1>HOC</h1>
      <HocRed cmp={Counter} />
      <HocBlue cmp={Counter} />
      <HocGreen cmp={Counter} />
    </div>
  );
}

function HocRed(props) {
  return (
    <h3 style={{ backgroundColor: "red" }}>
      <props.cmp />
      RED
    </h3>
  );
}
function HocBlue(props) {
  return (
    <h3 style={{ backgroundColor: "blue" }}>
      <props.cmp />
      BLUE
    </h3>
  );
}
function HocGreen(props) { 
  return (
    <h3 style={{ backgroundColor: "green" }}>
      <props.cmp />
      GREEN
    </h3>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h4>{count}</h4>
      <button onClick={() => setCount(count + 1)}>CLICK</button>
    </div>
  );
}

export default Hoc;
