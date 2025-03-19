import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-[#007BFF] mb-6">About YRNS</h1>
      
      <div className="max-w-3xl text-center">
        <p className="text-gray-300 text-lg mb-4">
          Welcome to <span className="text-[#39FF14] font-semibold">YRNS</span>, where innovation meets creativity.
          We are dedicated to providing high-quality products and an unmatched experience for our customers.
        </p>

        <p className="text-gray-400 mb-4">
          Our journey started with a vision to bring unique and stylish products to the world.
          Whether you're looking for trendy fashion, tech gear, or lifestyle accessories, we’ve got something for everyone.
        </p>

        <p className="text-gray-400 mb-4">
          At <span className="text-[#39FF14] font-semibold">YRNS</span>, we blend futuristic aesthetics with streetwear culture.
          Our brand represents those who dare to stand out, break norms, and express themselves unapologetically.
        </p>

        <p className="text-gray-400 mb-4">
          Every design we create is a statement – a fusion of bold graphics, glitch-inspired elements, and cutting-edge materials.
          We believe in fashion that speaks volumes, telling a story of resilience, creativity, and forward-thinking energy.
        </p>

        <p className="text-gray-500">
          Join us as we continue to push boundaries, create exciting designs, and make an impact in the world of fashion and beyond!
          Be part of the revolution. <span className="text-[#39FF14] font-semibold">Glitch the Code. Own the Future.</span>
        </p>
      </div>
    </div>
  );
};

export default About;
