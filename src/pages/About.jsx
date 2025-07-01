import React, { useEffect, useRef } from "react";

const About = () => {
  const images = [
    {
      src: "https://iiitbh.ac.in/sites/default/files/styles/slider/public/2019-12/Guest%20House_0.jpg?itok=8jmIno_R",
      caption: "Guest House at IIIT Bhagalpur"
    },
    {
      src: "https://iiitbh.ac.in/sites/default/files/styles/slider/public/2019-12/VLSI%20Lab_0.jpg?itok=1haTxZpZ",
      caption: "Advanced VLSI Laboratory"
    },
    {
      src: "https://iiitbh.ac.in/sites/default/files/styles/slider/public/2023-11/Newly%20Constructed%20Boys%20Hostel.jpeg?itok=aeJUkZZt",
      caption: "Boys Hostel Block"
    },
    {
      src: "https://iiitbh.ac.in/sites/default/files/styles/slider/public/2023-11/CSELab.png?itok=aaA5pRzp",
      caption: "Modern CSE Lab"
    },
    {
      src: "https://iiitbh.ac.in/sites/default/files/styles/slider/public/2019-12/Computer%20Centre_0.jpg?itok=YMYfOiPK",
      caption: "Central Computer Center"
    },
    {
      src: "https://iiitbh.ac.in/sites/default/files/styles/slider/public/2019-12/ECE%20Lab_0.JPG?itok=cZHNrylI",
      caption: "ECE Department Lab"
    },
    {
      src: "https://iiitbh.ac.in/sites/default/files/styles/slider/public/2019-12/Library_0.JPG?itok=LBpbdIhk",
      caption: "IIIT Bhagalpur Library"
    },
    {
      src: "https://iiitbh.ac.in/sites/default/files/styles/slider/public/2023-11/IMG_9109.jpg?itok=VkXEN7lk",
      caption: "Director with Students"
    }
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 py-10 px-6 md:px-16">
      {/* Title and Director Info */}
      <div className="flex flex-col md:flex-row gap-10 mb-12 items-start">
        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            About <span className="text-yellow-500">IIIT Bhagalpur</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mb-4"></div>
          <p className="text-base md:text-lg text-justify leading-relaxed">
            Indian Institute of Information Technology, Bhagalpur (IIIT Bhagalpur) is
            one of the IIITs set up by MHRD, Govt of India in PUBLIC-PRIVATE
            PARTNERSHIP(PPP) mode. It started functioning from the academic year 2017.
            <br /><br />
            Bhagalpur is a city of historical importance on the southern banks of the
            river Ganges in the Indian state of Bihar. It is the 3rd largest city of
            Bihar and also the headquarters of Bhagalpur district and Bhagalpur
            division. Known as Silk City, it is a major educational, commercial, and
            political centre...
          </p>
          <button className="mt-6 inline-block px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-bold rounded hover:bg-yellow-500 hover:text-white transition">
            READ MORE
          </button>
        </div>

        {/* Director Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://iiitbh.ac.in/sites/default/files/inline-images/PKJ_Desk_0.jpg"
            alt="Director IIIT Bhagalpur"
            className="w-96 h-auto rounded-lg shadow-lg hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      {/* Mentors Section */}
      <div className="bg-gradient-to-br from-yellow-50 to-blue-50 p-6 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Meet the <span className="text-orange-500">Lead</span> & <span className="text-green-600">Mentors</span>
        </h3>


   {/* Leads Section */}
<div className="mt-10">
  <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Leads</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Lead 1 - Left */}
    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500 hover:scale-105 transition duration-300">
      
      <h4 className="text-2xl font-bold text-blue-800">Aditya Kumar</h4>
      <p className="text-gray-700 mt-2">Championed ethical hacking and built a strong community culture.</p>
      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p><strong>Email:</strong> aditya.kumar@iiitbh.ac.in</p>
        <p><strong>Mobile:</strong> +91 91234 65569</p>
        <p><strong>Branch:</strong> CSE</p>
        <p><strong>Year:</strong> 2022-26</p>
      </div>
    </div>

    {/* Lead 2 - Middle */}
    <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl shadow-md p-6 border-l-4 border-indigo-500 hover:scale-105 transition duration-300">
      
      <h4 className="text-2xl font-bold text-indigo-800">Sohail</h4>
      <p className="text-gray-700 mt-2">Driving innovation and leadership in cybersecurity.</p>
      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p><strong>Email:</strong> sohail@iiitbh.ac.in</p>
        <p><strong>Mobile:</strong> +91 95762 58797</p>
        <p><strong>Branch:</strong> CSE</p>
        <p><strong>Year:</strong> 2021-25</p>
      </div>
    </div>

    {/* Lead 3 - Right */}
    <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-md p-6 border-l-4 border-purple-500 hover:scale-105 transition duration-300">
    
      <h4 className="text-2xl font-bold text-purple-800">Anurag Tiwari</h4>
      <p className="text-gray-700 mt-2">Laid the foundation for innovation and collaboration in the club.</p>
      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p><strong>Email:</strong> anurag.tiwari@iiitbh.ac.in</p>
        <p><strong>Mobile:</strong> +91 87188 26284</p>
        <p><strong>Branch:</strong> CSE</p>
        <p><strong>Year:</strong> 2021</p>
      </div>
    </div>
  </div>
</div>



        {/* Mentors */}
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6 mt-6">Mentors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {/* Mentor 1 */}

          <div className="bg-white shadow-md rounded-xl p-5 hover:scale-105 transition duration-300 border-t-4 border-green-400">
            <h4 className="text-lg font-bold text-green-700 mb-1">Ayush Kumar Tiwari</h4>
            <p className="text-gray-600 text-sm mb-2">Expert in OSINT & Cyber Threat Analysis</p>
            <div className="text-xs text-gray-700 space-y-1">
              <p><strong>Email:</strong> ayushtiwari@gmail.com</p>
              <p><strong>Mobile:</strong> +91 78568 12199</p>
              <p><strong>Branch:</strong> CSE</p>
              <p><strong>Year:</strong> 2023-27</p>
            </div>
          </div>

          {/* Mentor 2 */}
          <div className="bg-white shadow-md rounded-xl p-5 hover:scale-105 transition duration-300 border-t-4 border-green-400">
            <h4 className="text-lg font-bold text-green-700 mb-1">Raushan Kumar</h4>
            <p className="text-gray-600 text-sm mb-2">Skilled in Bug Bounties & Web Exploitation</p>
            <div className="text-xs text-gray-700 space-y-1">
              <p><strong>Email:</strong> raushan.kumar@iiitbh.ac.in</p>
              <p><strong>Mobile:</strong> +91 88095 69611</p>
              <p><strong>Branch:</strong> CSE</p>
              <p><strong>Year:</strong> 2023-27</p>
            </div>
          </div>

          {/* Mentor 3 */}
          <div className="bg-white shadow-md rounded-xl p-5 hover:scale-105 transition duration-300 border-t-4 border-green-400">
            <h4 className="text-lg font-bold text-green-700 mb-1">Utkarsh Kumar</h4>
            <p className="text-gray-600 text-sm mb-2">CTF Strategist & Linux Security Expert</p>
            <div className="text-xs text-gray-700 space-y-1">
              <p><strong>Email:</strong> utkarsh.kumar@iiitbh.ac.in</p>
              <p><strong>Mobile:</strong> +91 78273 65765</p>
              <p><strong>Branch:</strong> CSE</p>
              <p><strong>Year:</strong> 2023-27</p>
            </div>
          </div>
        </div>

      
      </div>

      <h3 className="text-2xl font-semibold text-blue-700 mb-4 mt-10">Lead & Mentor Vision</h3>
        
      <div className="space-y-4 text-sm md:text-base text-gray-800 leading-relaxed">
        <div className="border-l-4 border-orange-400 pl-4">
          <strong className="text-orange-500">1. Visionary & Impact-Driven:</strong><br />
          As the Lead and Mentor of the Cyber Security Club, my core focus is to empower young minds
          with real-world cybersecurity knowledge, foster critical thinking, and build a strong ethical foundation.
        </div>

        <div className="border-l-4 border-pink-500 pl-4">
          <strong className="text-pink-500">2. Inspirational & Student-Centered:</strong><br />
          We believe leadership is not about giving instructions—it's about creating opportunities.
          I’m committed to helping students explore, experiment, and grow in cybersecurity.
        </div>

        <div className="border-l-4 border-indigo-500 pl-4">
          <strong className="text-indigo-600">3. Technical & Role-Oriented:</strong><br />
          We guide members through ethical hacking, Linux security, exploit analysis, and threat intelligence—
          while promoting a mindset of continuous learning.
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <strong className="text-green-600">4. Community & Culture Builder:</strong><br />
          Our goal is to build not just a club, but a resilient and innovative community that inspires responsible hackers.
        </div>

        <div className="border-l-4 border-yellow-500 pl-4">
          <strong className="text-yellow-600">5. Tagline:</strong><br />
          Leading with purpose. Mentoring with passion. Building tomorrow’s defenders—today.
        </div>

        <div className="border-l-4 border-purple-500 pl-4">
          <strong className="text-purple-600">Personal Note:</strong><br />
          At IIIT Bhagalpur, We are honored to lead a passionate team of learners. We strive to ignite curiosity and
          transform complex challenges into growth opportunities.
        </div> 
      </div>
    <div className="mt-20 mb-10 flex justify-center">
  <a
    href="./public/CySec_XSS.pdf" 
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
  >
    <svg
      className="w-5 h-5 mr-2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
    Read More.
  </a>
</div>


      {/* Image Gallery */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Campus Moments</h3>
        <div className="flex overflow-x-auto space-x-6 pb-4 scroll-smooth" ref={scrollRef}>
          {images.map((img, idx) => (
            <a
              href={img.src}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              className="flex-shrink-0 w-80 rounded-lg shadow-md hover:scale-105 transition duration-300 bg-white"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-2 text-sm text-center text-gray-700 font-medium">
                {img.caption}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
