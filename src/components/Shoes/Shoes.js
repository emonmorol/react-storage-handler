import React from "react";
import { add } from "../../utilities/calcaulate";

const Shoes = () => {
  const first = 55;
  const second = 35;
  const total = add(first, second);
  return (
    <div>
      <h2>This is shoes components</h2>
      <p>Result: {total}</p>
    </div>
  );
};

export default Shoes;
