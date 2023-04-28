import { Link } from "react-router-dom";
import { BsFill0CircleFill } from "react-icons/bs";
import { useGetGenresQuery } from "../services/TMDB";

export default function Sidebar() {
  const { data, isFetching } = useGetGenresQuery();
  console.log(data);
  const categories = [
    { id: 1, name: "Popular" },
    { id: 2, name: "Top Rated" },
    { id: 3, name: "Upcoming" },
  ];
  return (
    <div className="flex flex-col border-r-[1px] bg-white h-[100vh] fixed overflow-y-scroll z-200">
      <Link path="/">
        <h1 className="text-5xl font-bold text-cyan-600 p-7 border-b-[1px]">
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
                key={category.id}
              >
                <BsFill0CircleFill />
                <h1>{category.name}</h1>
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
            >
              <BsFill0CircleFill />
              <h1>{genre.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
