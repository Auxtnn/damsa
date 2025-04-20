"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Smartphone, Wifi, Zap } from "lucide-react";

export default function PieConcepts() {
  // Data for PIE concept cards
  const pieElements = [
    {
      letter: "P",
      title: "PC or Phone",
      description:
        "Basic device to access digital asset platforms and manage your portfolio",
      icon: <Smartphone className="w-8 h-8" />,
      gradientFrom: "from-indigo-500",
      gradientTo: "to-blue-500",
      delay: 0.2,
    },
    {
      letter: "I",
      title: "Internet",
      description:
        "Connection to the global network of digital asset opportunities and communities",
      icon: <Wifi className="w-8 h-8" />,
      gradientFrom: "from-purple-500",
      gradientTo: "to-indigo-500",
      delay: 0.4,
    },
    {
      letter: "E",
      title: "Energy",
      description:
        "Commitment of time or capital energy in building your digital future",
      icon: <Zap className="w-8 h-8" />,
      gradientFrom: "from-fuchsia-500",
      gradientTo: "to-purple-500",
      delay: 0.6,
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background with gradients and effects */}
      <div className="absolute inset-0 bg-[#0A1128] z-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#1A1A40]/90 to-[#0A1128] opacity-90"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>

        {/* Animated shapes */}
        <motion.div
          className="absolute -left-40 top-1/3 w-80 h-80 rounded-full bg-indigo-900/10 blur-3xl"
          animate={{
            x: [0, 40, 0],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute -right-40 bottom-1/3 w-96 h-96 rounded-full bg-purple-900/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="lg:w-11/12 mx-auto px-4  relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Label */}
          <motion.div
            className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Simple Requirements
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            The <span className="text-gradient-primary">PIE</span> Concept
          </h2>

          {/* Animated underline */}
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-10 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />

          {/* Description */}
          <motion.p
            className="text-xl text-indigo-100/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            All you need to begin your journey into digital assets is three
            simple elements:
          </motion.p>
        </motion.div>

        {/* PIE cards container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pieElements.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: item.delay }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Card container with glass effect */}
              <div className="relative h-full overflow-hidden rounded-xl backdrop-blur-md bg-gradient-to-br from-[#0A1128]/80 to-[#1A1A40]/80 border border-indigo-500/20 p-8 sm:p-10 hover-glow transition-all duration-500">
                {/* Gradient background that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Letter circle */}
                <div className="relative mb-8 mx-auto">
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} flex items-center justify-center animate-pulse-glow`}
                  >
                    <div className="absolute inset-1 rounded-full backdrop-blur-sm bg-[#0A1128]/40 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">
                        {item.letter}
                      </span>
                    </div>
                  </div>

                  {/* Floating icon */}
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 backdrop-blur-sm flex items-center justify-center text-indigo-100"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gradient-primary group-hover:text-shadow-glow transition-all duration-500">
                    {item.title}
                  </h3>
                  <p className="text-indigo-100/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Decorative corner element */}
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                  <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-purple-500 to-transparent rounded-tl-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional explanation section */}
        <motion.div
          className="mt-20 glass-panel p-8 sm:p-10 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gradient-secondary">
                Simplicity is Key
              </h3>
              <p className="text-indigo-100/80 mb-6 leading-relaxed">
                We believe that digital asset shouldn't be complex. Our PIE
                concept breaks down the essentials, making it clear that anyone
                with basic resources can participate in the digital economy.
              </p>
              <p className="text-indigo-100/80 leading-relaxed">
                Whether you're looking to generate passive income or actively
                use digital assets, these three elements are all you need to get
                started on your journey.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 blur-xl"></div>
              <div className="relative p-6 rounded-xl border border-indigo-500/20 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-4 text-indigo-100">
                  How We Help
                </h4>
                <ul className="space-y-4">
                  {[
                    "We provide the protocols and strategies while you provide the PIE",
                    "We curate media resources to help you learn and earn while mastering digital assets",
                    "Our educational resources help maximize your results with minimal input",
                    "Start small and scale up as you gain confidence in your digital asset journey",
                  ].map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-purple-300 mr-3 mt-0.5">
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                      <p className="text-indigo-100/80">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
