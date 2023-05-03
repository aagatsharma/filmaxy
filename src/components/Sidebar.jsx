import { Link } from "react-router-dom";
import { useGetGenresQuery } from "../services/TMDB";
import genreIcons from "../assets/genres/";
import { useDispatch, useSelector } from "react-redux";
import { selectGenreOrCategory } from "../features/genreOrCategory";

export default function Sidebar() {
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.genreOrCategory,
  );
  const { data, isFetching } = useGetGenresQuery();
  const categories = [
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col border-r-[1px] bg-white h-[100vh] fixed overflow-y-scroll z-200">
      <Link path="/">
        <h1 className="text-5xl font-bold text-cyan-600 p-7 border-b-[1px] ">
          FILMAXY
        </h1>
      </Link>

      {/* Categories */}
      <div className="border-b-[1px] pb-6 ">
        <div className="mt-6 text-gray-500 ml-2">
          <span>Categories</span>
        </div>

        <div className="mt-3">
          {categories.map((category) => {
            return (
              <div
                className="flex items-center gap-3 cursor-pointer text-xl hover:bg-black/5 py-3 pl-4"
                key={category.value}
                onClick={() => dispatch(selectGenreOrCategory(category.value))}
              >
                <img
                  src={genreIcons[category.label.toLowerCase()]}
                  alt="Logo"
                  className="h-10 w-10"
                />
                <h1>{category.label}</h1>
              </div>
            );
          })}
        </div>
      </div>

      {/* Genres */}
      <div className="mt-6 text-gray-500 ml-3">
        <span>Genres</span>
      </div>
      <div className="mt-3">
        {data?.genres.map((genre) => {
          return (
            <div
              className="flex items-center gap-3 cursor-pointer text-xl hover:bg-black/5 py-3 pl-4"
              key={genre.id}
              onClick={() => dispatch(selectGenreOrCategory(genre.id))}
            >
              <img
                src={genreIcons[genre.name.toLowerCase()]}
                alt="Logo"
                className="h-10 w-10"
              />
              <h1>{genre.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
