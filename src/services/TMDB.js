import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY;
const page = 1;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getGenres: builder.query({
      query: ({ genreIdOrCategoryName, page }) =>
        `genre/movie/list?api_key=${tmdbApiKey}`,
    }),
    // Get Movies by Popular
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page }) => {
        // category name
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "string"
        ) {
        }

        // genre id
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "number"
        ) {
        }
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
  }),
});

export const { useGetGenresQuery, useGetMoviesQuery } = tmdbApi;
