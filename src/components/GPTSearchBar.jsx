import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, GEMINI_API } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const genAI = new GoogleGenerativeAI(GEMINI_API);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptsearchInput = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result give ahead. Example Result: Don, Sholay, Gadar, Lakshay, Shahenshah";

    const result = await model.generateContent(gptQuery);
    const response = await result.response;
    const text = response.text();
    const movieNames = text.split(",").map((item) => item.trim());

    const promiseArray = movieNames.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: movieNames, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 col-span-3 text-white rounded-md bg-[#e50914]"
          onClick={handleGptsearchInput}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
