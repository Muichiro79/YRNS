import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Once prevents repeat animations
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 data-aos="fade-up" className="text-5xl md:text-6xl font-bold text-white">
          YRNS
        </h1>
        <p data-aos="fade-up" className="text-gray-400 mt-4 max-w-lg text-lg">
          Elevate Your Style. Define the Culture.
        </p>
        <Link
          to="/shop"
          data-aos="fade-up"
          className="mt-6 px-6 py-3 bg-[#39FF14] text-black font-semibold rounded-full hover:bg-[#007BFF] transition"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Collection */}
      <section id="shop" className="py-20 px-6 text-center">
        <h2 data-aos="fade-right" className="text-3xl font-bold text-white mb-6">
          Latest Drops
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div data-aos="fade-up" className="bg-gray-900 p-4 rounded-xl">
            <img src="https://via.placeholder.com/300" alt="Hoodie" className="rounded-lg w-full" />
            <h3 className="text-xl mt-4">Cyber Glitch Hoodie</h3>
            <p className="text-gray-400">$75.00</p>
            <Link
              to="/shop"
              className="mt-4 inline-block px-4 py-2 bg-[#39FF14] text-black font-semibold rounded-full hover:bg-[#007BFF] transition"
            >
              Buy Now
            </Link>
          </div>
          <div data-aos="fade-up" className="bg-gray-900 p-4 rounded-xl">
            <img src="https://via.placeholder.com/300" alt="Joggers" className="rounded-lg w-full" />
            <h3 className="text-xl mt-4">Neon Street Joggers</h3>
            <p className="text-gray-400">$60.00</p>
            <Link
              to="/shop"
              className="mt-4 inline-block px-4 py-2 bg-[#39FF14] text-black font-semibold rounded-full hover:bg-[#007BFF] transition"
            >
              Buy Now
            </Link>
          </div>
          <div data-aos="fade-up" className="bg-gray-900 p-4 rounded-xl">
            <img src="https://via.placeholder.com/300" alt="Cap" className="rounded-lg w-full" />
            <h3 className="text-xl mt-4">YRNS Snapback</h3>
            <p className="text-gray-400">$35.00</p>
            <Link
              to="/shop"
              className="mt-4 inline-block px-4 py-2 bg-[#39FF14] text-black font-semibold rounded-full hover:bg-[#007BFF] transition"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 text-center bg-gray-900">
        <h2 data-aos="fade-left" className="text-3xl font-bold text-white">
          About YRNS
        </h2>
        <p data-aos="fade-left" className="text-gray-400 mt-4 max-w-2xl mx-auto">
          YRNS isn’t just clothing. It’s a movement. A fusion of tech and streetwear culture, designed for those who dare to stand out.
        </p>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 text-center">
        <h2 data-aos="fade-in" className="text-3xl font-bold text-white m-5">
          Be Part of the YRNS Revolution
        </h2>
        <Link
          to="/shop"
          data-aos="fade-in"
          className="mt-6 px-8 py-3 bg-[#007BFF] text-white font-semibold text-lg rounded-full hover:bg-[#39FF14] transition-all duration-300 shadow-lg"
        >
          Explore Collection
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
