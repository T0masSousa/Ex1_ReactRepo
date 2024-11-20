import React, { useEffect } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

import CatList from "./components/ex4/catList";

const Ex4 = () => {
  useEffect(() => {
    document.title = "React App";
  }, []);
  return (
    <Provider store={store}>
      <div className="todoapp stack-large">
        <h1>Cat API</h1>
        <CatList />
      </div>
    </Provider>
  );
};

export default Ex4;
