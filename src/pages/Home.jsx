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
    const id = setInterval(() => setBgIndex((i) => (i + 1) % bgImages.length), 6000);
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
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === bgIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* ─── Page content ─────────────────────────────── */}
      <section className="relative z-10 flex flex-col md:flex-row items-center gap-10 px-6 py-16">
        {/* left column */}
        <div className="md:w-1/2 text-white space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            We Provide Best <br />
            <span className="text-pink-400">CyberSecurity</span> Solutions
          </h2>
          <p className="text-md md:text-lg text-gray-200 font-medium leading-relaxed md:leading-loose drop-shadow-md tracking-wide">
            Your data deserves more than hope —
            <span className="text-pink-400 font-semibold"> it needs protection.</span>
            <br className="hidden md:block" />
            We deliver{" "}
            <span className="text-yellow-300 font-semibold">24 × 7 shielded security</span>{" "}
            so you stay ahead of threats.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={() => navigate("/signup")}
              className="rounded-full bg-white px-8 py-3 text-sm md:text-base font-semibold text-blue-600 shadow-md hover:bg-yellow-400 hover:text-white transition-all duration-300 ease-in-out"
            >
              🚀 Get Started
            </button>
            <button
              onClick={() => window.location.href = "/#contact"}
              className="rounded-full bg-blue-600 px-8 py-3 text-sm md:text-base font-semibold text-white shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out"
            >
              📞 Contact Us
            </button>
          </div>
        </div>

        {/* right column */}
        <div className="md:w-1/2 w-full max-w-full">
          <img
            src="https://assets.delawarebusinesstimes.com/2023/05/IT-Cybersecurity-Team.jpg"
            alt="Cyber‑security illustration"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* ─── Map of Cyber Security Domains ───────────────────── */}
      {/* <section className="relative z-10 px-6 pb-10">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src="https://myturn.careers/blog/wp-content/uploads/2022/08/The-Map-of-Cyber-Security-Domains-2048x1177.jpg"
            alt="Cyber Security Domains Map"
            className="w-full h-auto object-contain"
          />
        </div>
      </section> */}
    </main>
  );
}



