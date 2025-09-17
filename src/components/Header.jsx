import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import cyberlogo from "../assets/cyberlogo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleMenuClick = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md py-2 shadow-xl' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute -inset-2 bg-cyan-500/20 rounded-full blur-md group-hover:bg-green-500/30 transition-all duration-300"></div>
            <img
              src={cyberlogo}
              alt="Cyber Security Club Logo"
              className="relative w-12 h-12 object-cover rounded-full border-2 border-cyan-500/50 group-hover:border-green-400/60 transition-all duration-300"
            />
          </div>
          <div className="hidden md:block">
            <h1 className="text-sm font-bold text-cyan-400 group-hover:text-green-400 transition-colors duration-300">
              Cyber Security Club
            </h1>
            <p className="text-xs text-gray-300 font-medium">IIIT BHAGALPUR</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {[
            { path: "/", name: "Home" },
            { path: "/about", name: "About" },
            { path: "/services", name: "Services" },
            { path: "/skills", name: "Skills" },
            { path: "/eventssection", name: "Events" },
            { path: "/contact", name: "Contact" }
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative py-2 group ${location.pathname === item.path ? 'text-green-400' : 'text-gray-300 hover:text-cyan-400'}`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`}></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cyan-400 p-2 rounded-lg bg-gray-800/50 hover:bg-cyan-900/30 transition-colors duration-300 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md border-t border-cyan-500/20 rounded-b-xl shadow-2xl z-40 md:hidden">
            <nav className="flex flex-col p-4 space-y-4 font-medium">
              {[
                { path: "/", name: "Home" },
                { path: "/about", name: "About" },
                { path: "/services", name: "Services" },
                { path: "/skills", name: "Skills" },
                { path: "/eventssection", name: "Events" },
                { path: "/contact", name: "Contact" }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleMenuClick}
                  className={`py-3 px-4 rounded-lg transition-all duration-300 ${location.pathname === item.path ? 'bg-cyan-900/30 text-green-400' : 'text-gray-300 hover:bg-cyan-900/20 hover:text-cyan-400'}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            
            {/* Club Info in Mobile Menu */}
            <div className="flex flex-col items-center pb-6 pt-2 border-t border-cyan-500/20 mx-4">
              <div className="w-16 h-16 mb-3 rounded-full border-2 border-cyan-500/50 p-1">
                <img
                  src={cyberlogo}
                  alt="Cyber Security Club Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="text-center">
                <h1 className="text-sm font-bold text-cyan-400">
                  Cyber Security Club
                </h1>
                <p className="text-xs text-gray-300 font-medium mt-1">IIIT BHAGALPUR</p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Scanner Line Effect */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70"></div>
    </header>
  );
};

export default Header;