import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b1a3c] text-white py-8 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 mb-6">
        {/* Logo + Description */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <img
              src="https://chiragsharma.co.in/img/a.png"
              alt="IIITBH Logo"
              className="w-10 h-10"
            />
            <div>
              <h2 className="text-lg font-bold text-cyan-400">IIITBH Bhagalpur</h2>
              <p className="text-xs text-gray-400">Department of HackElite</p>
            </div>
          </div>
          <p className="text-xs text-gray-300 leading-snug">
            The Cyber Security Club at IIIT Bhagalpur is dedicated to fostering awareness, knowledge, and innovation in cybersecurity. Empowering students with practical skills and ethical hacking principles.
          </p>
          <div className="flex space-x-2 text-sm mt-2">
            <a href="#" className="bg-blue-600 hover:bg-blue-500 p-2 rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-blue-400 hover:bg-blue-300 p-2 rounded-full">
              <FaTwitter />
            </a>
            <a href="#" className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-red-600 hover:bg-red-500 p-2 rounded-full">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold mb-2 border-b border-gray-600 pb-1">Quick Links</h3>
          <ul className="space-y-1 text-xs text-gray-300">
            <li><a href="#" className="hover:text-cyan-400">IIITBH Website</a></li>
            <li><a href="#" className="hover:text-cyan-400">Academics</a></li>
            <li><a href="#" className="hover:text-cyan-400">Academic Calendar</a></li>
            <li><a href="#" className="hover:text-cyan-400">Admissions</a></li>
            <li><a href="#" className="hover:text-cyan-400">Placements</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-sm font-semibold mb-2 border-b border-gray-600 pb-1">Contact Us</h3>
          <p className="text-xs text-gray-300">Aditya Kumar</p>
          <p className="text-xs text-gray-300 mb-1">Head at HackElite, CSE</p>
          <p className="text-xs text-gray-300">IIIT Bhagalpur, Bihar</p>
          <p className="flex items-center gap-1 text-xs text-gray-300 mt-1">
            <FaPhoneAlt className="text-cyan-400" /> +91 91234 65569
          </p>
          <p className="flex items-center gap-1 text-xs text-gray-300 mt-1">
            <FaEnvelope className="text-cyan-400" /> aditya.kumar@iiitbh.ac.in
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold mb-2 border-b border-gray-600 pb-1">Newsletter</h3>
          <p className="text-xs text-gray-300 mb-2">
            Subscribe for updates on events, research, and opportunities.
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 text-xs text-white bg-[#0f1a2a] border border-gray-600 rounded focus:outline-none"
            />
            <button className="w-full bg-cyan-500 hover:bg-pink-500 text-black p-2 text-xs rounded font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 pt-4 text-center text-[10px] text-gray-400 flex flex-col md:flex-col justify-center items-center gap-2">
        <p>© 2025 IIITBH Bhagalpur. All rights reserved.</p>
        <div className="flex space-x-2 text-xs">
          <a href="#" className="hover:text-cyan-400">Privacy Policy</a>
          <a href="#" className="hover:text-cyan-400">Terms of Service</a>
          <a href="#" className="hover:text-cyan-400">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

