import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CyberLogo from '../assets/cyberlogo.jpg';

export default function InstituteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigationItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/services", name: "Services" },
    { path: "/skills", name: "Skills" },
    { path: "/eventssection", name: "Events" },
    { path: "/contact", name: "Contact" }
  ];

  return (
    <header className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/20 shadow-lg">
      <div className="flex items-center justify-between px-2 sm:px-6 md:px-10 py-2 sm:py-3">
        {/* Left: Institute Logo with Cyber Effects */}
        <div className="flex-shrink-0 sm:mx-[5%] mx-0 relative group">
          <div className="absolute -inset-1 bg-cyan-500/20 rounded-lg blur-md group-hover:bg-green-500/30 transition-all duration-300"></div>
          <img
            src="https://chiragsharma.co.in/img/a.png"
            alt="IIIT Bhagalpur Logo"
            className="relative w-10 sm:w-14 md:w-20 h-auto object-contain filter brightness-110 contrast-110 drop-shadow-[0_0_5px_rgba(34,211,238,0.3)] group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all duration-300"
          />
        </div>

        {/* Middle: Institute Title with Cyber Typography */}
        <div className="hidden md:flex flex-col text-center flex-grow px-2">
          <h1 className="text-[10px] sm:text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 leading-tight drop-shadow-[0_0_3px_rgba(34,211,238,0.5)]">
            Indian Institute of Information Technology, Bhagalpur
          </h1>
          <p className="text-[8px] sm:text-sm md:text-lg text-gray-300 font-medium mt-1">
            भारतीय सूचना प्रौद्योगिकी संस्थान, भागलपुर
          </p>
          <p className="text-[8px] sm:text-xs md:text-sm text-cyan-400/80 italic leading-tight mt-1">
            (An Institute of National Importance by the Act of Parliament)
          </p>
        </div>

        {/* Right: Cyber Logo with Enhanced Effects */}
        <div className="flex-shrink-0 flex flex-col items-center sm:mx-[5%] mx-0 relative group">
          <div className="absolute -inset-1 bg-green-500/20 rounded-full blur-md group-hover:bg-cyan-500/30 transition-all duration-300"></div>
          <img
            src={CyberLogo}
            alt="Cyber Club Logo"
            className="relative w-9 sm:w-12 md:w-16 h-auto object-cover rounded-full border border-cyan-500/50 group-hover:border-green-400/60 transition-all duration-300 drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]"
          />
          <h6 className="text-[5px] sm:text-[6px] md:text-[10px] text-green-400 font-medium mt-0.5 drop-shadow-[0_0_2px_rgba(34,211,238,0.3)]">
            Cyber Security Club
          </h6>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden ml-4 flex flex-col justify-center items-center w-10 h-10 py-1 px-2 rounded-md border border-cyan-500/30 bg-gray-900/80 hover:bg-gray-800/90 transition-all"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-cyan-400 mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-cyan-400 mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`w-6 h-0.5 bg-cyan-400 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center items-center py-3 bg-black/40 backdrop-blur-sm">
        <div className="flex space-x-1">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 border border-transparent hover:border-cyan-500/30 hover:bg-gray-800/60 ${
                location.pathname === item.path
                  ? "text-cyan-400 bg-cyan-900/20 border-cyan-500/40 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-black/80 backdrop-blur-sm ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col space-y-2 px-4 py-4">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-3 text-base font-medium rounded-md transition-all duration-300 border ${
                location.pathname === item.path
                  ? "text-cyan-400 bg-cyan-900/20 border-cyan-500/40 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                  : "text-gray-300 border-transparent hover:border-cyan-500/30 hover:bg-gray-800/60"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      
      {/* Scanner Line Effect */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70"></div>
    </header>
  );
}