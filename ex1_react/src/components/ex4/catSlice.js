import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Definir a ação assíncrona para buscar os dados da API
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

  // Estado inicial do slice
  initialState: {
    cats: [], // Array para armazenar os dados dos gatos
    status: "idle", // Status da requisição (idle, loading, succeeded, failed)
    error: null, // Armazena qualquer erro que ocorra durante a requisição
    page: 11, // Página atual para a paginação
    limit: 1,
    order: "asc",
    apiKey: process.env.REACT_APP_CAT_API_KEY,
  },

  // Redutores síncronos
  reducers: {
    // Incrementar a página
    incrementPage: (state) => {
      state.page += 1;
    },

    // Decrementa a página, mas não permite que seja menor que 1
    decrementPage: (state) => {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
  },
  // Redutores assíncronos
  extraReducers: (builder) => {
    builder
      // Caso a requisição esteja pendente
      .addCase(fetchCats.pending, (state) => {
        state.status = "loading";
      })
      // Caso a requisição tenha sido bem-sucedida
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cats = action.payload; // Armazena os dados dos gatos no estado
      })
      // Caso a requisição tenha falhado
      .addCase(fetchCats.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message; // Armazena a mensagem de erro no estado
      });
  },
});

// Exporta as ações síncronas
export const { incrementPage, decrementPage } = catSlice.actions;

// Exportar o redutor
export default catSlice.reducer;
