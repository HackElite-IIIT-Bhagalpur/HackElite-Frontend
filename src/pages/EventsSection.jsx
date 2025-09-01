import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const events = [
  {
    title: "National Voters' Day",
    date: "25 JANUARY",
    description:
      "National Voters' Day (NVD) is being celebrated by IIIT Bhagalpur.",
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
    image:
      "https://iiitbh.ac.in/sites/default/files/events/Bhartiye_Bhasha_Utsav.jpg",
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
    image:
      "https://iiitbh.ac.in/sites/default/files/events/constitution_day.jpg",
    link: "https://iiitbh.ac.in/sites/default/files/events/constitution_day.jpg",
  },
];

const EventsSection = () => {
  const swiperRef = useRef(null);
  const [direction, setDirection] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative min-h-screen px-4 py-10">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-[4px] "
        style={{
          backgroundImage:
            "url('https://iiitbh.ac.in/sites/default/files/2020-05/Proposed%20IIIT%20Bhagalpur%20Building1.jpg')",
        }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10">
        <h1 className="text-3xl mb-6 font-bold text-green-400 text-center drop-shadow-md sm:mt-2">
          🎉 Events
        </h1>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          speed={1500}
          centeredSlides={true}
          loop={false}
          autoplay={{
            delay: 1500,
            reverseDirection: direction,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },      // mobile
            640: { slidesPerView: 1 },    // small devices
            768: { slidesPerView: 2 },    // tablets
            1024: { slidesPerView: 3 },   // desktops
          }}
          onReachEnd={(swiper) => {
            setDirection(true);
            swiper.autoplay.stop();
            swiper.params.autoplay.reverseDirection = true;
            swiper.autoplay.start();
          }}
          onReachBeginning={(swiper) => {
            setDirection(false);
            swiper.autoplay.stop();
            swiper.params.autoplay.reverseDirection = false;
            swiper.autoplay.start();
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="max-w-6xl mx-auto"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div
                className={`bg-black/90 border border-green-500 rounded-2xl shadow-xl flex flex-col transition-transform duration-500 ${
                  index === activeIndex ? "scale-100 z-10" : "scale-85 opacity-80"
                }`}
              >
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative flex items-center justify-center bg-black rounded-t-2xl">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-80 w-full object-contain rounded-t-2xl"
                    />
                  </div>
                  <div className="p-4 text-center flex-1">
                    <h2 className="text-sm font-semibold text-green-400">
                      {event.title} - 📅 {event.date}
                    </h2>
                    <p className="text-sm text-gray-300">{event.description}</p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EventsSection;
