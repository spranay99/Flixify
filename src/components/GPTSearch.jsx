import React from "react";
import { LOGIN_BACKGROUND_IMG } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={LOGIN_BACKGROUND_IMG}
          alt="Background image"
        />
        <div className="background-overlay fixed w-full h-full"></div>
      </div>
      <div>
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
