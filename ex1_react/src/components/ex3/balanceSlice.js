import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 1000
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    deposito: (state, action) => {
      state.balance += action.payload;
    },
    levantamento: (state, action) => {
      if (state.balance >= action.payload) {
        state.balance -= action.payload;
      } else {
        alert("Saldo insuficiente!");
      }
    },
  },
});



export const { deposito, levantamento } = balanceSlice.actions;
export default balanceSlice.reducer;