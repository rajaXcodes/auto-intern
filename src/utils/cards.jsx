import React from "react";

function Cards({ Icon, para }) {
  return (
    <div className="relative w-[250px] h-[254px] bg-black text-white flex flex-col items-center justify-center rounded-lg shadow-lg transform hover:scale-105 transition-transform border-2 border-transparent overflow-hidden group p-md">
      <div className="z-10">
        <Icon className="w-20 h-20" />
      </div>
      <p className="z-10 text-center mt-2 font-bold text-lg">{para}</p>

      <div className="absolute w-[120px] h-[130%] bg-gradient-to-b from-cyan-500 to-pink-500 animate-spin-slow"></div>
      <div className="absolute inset-[5px] bg-black rounded-md"></div>
    </div>
  );
}

export default Cards;
