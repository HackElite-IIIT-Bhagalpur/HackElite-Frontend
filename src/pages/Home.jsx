//             src="https://images.wallpapersden.com/image/download/hacker-anonymous-evil_bGZuZWeUmZqaraWkpJRmbmdlrWZlbWU.jpg"

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const bgImages = [
  "https://tnp.iiitbh.ac.in/gallery/7.jfif",
  "https://iiitbh.ac.in/sites/default/files/2023-10/National%20Unity%20Day.jpg",
  "https://i.ytimg.com/vi/I4KhhLzSgZ4/maxresdefault.jpg",
  "https://iiitbh.ac.in/sites/default/files/events/enyugma%20banner_0.jpg",
];

export default function Home() {
  const navigate = useNavigate();
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setBgIndex((i) => (i + 1) % bgImages.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* ─── Background slideshow ─────────────────────── */}
      <div className="absolute inset-0">
        {bgImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`background-${i}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${i === bgIndex ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
      </div>

      {/* ─── Page content ─────────────────────────────── */}
      <section className="mt-[-65px] relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen gap-10 px-6 sm:px-10 lg:px-20">
        {/* left column */}
        <div className="lg:w-1/2 text-center lg:text-left text-white space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug drop-shadow-lg">
            Welcome to <br />
            <span className="text-green-400">Tech & Cyber Club</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-medium leading-relaxed lg:leading-loose tracking-wide max-w-xl mx-auto lg:mx-0">
            We are a group of passionate students exploring the world of technology, cybersecurity, and innovation.
            <br />
            Join us for{" "}
            <span className="text-cyan-400 font-semibold">
              workshops, hackathons, and tech events
            </span>{" "}
            to enhance your skills and connect with like-minded peers.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
            <button
              onClick={() => navigate("/join")}
              className="rounded-full bg-green-500 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-black shadow-md hover:bg-green-400 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              🚀 Join the Club
            </button>
            <button
              onClick={() => (window.location.href = "/eventssection")}
              className="rounded-full bg-cyan-600 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-cyan-500 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              📅 Upcoming Events
            </button>
          </div>
        </div>

        {/* right column */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src="https://images.wallpapersden.com/image/download/hacker-anonymous-evil_bGZuZWeUmZqaraWkpJRmbmdlrWZlbWU.jpg"
            alt="College tech club illustration"
            className="w-full max-w-md sm:max-w-lg rounded-xl shadow-2xl border border-green-500/40"
          />
        </div>
      </section>
    </main>

  );
}
