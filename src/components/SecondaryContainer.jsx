import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-12 lg:-mt-52 sm:-mt-20 relative z-20 pl-4 md:pl-10 pb-8">
          <MovieList title="Up Coming" movies={movies.upcomingMovies} />
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Top Rated" movies={movies.topRatedMovies} />
          <MovieList title="Popular" movies={movies.popularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
