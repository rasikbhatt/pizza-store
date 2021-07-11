import React from "react";
import { useGlobalContext } from "../context/context";
import "./Card.css";

function Card({ id, name, img_url, description, isVeg, price, rating }) {
const { dispatch } = useGlobalContext();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: { id, name, img_url, description, isVeg, price, rating },
    });
  };

  return (
    
    <div className="card" >
      {console.log(id)}
      <h1>{name}</h1>
      <img src={img_url} alt={name}  />
      <div className="cardDetails">
      <p>{description}</p>
      <p>Type : {isVeg ? "Veg" : "Non Veg"}</p>
      <p>Price: INR {price} /-</p>
      <p>Rating: {rating}/5</p>
      <button onClick={addToBasket}>Add to cart</button>
      </div>
    </div>
  );
}

export default Card;
