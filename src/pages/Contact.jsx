import React from "react";
import { FaLinkedin, FaGithub, FaCode, FaEnvelope } from 'react-icons/fa';
export default function Contact() {
  return (
    <div className="min-h-screen text-white flex flex-col md:flex-row items-start justify-center p-10">
      {/* Left Form Section */}
      <div className="md:w-1/2 w-full mb-10 md:mb-0">
        <h2 className="text-3xl font-bold mb-6">We'd <span className="text-pink-400">♡</span> to help!</h2>
        <p className="mb-6 text-gray-300">
          We like to create things with top-notch security, open-minded people. Feel free to say hello!
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 text-white rounded border border-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 text-white rounded border border-white"
          />
          <textarea
            placeholder="Message"
            className="w-full px-4 py-30 text-white rounded border border-white"
          ></textarea>
          
          <button
            type="submit"
            className="bg-white text-blue-900 px-6 py-2 rounded hover:bg-yellow-500"
          >
            Send
          </button>
        </form>
      </div>

      {/* Right Info Section */}
      <div className="md:w-1/2 w-full pl-10">
        <div className="space-y-4">
          <div>
            <p className="font-semibold">Hackelite, IIIT Bhagalpur</p>
            <p>Bhagalpur, India</p>
          </div>
          <div>
            <p>📞  +(91) 91234 65569</p>
            <p>✉️ iiitbhagalpur@hackelite.com</p>
          </div>
        </div>
        <hr className="my-6 border-gray-500" />
        <div className="flex space-x-4 text-2xl text-white">
  <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
    <FaLinkedin />
  </a>
  <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
    <FaGithub />
  </a>
  <a href="https://leetcode.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
    <FaCode />
  </a>
  <a href="mailto:your-email@example.com" className="hover:text-pink-400">
    <FaEnvelope />
  </a>
</div>
        <p className="mt-4 text-sm text-gray-300">HACKELITE AT YOUR SERVICE!</p>
      </div>
    </div>
  );
}