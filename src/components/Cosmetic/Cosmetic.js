import React from "react";
import { addToDatabase } from "../../utilities/fakedb";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;
  const addToCart = (id) => {
    addToDatabase(id);
  };

  const removeFromCart = (id) => {
    console.log("removing", id);
  };
  //   const addToCartWithParam = () => addToCart(id);
  return (
    <div className="product">
      <h2>Buy This : {name}</h2>
      <p>Only FOr : {price}$</p>
      <p>
        <small>It has Id of {id}</small>
      </p>
      {/* <button onClick={addToCartWithParam}>Add To Cart</button> */}
      <button onClick={() => addToCart(id)}>Add To Cart</button>
      <button onClick={() => removeFromCart(id)}>Remove</button>
    </div>
  );
};

export default Cosmetic;
