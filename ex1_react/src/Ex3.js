import React, { useEffect } from "react";
import "./App.css";
import BalanceManager from "./components/ex3/balanceManager";
import { Provider } from "react-redux";
import store from "./store";

function Ex3() {
  useEffect(() => {
    document.title = "React App";
  }, []);

  return (
    <Provider store={store}>
      <div
        className="todoapp stack-large"
        style={{ backgroundColor: "#cadcfb" }}
      >
        <h1>Máquina Multibanco</h1>
        <BalanceManager />
      </div>
    </Provider>
  );
}

export default Ex3;
