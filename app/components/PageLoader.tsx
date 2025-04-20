"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (2.5 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Generate particles with different sizes and delays
  const generateParticles = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 3 + 2; // Random size between 2-5px
      const angle = Math.random() * Math.PI * 2; // Random angle
      const distance = 60 + Math.random() * 40; // Random distance from center
      const delay = Math.random() * 1; // Random delay
      const duration = 1.5 + Math.random() * 1; // Random duration

      // Indigo/Purple theme
      const colors = ["#4F46E5", "#7E22CE", "#4338CA", "#6D28D9"];
      const color = colors[i % colors.length];

      return { size, angle, distance, delay, duration, color };
    });
  };

  const particles = generateParticles(20);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 overflow-hidden opacity-5">
            <div className="absolute h-full w-full bg-[linear-gradient(to_right,#4F46E5_1px,transparent_1px),linear-gradient(to_bottom,#4F46E5_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1128] via-[#1A1A40] to-[#0A1128]"></div>

          {/* Main centered animation container */}
          <div className="flex flex-col items-center justify-center">
            {/* Center elements */}
            <div className="relative">
              {/* Rotating ring */}
              <motion.div
                className="absolute w-36 h-36 rounded-full border border-indigo-600/40"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  rotate: 360,
                  transition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                style={{
                  top: "50%",
                  left: "50%",
                  marginLeft: "-4.5rem",
                  marginTop: "-4.5rem",
                }}
              >
                {/* Dots on the ring */}
                <motion.div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 rounded-full bg-indigo-600" />
                <motion.div className="absolute bottom-0 left-1/2 w-2 h-2 -ml-1 rounded-full bg-purple-600" />
                <motion.div className="absolute left-0 top-1/2 w-2 h-2 -mt-1 rounded-full bg-indigo-600" />
                <motion.div className="absolute right-0 top-1/2 w-2 h-2 -mt-1 rounded-full bg-purple-600" />
              </motion.div>

              {/* Second rotating ring */}
              <motion.div
                className="absolute w-24 h-24 rounded-full border border-purple-600/40"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  rotate: -360,
                  transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                style={{
                  top: "50%",
                  left: "50%",
                  marginLeft: "-3rem",
                  marginTop: "-3rem",
                }}
              />

              {/* Center D/A logo */}
              <motion.div
                className="relative w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.5)]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.8, ease: "easeOut" },
                }}
              >
                <motion.div className="relative">
                  <span className="text-2xl font-bold text-white">D</span>
                </motion.div>
              </motion.div>

              {/* Particles */}
              {particles.map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    backgroundColor: particle.color,
                    top: "50%",
                    left: "50%",
                    marginLeft: "-1px",
                    marginTop: "-1px",
                  }}
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 0,
                  }}
                  animate={{
                    x: Math.cos(particle.angle) * particle.distance,
                    y: Math.sin(particle.angle) * particle.distance,
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    transition: {
                      duration: particle.duration,
                      delay: particle.delay,
                      repeat: Infinity,
                      repeatDelay: Math.random() * 0.5,
                      ease: "easeInOut",
                    },
                  }}
                />
              ))}
            </div>

            {/* Text animation */}
            <motion.div
              className="mt-12 text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.6 },
              }}
            >
              <h2 className="text-3xl font-bold tracking-wide">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  DAMSA
                </span>
              </h2>
              <motion.p
                className="mt-2 text-sm text-gray-300 tracking-widest"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.8, duration: 0.5 },
                }}
              >
                DIGITAL ASSET & PROTOCOL CONSULTING
              </motion.p>
            </motion.div>

            {/* Progress bar */}
            <div className="mt-8 w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-600 to-purple-600"
                initial={{ width: 0 }}
                animate={{
                  width: "100%",
                  transition: { duration: 2, ease: "easeInOut" },
                }}
              />
            </div>

            {/* Loading text */}
            <motion.p
              className="mt-3 text-indigo-400 text-xs font-medium tracking-widest"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.3, duration: 0.5 },
              }}
            >
              <motion.span
                animate={{
                  opacity: [1, 0.4, 1],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                LOADING
              </motion.span>
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
