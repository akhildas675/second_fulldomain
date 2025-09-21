import React, { useState, useMemo } from "react";

function UseMemoExample() {
  const [count, setCount] = useState(0);


  // Expensive calculation (simulated)
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) // heavy loop
    return num * 2;
  };

  // useMemo caches the result until `count` changes
  const doubleCount = useMemo(() => expensiveCalculation(count), [count]);


  return (
    <div>
      <h2>useMemo Example</h2>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      
      <div >Double Count: {doubleCount}</div>
    </div>
  );
}

export default UseMemoExample;
