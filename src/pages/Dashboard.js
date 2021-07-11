import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import "./Dashboard.css"

function Dashboard() {
  const [pizzaList, setPizzaList] = useState([]);
  const [cpyPizza, setCpyPizz] = useState([]);

   function sortPizzaList(base){
    let sortedList;
    let newPizzArr;
    if (base === "price") {
      sortedList = pizzaList.sort((a, b) => (a.price > b.price ? 1 : -1));
      setPizzaList(sortedList);
      console.log(pizzaList)
    } else if (base === "rating") {
      sortedList = pizzaList.sort((a, b) => (a.rating < b.rating ? 1 : -1));
      setPizzaList(sortedList);
      console.log(sortedList);
    } else if (base === "veg") {
      newPizzArr = cpyPizza.filter((item) => item.isVeg);
      setPizzaList(newPizzArr);
    } else if (base === "nonVeg") {
      newPizzArr = cpyPizza.filter((item) => !item.isVeg);
      setPizzaList(newPizzArr);
    } else if (base=== "all") {
      setPizzaList(cpyPizza);
    }
  };

  useEffect(() => {
    fetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
      .then((res) => res.json())
      .then((data) => {
        setPizzaList(data);
        setCpyPizz(data);
      })
      .catch((err) => console.log(err));
  },[]);
  return (
    <>
      <Header />
      <div className="btn-wrapper">
        <button onClick={() => sortPizzaList("all")}>All</button>
        <button onClick={() => sortPizzaList("veg")}>Veg</button>
        <button onClick={() => sortPizzaList("nonVeg")}>Non Veg</button>
        <button onClick={() => sortPizzaList("rating")}>Sort By Rating</button>
        <button onClick={() => sortPizzaList("price")}>Sort By Price</button>
      </div>
      <div className="card-container">
        {pizzaList.map((pizza) => (
          <Card key={pizza.id} {...pizza} />
        ))}
      </div>
    </>
  );
}

export default Dashboard;
