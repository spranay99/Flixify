import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames, gptSearchButton } = useSelector(
    (store) => store.gpt
  );

  return (
    gptSearchButton && (
      <div className="p-4 m-4 bg-black text-white bg-opacity-80">
        <div>
          {!(movieNames == null) && gptSearchButton ? (
            movieNames.map((movieName, index) => (
              <MovieList
                key={movieName}
                title={movieName}
                movies={movieResults[index]}
              />
            ))
          ) : (
            <Shimmer />
          )}
        </div>
      </div>
    )
  );
};

export default GptMovieSuggestion;
