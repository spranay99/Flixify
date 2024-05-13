import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const movie = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await movie.json();

    const filterData = json.results.filter(
      (video) => video.type === "Trailer" && video.name === "Official Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;
