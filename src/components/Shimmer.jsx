import React from "react";

const Shimmer = () => {
  return (
    <div>
      {Array(3)
        .fill("")
        .map((elem, index) => {
          return (
            <div key={index} className="animate-pulse px-4">
              <div className="w-60 h-10 bg-gradient-to-r from-white bg-black my-4"></div>
              <div className="flex gap-4 overflow-x-scroll scroll-smooth no-scrollbar movies">
                <div className="w-48 shrink-0 h-64 bg-gradient-to-r from-white bg-black rounded-lg"></div>
                <div className="w-48 shrink-0 h-64 bg-gradient-to-r from-white bg-black rounded-lg"></div>
                <div className="w-48 shrink-0 h-64 bg-gradient-to-r from-white bg-black rounded-lg"></div>
                <div className="w-48 shrink-0 h-64 bg-gradient-to-r from-white bg-black rounded-lg"></div>
                <div className="w-48 shrink-0 h-64 bg-gradient-to-r from-white bg-black rounded-lg"></div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
