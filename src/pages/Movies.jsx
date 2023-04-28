import { useGetMoviesQuery } from "../services/TMDB";
import { MovieList } from "../components";

export default function Movies() {
  const { data } = useGetMoviesQuery();
  return (
    <div className="ml-[230px] mt-[50px]">
      <MovieList movies={data} />
    </div>
  );
}
