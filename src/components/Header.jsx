import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import cyberlogo from "../assets/cyberlogo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-100 shadow-md backdrop-blur-md py-0 md:py-3">
      <div className="flex justify-center items-center px-4 py- md:px-6 md:py-2">
        {/* Left: IIIT-BH Logo Text */}
        {/* <h1 className="flex flex-wrap text-2xl md:text-4xl font-extrabold text-white">
          {["I", "I", "I", "T", "-", "B", "H"].map((char, i) => (
            <span
              key={i}
              style={{ animationDelay: `${i * 120}ms` }}
              className={`inline-block animate-rotate3D transition-transform duration-300 hover:scale-110 
                ${char === "B" || char === "H"
                  ? "text-pink-400"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-green-400"}
                drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] mx-[1px]`}
            >
              {char}
            </span>
          ))}
        </h1> */}
       
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-15 text-gray-900 text-sm font-medium">
          <Link to="/" onClick={handleMenuClick} className="hover:text-blue-400">Home</Link>
          <Link to="/about" onClick={handleMenuClick} className="hover:text-blue-400">About</Link>
          <Link to="/services" onClick={handleMenuClick} className="hover:text-blue-400">Services</Link>
          <Link to="/skills" onClick={handleMenuClick} className="hover:text-blue-400">Skills</Link>
          <Link to="/eventssection" onClick={handleMenuClick} className="hover:text-blue-400">Event</Link>
          <Link to="/contact" onClick={handleMenuClick} className="hover:text-blue-400">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black flex item-left focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Right: Club Logo */}
        {/* <div className="hidden md:flex items-center space-x-2">
          <img
            src={cyberlogo}
            alt="Cyber Security Club Logo"
            className="w-12 h-12 object-cover rounded-full drop-shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <div>
            <h1 className="text-sm font-semibold text-blue-400">
              Cyber Security Club
            </h1>
            <p className="text-xs text-green-300 font-medium">IIIT BHAGALPUR</p>
          </div>
        </div> */}
      </div>

      {/* Mobile Dropdown (absolute overlay) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#141a5c] text-white rounded-b-xl shadow-lg z-40">
          <nav className="flex flex-col space-y-3 p-4 text-center font-medium">
            <Link to="/" onClick={handleMenuClick} className="hover:text-blue-400">Home</Link>
            <Link to="/about" onClick={handleMenuClick} className="hover:text-blue-400">About</Link>
            <Link to="/services" onClick={handleMenuClick} className="hover:text-blue-400">Services</Link>
            <Link to="/skills" onClick={handleMenuClick} className="hover:text-blue-400">Skills</Link>
            <Link to="/eventssection" onClick={handleMenuClick} className="hover:text-blue-400">Event</Link>
            <Link to="/contact" onClick={handleMenuClick} className="hover:text-blue-400">Contact</Link>
          </nav>

          {/* Club Info in Dropdown */}
          <div className="flex flex-col items-center pb-4 space-y-2">
            <img
              src={cyberlogo}
              alt="Cyber Security Club Logo"
              className="w-14 h-14 object-cover rounded-full drop-shadow-md"
            />
            <div className="text-center">
              <h1 className="text-sm font-semibold text-blue-400">
                Cyber Security Club
              </h1>
              <p className="text-xs text-green-300 font-medium">IIIT BHAGALPUR</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
