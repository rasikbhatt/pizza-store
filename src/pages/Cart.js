import React from "react";
import Header from "../components/Header";
import { useGlobalContext } from "../context/context";
import "./Cart.css"

function Cart() {
  const { state, dispatch } = useGlobalContext();
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const removeFromBasket = (id) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
  };

  return (
    <div >
      <Header />
      <div className="basket-status">
      {state.basket.length === 0 ? (
        <h1 >Your basket is empty</h1>
      ) : (
        state.basket.map((item) => {
          const { id, name, img_url, description, isVeg, price, rating } = item;
          return (
            <div className="is-not-empty">
            <div
              key={id}
              style={{
                width: "400px",
                padding: "10px 0px",
                margin: "10px 5px",
                textAlign: "center",
                borderRadius: "10px",
                border: "2px solid #BFD1D9",
                boxShadow: "0px 0px 12px 6px rgba(0,0,0,0.52)",
                fontWeight:"600",
                fontSize:"20px"


              }}
            >
              <h1>{name}</h1>
              <img src={img_url} alt={name} width="100%" />
              <p>{description}</p>
              <p>Type : {isVeg ? "Veg" : "Non Veg"}</p>
              <p>Price: INR {price} /-</p>
              <p>Rating: {rating}/5</p>

              <button
                style={{ margin: "10px 0 5px 0" }}
                onClick={() => removeFromBasket(id)}
              >
                Remove
              </button>
            </div>
            </div>);
        })
      )}
      </div>
        <hr/>
      <div className="amount">
        <h2>Total amount: INR {state.total} /-</h2>
      {state.basket.length >= 1 && (
        <button onClick={clearCart}>Clear cart</button>
      )}

      </div>
    </div>
  );
}

export default Cart;
