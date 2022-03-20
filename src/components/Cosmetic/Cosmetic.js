import React from "react";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;
  const addToCart = () => {
    console.log("added");
  };
  return (
    <div className="product">
      <h2>Buy This : {name}</h2>
      <p>Only FOr : {price}$</p>
      <p>
        <small>It has Id of {id}</small>
      </p>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
};

export default Cosmetic;
