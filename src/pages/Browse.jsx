import React from "react";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useNowPlayingMovies from "../custom-hooks/useNowPlayingMovies";
import usePopularMovies from "../custom-hooks/usePopularMovies";
import useTopRatedMovies from "../custom-hooks/useTopRatedMovies";
import useUpcomingMovies from "../custom-hooks/useUpcomingMovies";
import GPTSearch from "../components/GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
