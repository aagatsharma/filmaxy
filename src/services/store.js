import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "./TMDB";
import genreOrCategoryReducer from "../features/genreOrCategory";

export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    genreOrCategory: genreOrCategoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
