import React, { useEffect, useState } from "react";
import Input from "./Input";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className=" mt-6">
      <h1 className="text-center text-xl">Count: {count}</h1>
      <Input />
    </div>
  );
};

export default App;