import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonHero({ route }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(route)}
      className="mt-2 mb-4 bg-[rgb(0_229_153_)] text-black px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors"
    >
      Get Started
    </button>
  );
}

export default ButtonHero;
