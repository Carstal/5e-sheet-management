import React, { useState, useEffect } from "react";

interface Props {
  number: number;
}

const Counter: React.FC<Props> = ({ number }) => {
  const [count, setCount] = useState(number);
  const [isEven, setIsEven] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    // Check if the count value is even or odd and update isEven accordingly.
    setIsEven(count % 2 === 0);
  }, [count]);

  return (
    <div className="counter">
      <h1>Simple Counter</h1>
      <p>Count: {count}</p>
      <p>{isEven ? "Even" : "Odd"}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
