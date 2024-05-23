import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, poster_path, title, release_date, vote_average } = movie;

  return (
    <Link to={`/browse/watch/${id}`}>
      <div className="w-48 overflow-hidden text-white">
        <div className="cursor-pointer transform transition-transform duration-300 hover:scale-110 rounded-lg overflow-hidden">
          <img src={IMAGE_CDN_URL + poster_path} alt="Movie Name" />
        </div>
        <span className="font-bold text-lg">
          {title.length > 20 ? `${title.substring(0, 18)}...` : title}
        </span>
        <div className="flex justify-between items-center">
          <span>{release_date}</span>
          <span className="bg-[#d6180b] px-[4px] font-semibold">
            {Math.floor(vote_average * 10) / 10}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
