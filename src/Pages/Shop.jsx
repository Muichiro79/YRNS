import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Shop = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10  mt-10">
      <h1 data-aos="fade-down" className="text-3xl font-bold text-center text-[#007BFF] mb-6">
        Shop Our Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Placeholder products */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} data-aos="fade-up" className="bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="h-40 bg-gray-700 flex items-center justify-center rounded-md">
              <span className="text-gray-400">Product {item}</span>
            </div>
            <h2 className="text-lg font-semibold mt-4">Product Name</h2>
            <p className="text-gray-400">$XX.XX</p>
            <button className="mt-2 bg-[#39FF14] text-black px-4 py-2 rounded-md hover:bg-[#32D112] transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
