import React from "react";
import { FaPlay } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-sm w-1/3">{overview}</p>
      <div className="flex gap-3 ">
        <button className="flex items-center gap-2 bg-white text-black py-2 px-5 text-base rounded-lg hover:bg-opacity-90">
          <FaPlay /> Play Now
        </button>
        <button className="flex items-center gap-2 bg-zinc-500 text-white py-2 px-5 text-base rounded-lg hover:bg-opacity-90">
          <IoIosInformationCircleOutline /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
