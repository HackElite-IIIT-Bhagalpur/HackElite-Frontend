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
    <footer className="bg-[#5415e8] text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://chiragsharma.co.in/img/a.png"
              alt="IIITBH Logo"
              className="w-12 h-12"
            />
            <div>
              <h2 className="text-xl font-bold">IIITBH Bhagalpur</h2>
              <p className="text-sm text-gray-300">Department of HackElite</p>
            </div>
          </div>
          <p className="text-sm text-white-400 mb-4">
          The Cyber Security Club at IIIT Bhagalpur is a student-driven
          initiative dedicated to fostering awareness, knowledge,
          and innovation in the field of cybersecurity.
          We aim to empower students with practical skills, ethical hacking principles, and real-world defense strategies to build a safer digital future.
</p>

          <div className="flex space-x-3 text-lg">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-blue-400 hover:bg-blue-300 text-white p-2 rounded-full"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-blue-700 hover:bg-blue-600 text-white p-2 rounded-full"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="bg-red-600 hover:bg-red-500 text-white p-2 rounded-full"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">IIITBH Website</a></li>
            <li><a href="#" className="hover:text-white">Academics</a></li>
            <li><a href="#" className="hover:text-white">Academic Calendar</a></li>
            <li><a href="#" className="hover:text-white">Admissions</a></li>
            <li><a href="#" className="hover:text-white">Placements</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">
            Contact Us
          </h3>
          <p className="text-sm text-gray-300">Aditya Kumar</p>
          <p className="text-sm text-gray-300 mb-2">Head at HackElite, CSE</p>
          <p className="text-sm text-gray-300">
            Indian Institute of Information Technology, Bhagalpur, Bihar
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-300 mt-2">
            <FaPhoneAlt className="text-white" /> +91 91234 65569
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-300 mt-1">
            <FaEnvelope className="text-white" /> aditya.kumar@iiitbh.ac.in
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">
            Newsletter
          </h3>
          <p className="text-sm text-gray-300 mb-3">
            Subscribe to receive updates on events, research, and opportunities.
          </p>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full p-2 mb-2 text-sm text-white bg-[#0f3554] border border-gray-500 rounded focus:outline-none"
          />
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white p-2 rounded text-sm">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-500 pt-4 text-center text-xs text-white-400">
        <p>© 2025 IIITBH Bhagalpur. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

