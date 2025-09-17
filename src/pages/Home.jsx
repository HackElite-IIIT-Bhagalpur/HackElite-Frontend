"use client";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

// Animation variants for stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const bgImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DENM257pL1PjrWkt6ssOXsBmcg_RJJhN5Q&s",
  "https://iiitbh.ac.in/sites/default/files/2023-10/National%20Unity%20Day.jpg",
  "https://i.ytimg.com/vi/I4KhhLzSgZ4/maxresdefault.jpg",
  "https://iiitbh.ac.in/sites/default/files/events/enyugma%20banner_0.jpg",
  "https://pbs.twimg.com/media/Fj_q3j2VUAASxBI.jpg",
  "https://i.ytimg.com/vi/zcOGj4r8ME0/sddefault.jpg",
  "https://i.ytimg.com/vi/AW1XPYdzBio/sddefault.jpg"
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

export default function Home() {
  const navigate = useNavigate();
  const [isHoveredJoin, setIsHoveredJoin] = useState(false);
  const [isHoveredEvents, setIsHoveredEvents] = useState(false);

  



  return (
    <main className="relative min-h-screen overflow-hidden font-mono bg-gray-900">
      {/* ─── Pure CSS Cyber Background ─────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 255, 100, 0.1) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(0, 255, 100, 0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          {/* Animated grid lines */}
          <div className="absolute inset-0 opacity-30">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-px w-full bg-gradient-to-r from-transparent via-green-500/40 to-transparent"
                style={{ top: `${i * 5}%` }}
              />
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent"
                style={{ left: `${i * 5}%` }}
              />
            ))}
          </div>

          {/* Animated circles */}
          {Array.from({ length: 15 }).map((_, i) => {
            const size = Math.random() * 200 + 50;
            return (
              <motion.div
                key={i}
                className="absolute rounded-full border border-green-500/10"
                style={{
                  width: size,
                  height: size,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                }}
              />
            );
          })}

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-green-500"
                initial={{
                  x: Math.random() * 100 + 'vw',
                  y: Math.random() * 100 + 'vh',
                }}
                animate={{
                  x: [null, Math.random() * 100 + 'vw'],
                  y: [null, Math.random() * 100 + 'vh'],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ─── Binary rain effect ────────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 text-xs font-bold tracking-widest"
            style={{ left: `${i * 5}%` }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: '100vh', opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {Math.random().toString(2).substring(2, 12)}
          </motion.div>
        ))}
      </div>

      {/* ─── Page content ──────────────────────────────────────────────────── */}
      <section className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen gap-10 px-6 sm:px-10 lg:px-20">
        {/* left column with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-1/2 text-center lg:text-left text-white space-y-6"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-snug"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Welcome to
            </span>
            <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
              animate={{
                textShadow: [
                  "0 0 5px rgba(34, 211, 238, 0.5)",
                  "0 0 20px rgba(34, 211, 238, 0.8)",
                  "0 0 5px rgba(34, 211, 238, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Tech & Cyber Club
            </motion.span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-300 font-medium leading-relaxed lg:leading-loose tracking-wide max-w-xl mx-auto lg:mx-0"
          >
            We are a{" "}
            <span className="text-green-400 font-semibold underline decoration-emerald-500/50 underline-offset-4">
              cyber-security focused
            </span>{" "}
            community exploring{" "}
            <span className="text-purple-400 font-semibold underline decoration-purple-500/50 underline-offset-4">
              ethical hacking
            </span>
            ,{" "}
            <span className="text-cyan-400 font-semibold underline decoration-cyan-500/50 underline-offset-4">
              innovation
            </span>
            , and{" "}
            <span className="text-pink-400 font-semibold underline decoration-pink-500/50 underline-offset-4">
              technology
            </span>
            .
            <br />
            Join us for{" "}
            <span className="text-green-300 font-bold">
              workshops, hackathons & tech events
            </span>{" "}
            to level up your skills.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHoveredJoin(true)}
              onHoverEnd={() => setIsHoveredJoin(false)}
              onClick={() => navigate("/join")}
              className="relative rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 text-base font-bold text-black shadow-lg overflow-hidden group"
            >
              <span className="relative z-10">🚀 Join the Club</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500"
                initial={false}
                animate={{ opacity: isHoveredJoin ? 1 : 0 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700"
                initial={{ x: '-100%' }}
                animate={{ x: isHoveredJoin ? '0%' : '-100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHoveredEvents(true)}
              onHoverEnd={() => setIsHoveredEvents(false)}
              onClick={() => (window.location.href = "/eventssection")}
              className="relative rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 px-8 py-4 text-base font-bold text-white shadow-lg overflow-hidden group"
            >
              <span className="relative z-10">📅 Upcoming Events</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"
                initial={false}
                animate={{ opacity: isHoveredEvents ? 1 : 0 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-blue-800"
                initial={{ x: '-100%' }}
                animate={{ x: isHoveredEvents ? '0%' : '-100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* right column with cyber illustration */}
        <motion.div
          initial={{ x: 100, opacity: 0, rotate: 5 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="lg:w-1/2 w-full flex justify-center relative"
        >
          <div className="relative">
            {/* Pure CSS Cyber Illustration */}
            <div className="w-full max-w-md sm:max-w-lg h-80 relative z-10 flex items-center justify-center">
              {/* Main circle */}
              <div className="absolute w-56 h-56 rounded-full border-4 border-green-500/60 flex items-center justify-center">
                <motion.div
                  className="absolute w-full h-full rounded-full border-2 border-cyan-500/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner elements */}
                <div className="absolute w-40 h-40 rounded-full border-2 border-green-500/40">
                  <div className="absolute w-24 h-24 rounded-full border-2 border-cyan-500/30"></div>
                </div>

                {/* Central hexagon */}
                <div className="absolute w-16 h-16 bg-green-900/50 rotate-45 border border-green-500/50 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute w-8 h-8 rounded-full bg-cyan-900/50 border border-cyan-500/50 flex items-center justify-center -top-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                </motion.div>

                <motion.div
                  className="absolute w-8 h-8 rounded-full bg-green-900/50 border border-green-500/50 flex items-center justify-center -right-4"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </motion.div>

                <motion.div
                  className="absolute w-8 h-8 rounded-full bg-purple-900/50 border border-purple-500/50 flex items-center justify-center -bottom-4"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                >
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                </motion.div>

                <motion.div
                  className="absolute w-8 h-8 rounded-full bg-blue-900/50 border border-blue-500/50 flex items-center justify-center -left-4"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 3 }}
                >
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                </motion.div>
              </div>
            </div>

            {/* Glow effect */}
            <motion.div
              className="absolute -inset-4 bg-green-500/20 rounded-2xl blur-xl z-0"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ─── Scanner line effect ───────────────────────────────────────────── */}
      <motion.div
        className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent z-20"
        style={{ top: '30%' }}
        animate={{ y: ['0vh', '100vh', '0vh'] }}
        transition={{ duration: 8, repeat: Infinity }}
      />



      <div className="w-full bg-black py-12 flex justify-center">
        <div className="flex gap-8 flex-wrap justify-center">
          {bgImages.map((src, i) => (
            <motion.div
              key={i}
              className="relative w-72 h-44 flex-shrink-0 rounded-xl overflow-hidden border border-green-500/40 shadow-lg cursor-pointer"
              whileHover={{
                scale: 1.15,
                boxShadow: "0px 0px 30px rgba(34,197,94,0.8)", // neon green glow
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <img
                src={src}
                alt={`card-${i}`}
                className="w-full h-full object-cover"
              />
              {/* Glow overlay on hover */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-green-400 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}