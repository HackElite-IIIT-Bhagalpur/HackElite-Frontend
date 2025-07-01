// src/components/EventsSection.jsx
import React, { useRef, useEffect } from "react";


const events = [
  {
    title: "National Voters' Day",
    date: "25 JANUARY",
    description: "National Voters' Day (NVD) is being celebrated by IIIT Bhagalpur.",
    image: "https://iiitbh.ac.in/sites/default/files/events/NVD_2024.jpg",
    link: "https://iiitbh.ac.in/node/576",
  },
  {
    title: "Viksit Bharat@2047",
    date: "10 DECEMBER",
    description: "Viksit Bharat @2047 celebration at IIIT Bhagalpur.",
    image: "https://iiitbh.ac.in/sites/default/files/events/20231210_101606.jpg", 
    link: "https://iiitbh.ac.in/node/573",
  },
  {
    title: "Bhartiye Bhasha Utsav",
    date: "11 DECEMBER",
    description: "Celebration of Bhartiye Bhasha Utsav at IIIT Bhagalpur.",
    image: "https://iiitbh.ac.in/sites/default/files/events/Bhartiye_Bhasha_Utsav.jpg",
    link: "https://iiitbh.ac.in/node/572",
  },
  {
    title: "Khadi Mahotsav",
    date: "2 OCTOBER",
    description: "Khadi Mahotsav from 2nd October to 31 October 2023.",
    image: "https://iiitbh.ac.in/sites/default/files/events/Khadi_Mahotsav.jpg",
    link: "https://iiitbh.ac.in/node/571",
  },
  {
    title: "Hands-on Workshop",
    date: "18 DECEMBER",
    description: "Five Days Workshop on VLSI & Nano-scale Design.",
    image: "https://iiitbh.ac.in/sites/default/files/events/workshop_INVT.jpg",
    link: "https://iiitbh.ac.in/node/570",
  },
  {
    title: "Constitution Day",
    date: "26 NOVEMBER",
    description: "Constitution Day celebrated at IIIT Bhagalpur.",
    image: "https://iiitbh.ac.in/sites/default/files/events/constitution_day.jpg",
    link: "https://iiitbh.ac.in/sites/default/files/events/constitution_day.jpg",
  },
  {
    title: "Ek Tareekh Ek Ghanta",
    date: "1 OCTOBER",
    description: "Swachhata Hi Sewa 2023 campaign.",
    image: "https://iiitbh.ac.in/sites/default/files/events/ss_ebsb.jpeg",
    link: "https://iiitbh.ac.in/node/521",
  },
  {
    title: "Partition Horrors Remembrance Day",
    date: "14 AUGUST",
    description: "Remembrance Day celebrated at IIIT Bhagalpur.",
    image: "https://iiitbh.ac.in/sites/default/files/events/Partition_Horrors_Remembrance_Day.jpg",
    link: "https://iiitbh.ac.in/node/520",
  },
];

const EventsSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => scroll("right"), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center px-4 py-10"
      style={{
        backgroundImage:
          "url('https://iiitbh.ac.in/sites/default/files/2020-05/Proposed%20IIIT%20Bhagalpur%20Building1.jpg')",
      }}
    >
      <h1 className="text-4xl font-bold text-white text-center mb-6">Events</h1>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-2 rounded-full z-10"
        >
          ⬅
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-2 rounded-full z-10"
        >
          ➡
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-5 scrollbar-hide p-2"
        >
          {events.map((event, index) => (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="min-w-[33.3333%] max-w-[33.3333%] bg-white rounded-xl shadow-md hover:scale-106 transition-transform duration-100"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-65 w-full object-cover rounded-t-xl"
                />
                <div className="absolute top-2 right-2 bg-yellow-400 text-black font-bold text-xs px-2 py-1 rounded">
                  {event.date}
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{event.title}</h2>
                <p className="text-sm text-gray-600 mt-1">
                  📍 Indian Institute of Information Technology Bhagalpur
                </p>
                <p className="mt-3 text-sm text-gray-700 bg-white border-l-4 border-purple-500 pl-4 pr-3 py-2 rounded-md shadow-sm hover:bg-purple-50 transition-colors duration-300">{event.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
