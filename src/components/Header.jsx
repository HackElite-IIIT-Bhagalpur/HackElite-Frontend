import React from "react";
import { Link } from "react-router-dom";
import cyberlogo from '../assets/cyberlogo.jpg';
 // Make sure this image is in your /src folder

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex flex-col sm:flex-row justify-between items-center px-5 py-4 bg-[#0d124b] shadow-md backdrop-blur-md">
      
      {/* Left: Animated IIIT-BH */}
      <h1 className="flex flex-wrap justify-center text-4xl md:text-6xl font-extrabold text-white">
        {["I", "I", "I", "T", "-", "B", "H"].map((char, i) => (
          <span
            key={i}
            style={{ animationDelay: `${i * 150}ms` }}
            className={`inline-block animate-rotate3D transform transition duration-500 hover:scale-125 
              ${char === "B" || char === "H"
                ? "text-pink-400"
                : "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-green-400"}
              drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] mx-1`}
          >
            {char}
          </span>
        ))}
      </h1>

      {/* Middle: Navigation */}
      <nav className="mt-4 sm:mt-0 space-x-4 text-white text-sm md:text-base font-medium">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-400">About</Link>
        <Link to="/services" className="hover:text-blue-400">Services</Link>
        <Link to="/skills" className="hover:text-blue-400">Skills</Link>
        <Link to="/eventssection" className="hover:text-blue-400">Event</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        
      </nav>

      {/* Right: Cyber Security Club Section */}
      <div className="mt-6 sm:mt-0 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
        {/* Logo */}
        <img src={cyberlogo}
        alt="Cyber Security Club Logo" className=" w-20 h-20 object-cover rounded-full drop-shadow-xl brightness-110 contrast-125 transition-transform duration-300 hover:scale-105" />

        {/* Text */}
        <div className="text-center sm:text-left">
          <h1 className="text-sm md:text-lg font-semibold text-blue-400">
            Cyber Security Club
          </h1>
          
          <p className="text-xs text-green-300 font-medium">IIIT BHAGALPUR</p>
        </div>
      </div>
    </header>
  );
};

 export default Header;






// import React from "react";

// const Header = () => {
//   return (
//     <header className="sticky top-0 z-50 flex flex-col sm:flex-row justify-between items-center px-5 py-4 bg-[#0d124b] shadow-md backdrop-blur-md">
      
//       {/* Left: Animated IIIT-BH */}
//       <h1 className="flex flex-wrap justify-center text-4xl md:text-6xl font-extrabold text-white">
//         {["I", "I", "I", "T", "-", "B", "H"].map((char, i) => (
//           <span
//             key={i}
//             style={{ animationDelay: `${i * 150}ms` }}
//             className={`inline-block animate-rotate3D transform transition duration-500 hover:scale-125 
//               ${char === "B" || char === "H"
//                 ? "text-pink-400"
//                 : "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-green-400"}
//               drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] mx-1`}
//           >
//             {char}
//           </span>
//         ))}
//       </h1>

//       {/* Middle: Scrollable Nav */}
//       <nav className="mt-4 sm:mt-0 space-x-4 text-white text-sm md:text-base font-medium">
//         <a href="#home" className="hover:text-blue-400">Home</a>
//         <a href="#about" className="hover:text-blue-400">About</a>
//         <a href="#services" className="hover:text-blue-400">Services</a>
//         <a href="#skills" className="hover:text-blue-400">Skills</a>
//         <a href="#eventssection" className="hover:text-blue-400">Event</a>
//         <a href="#contact" className="hover:text-blue-400">Contact</a>
//       </nav>

//       {/* Right: Club Section */}
//       <div className="mt-6 sm:mt-0 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
//         <img src="https://iiitkottayam.ac.in/data/images/club//csyclub-light.png"
//           alt="Cyber Security Club Logo"
//           className="w-20 md:w-25 object-contain rounded-lg drop-shadow-xl brightness-110 contrast-125 transition-transform duration-300 hover:scale-105"
//         />
//         <div className="text-center sm:text-left">
//           <h1 className="text-sm md:text-lg font-semibold text-blue-400">Cyber Security Club</h1>
//           <p className="text-xs text-green-300 font-medium">IIIT BHAGALPUR</p>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

