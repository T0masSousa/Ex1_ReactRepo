import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./components/ex3/balanceSlice";
import catReducer from "./components/ex4/catSlice";
import { catApi } from "./components/ex5/catAPI";

const store = configureStore({
  reducer: {
    saldo: balanceReducer,
    cats: catReducer,
    [catApi.reducerPath]: catApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catApi.middleware),
});

export default store;
