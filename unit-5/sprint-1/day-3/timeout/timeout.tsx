import React from "react";
import useTimeout from "../Hooks/useTimeout";

const Timeout = () => {
  const show = useTimeout(3);
  if (!show) {
    return <div className="text-center mt-24"> Loading..... </div>;
  }
  return (
    <div className="text-center mt-24">
      <p>Timeout Assignment</p>
    </div>
  );
};

export default Timeout;