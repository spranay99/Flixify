import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ id, posterPath }) => {
  return (
    <Link to={`/browse/watch/${id}`}>
      <div className="w-48 cursor-pointer">
        <img src={IMAGE_CDN_URL + posterPath} alt="Movie Name" />
      </div>
    </Link>
  );
};

export default MovieCard;
