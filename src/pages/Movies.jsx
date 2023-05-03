import { useGetMoviesQuery } from "../services/TMDB";
import { MovieList } from "../components";
import { useSelector } from "react-redux";
import { selectGenreOrCategory } from "../features/genreOrCategory";
import { useState } from "react";

export default function Movies() {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.genreOrCategory,
  );
  const { data } = useGetMoviesQuery({ genreIdOrCategoryName, page });
  return (
    <div className="ml-[230px] mt-[50px]">
      <MovieList movies={data} />
    </div>
  );
}
