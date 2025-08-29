// Contact.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaCode, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-blue-100 text-white flex flex-col md:flex-row items-center justify-center px-6 py-12 md:px-16">
      
      {/* Left Form Section */}
      <div className="md:w-1/2 w-full mb-12 md:mb-0 bg-purple-50 p-8 rounded-2xl shadow-lg border border-gray-700">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800 tracking-wide">
          Let’s Connect 🚀
        </h2>
        <p className="mb-6 text-gray-600 text-base md:text-lg leading-relaxed">
          We build with <span className="text-yellow-400 font-semibold">creativity</span>,  
          <span className="text-blue-400 font-semibold"> collaboration</span>, and open minds.  
          Feel free to drop a message!
        </p>
        <form className="space-y-4 ">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-600 text-black placeholder-gray-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-600 text-black placeholder-gray-500 focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-600 text-black placeholder-gray-500 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 text-black font-bold py-3 rounded-lg text-lg shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Info Section */}
      <div className="md:w-1/2 w-full md:pl-12 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="space-y-4">
          <div>
            <p className="font-bold text-yellow-500 text-lg md:text-xl">
              Hackelite, IIIT Bhagalpur
            </p>
            <p className="text-gray-600 text-sm md:text-base">Bhagalpur, India</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm md:text-base">📞 +(91) 91234 65569</p>
            <p className="text-gray-600 text-sm md:text-base">✉️ iiitbhagalpur@hackelite.com</p>
          </div>
        </div>

        <hr className="my-6 border-gray-700 w-full" />

        <div className="flex space-x-6 text-2xl md:text-3xl text-gray-800">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors duration-300"
          >
            <FaCode />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="hover:text-red-400 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="mt-6 text-gray-600 tracking-widest text-xs md:text-sm">
          HACKELITE AT YOUR SERVICE ⚡
        </p>
      </div>
    </div>
  );
}
