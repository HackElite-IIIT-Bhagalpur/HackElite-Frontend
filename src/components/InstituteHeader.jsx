import React from "react";

export default function InstituteHeader() {
  return (
    <header className="bg-white shadow-sm border-b ">
      <div className="flex items-center px-4 md:px-10 py-4 gap-6 md:gap-10">
        {/* Logo */}
        <img
          src="https://www.limatsoftsolutions.co.in/assets/DSA/DSA/images/client/iiit-bh-logo.jpg"
          alt="IIIT Bhagalpur Logo"
          className="w-20 md:w-24 h-auto object-contain"
        />

        {/* Institute Title */}
        <div className="flex flex-col justify-center text-left mt-4 sm:mt-0 space-x-4 ml-150">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            Indian Institute of Information Technology, Bhagalpur
          </h1>
          <p className="text-md md:text-lg text-gray-700 font-medium">
            भारतीय सूचना प्रौद्योगिकी संस्थान, भागलपुर
          </p>
          <p className="text-sm md:text-base text-gray-500 italic">
            (An Institute of National Importance by the Act of Parliament)
          </p>
        </div>
      </div>
    </header>
  );
}

