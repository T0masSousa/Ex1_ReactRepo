import React, { useEffect } from "react";
import "./App.css";
import balanceReducer from './components/ex3/balanceSlice';
import BalanceManager from "./components/ex3/balanceManager";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
  saldo: balanceReducer,
  },
  });

function Ex3() {
  useEffect(() => {
    document.title = "React App";
  }, []);

  return (
    <Provider store={store}>
      <div className="todoapp stack-large" style={{backgroundColor:"#cadcfb"}}>
        <h1>Máquina Multibanco</h1>
        <BalanceManager />
      </div>
    </Provider>
  );
}

export default Ex3;
