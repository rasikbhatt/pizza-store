import React, { useContext, useReducer, } from "react";
import reducer from "../reducer/reducer";

const AppContext = React.createContext();

let initialState = {
  basket: [],
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  if (state.basket.lenght >= 1) {
    console.log("hello world");
    console.log(
      state.basket.reduce((acc, curr) => {
        return acc + curr.price;
      }, 0)
    );
  }

  let total = state.basket.reduce((acc, crr) => {
    console.log(crr);
    return (acc += crr.price);
  }, 0);
  state.total = total;
  // console.log(state.total);

  // const getTotals = () => {
  //   console.log("hello");
  // };
  // useEffect(() => {
  //   getTotals();
  // }, [state.basket]);
  return (
    <AppContext.Provider value={{ dispatch, state }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
