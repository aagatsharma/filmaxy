import { Rating } from "primereact/rating";

const MovieList = ({ movies }) => {
  console.log(movies);
  return (
    <div className="flex flex-wrap gap-3 justify-between">
      {movies?.results.map((movie, i) => (
        <div key={i} className="m-3 w-[200px] ">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://www.fillmurray.com/200/300"
            }
            className="h-[300px] w-[200px] rounded-xl hover:scale-105 hover:cursor-pointer"
            alt="Movie Logo"
          />
          <div className="">
            <h1 className="text-center text-xl pt-2 truncate hover:cursor-pointer overflow-hidden">
              {movie.title}
            </h1>
          </div>
          {/* Rating */}
          <div className="flex justify-center ">
            <Rating
              readOnly
              value={movie.vote_average / 2}
              cancel={false}
              className="flex gap-1 mt-1 text-blue-400 "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
