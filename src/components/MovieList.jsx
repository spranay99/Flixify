import React from "react";
import MovieCard from "./MovieCard";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const MovieList = ({ title, movies }) => {
  const handleLeftScroll = () => {
    const moviesList = document.querySelector(".movies");
    moviesList.scrollLeft = moviesList.scrollLeft - 624;
  };

  const handleRightScroll = () => {
    const moviesList = document.querySelector(".movies");
    moviesList.scrollLeft = moviesList.scrollLeft + 624;
  };

  return (
    <div className="px-4 relative">
      <h1 className="text-2xl py-4 text-white font-semibold">{title}</h1>
      <div className="flex overflow-x-scroll scroll-smooth no-scrollbar movies">
        <div
          className="text-white absolute top-[55%] left-[2%] bg-black rounded-full p-2 cursor-pointer
          hover:bg-zinc-700"
          onClick={handleLeftScroll}
        >
          <FaAngleLeft fontSize={20} />
        </div>
        <div className="flex gap-4">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
        <div
          className="text-white absolute top-[55%] right-[2%] bg-black rounded-full p-2 cursor-pointer
          hover:bg-zinc-700"
          onClick={handleRightScroll}
        >
          <FaAngleRight fontSize={20} />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
