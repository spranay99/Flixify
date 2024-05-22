import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

const WatchTrailer = () => {
  const movieId = useParams();
  const [movieKey, setMovieKey] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieTrailer();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
      // else {
      //   navigate("/browse/watch/" + movieId.id);
      // }
    });

    //Unsubscribe when component unmounts.
    return () => unsubscribe();
  }, []);

  const fetchMovieTrailer = async () => {
    const movie = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId.id +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await movie.json();
    const filterData = json.results.filter(
      (video) => video.type === "Trailer" && video.name === "Official Trailer"
    );
    setMovieKey(filterData[0]?.key);
  };

  return (
    <>
      <div className="w-full h-screen text-center">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/` + movieKey}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default WatchTrailer;
