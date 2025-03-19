import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white p-6 text-center">
      {/* Navigation Links */}
      <nav className="mb-4">
        <ul className="flex justify-center gap-6">
          <li><Link to="/" className="hover:text-[#39FF14] transition">Home</Link></li>
          <li><Link to="/shop" className="hover:text-[#39FF14] transition">Shop</Link></li>
          <li><Link to="/about" className="hover:text-[#39FF14] transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-[#39FF14] transition">Contact</Link></li>
        </ul>
      </nav>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mb-4">
        <a href="#" className="hover:text-[#007BFF] transition" aria-label="Facebook">
          <Facebook size={20} />
        </a>
        <a href="#" className="hover:text-[#007BFF] transition" aria-label="Instagram">
          <Instagram size={20} />
        </a>
        <a href="#" className="hover:text-[#007BFF] transition" aria-label="Twitter">
          <Twitter size={20} />
        </a>
      </div>

      {/* Copyright Info */}
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} YRNS. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
