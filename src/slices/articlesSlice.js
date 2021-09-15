import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return response.data;
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    status: "pending",
    articles: null,
    error: null,
  },
  reducers: {},

  extraReducers: {
    [fetchArticles.fulfilled]: (state, action) => {
      const articles = action.payload;

      state.articles = articles;
    },
  },
});

export const articlesActions = articlesSlice.actions;

export const articlesReducer = articlesSlice.reducer;
