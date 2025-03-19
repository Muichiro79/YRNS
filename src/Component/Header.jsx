import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-black text-white w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#007BFF]">
          YRNS
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-[#39FF14] transition">Home</Link>
          <Link to="/shop" className="hover:text-[#39FF14] transition">Shop</Link>
          <Link to="/about" className="hover:text-[#39FF14] transition">About</Link>
          <Link to="/contact" className="hover:text-[#39FF14] transition">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black text-white space-y-4 p-6 absolute top-16 left-0 w-full shadow-lg"
        >
          <Link to="/" className="block hover:text-[#39FF14] transition" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/shop" className="block hover:text-[#39FF14] transition" onClick={closeMenu}>
            Shop
          </Link>
          <Link to="/about" className="block hover:text-[#39FF14] transition" onClick={closeMenu}>
            About
          </Link>
          <Link to="/contact" className="block hover:text-[#39FF14] transition" onClick={closeMenu}>
            Contact
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
