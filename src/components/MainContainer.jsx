import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const randomIndex = Math.floor(Math.random(0, 19) * 20);
  const mainMovie = movies[randomIndex];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <div className="pt-[30%] md:pt-0">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
      </div>
    </div>
  );
};

export default MainContainer;
