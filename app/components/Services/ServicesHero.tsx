"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[60vh] pt-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Background with animations */}
      <div className="absolute inset-0 bg-[#0A1128] z-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128] via-[#1A1A40] to-[#0A1128] opacity-80"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-20 grid-pattern"></div>

        {/* Animated accent gradients */}
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [0, 40, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl"
          animate={{
            x: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4  py-20 text-center">
        {/* Label */}
        <motion.div
          className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What We Offer
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-gradient-primary">Our Services</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-xl text-indigo-100/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Tailored digital asset solutions designed to empower your financial
          future. From digital assets & protocols to education, we provide the
          tools for your success.
        </motion.p>
      </div>
    </section>
  );
}
