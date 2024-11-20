import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = process.env.REACT_APP_CAT_API_KEY;

export const catApi = createApi({
  reducerPath: "catApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.thecatapi.com/v1/" }),
  endpoints: (builder) => ({
    fetchCats: builder.query({
      query: ({ page, limit, order }) =>
        `images/search?limit=${limit}&page=${page}&order=${order}&api_key=${apiKey}`,
    }),
  }),
});

export const { useFetchCatsQuery } = catApi;
