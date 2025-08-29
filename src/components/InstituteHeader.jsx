import React from "react";
import CyberLogo from '../assets/cyberlogo.jpg'

export default function InstituteHeader() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="flex items-center justify-between px-2 sm:px-6 md:px-10 py-2 sm:py-3">
        {/* Left: Institute Logo */}
        <div className="flex-shrink-0 sm:mx-[5%] mx-0">
          <img
            //src="https://www.limatsoftsolutions.co.in/assets/DSA/DSA/images/client/iiit-bh-logo.jpg"
            src="https://chiragsharma.co.in/img/a.png"
            alt="IIIT Bhagalpur Logo"
            className="w-10 sm:w-14 md:w-20 h-auto object-contain"
          />
        </div>

        {/* Middle: Institute Title */}
        <div className="flex flex-col text-center flex-grow px-2">
          <h1 className="text-[10px] sm:text-lg md:text-2xl font-bold text-gray-900 leading-tight">
            Indian Institute of Information Technology, Bhagalpur
          </h1>
          <p className="text-[8px] sm:text-sm md:text-lg text-gray-700 font-medium">
            भारतीय सूचना प्रौद्योगिकी संस्थान, भागलपुर
          </p>
          {/* <p className="hidden sm:block text-xs md:text-sm text-gray-500 italic">
            (An Institute of National Importance by the Act of Parliament)
          </p> */}
          <p className="text-[8px] sm:text-xs md:text-sm text-gray-500 italic leading-tight">
            (An Institute of National Importance by the Act of Parliament)
          </p>

        </div>

        {/* Right: Cyber Logo */}
        <div className="flex-shrink-0 flex flex-col items-center sm:mx-[5%] mx-0">
          <img
            src={CyberLogo}
            alt="Cyber Club Logo"
            className="w-9 sm:w-12 md:w-16 h-auto object-cover rounded-full drop-shadow-lg brightness-110 contrast-125 transition-transform duration-300 hover:scale-105"
          />
          <h6 className="text-[5px] sm:text-[5px] md:text-[10px] text-gray-500 italic leading-tight mt-0.5">
            Cyber Security Club
          </h6>
        </div>
      </div>
    </header>
  );
}

