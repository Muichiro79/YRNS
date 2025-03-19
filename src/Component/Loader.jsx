import React from "react";

const Loader = ({ size = "8", color = "border-[#39FF14]", bgColor = "bg-black" }) => {
  return (
    <div className={`flex justify-center items-center w-full h-screen ${bgColor}`}>
      <div className={`border-t-4 border-solid ${color} rounded-full animate-spin aspect-square w-${size} h-${size}`} />
    </div>
  );
};

export default Loader;
