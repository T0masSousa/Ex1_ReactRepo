import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCats = createAsyncThunk(
  "cats/fetchCats",
  async (page, limit) => {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}`
    );
    return response.data;
  }
);

//Slice
const catSlice = createSlice({
  name: "cats",

  initialState: {
    cats: [],
    status: "idle", // Status da requisição (idle, loading, succeeded, failed)
    error: null,
    page: 11,
    limit: 1,
    order: "asc",
    apiKey: process.env.REACT_APP_CAT_API_KEY,
  },

  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },

    decrementPage: (state) => {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCats.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cats = action.payload;
      })
      .addCase(fetchCats.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { incrementPage, decrementPage } = catSlice.actions;

export default catSlice.reducer;
