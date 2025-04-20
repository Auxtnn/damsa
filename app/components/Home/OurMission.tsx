"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Globe, Award, Target, Compass, Sparkles } from "lucide-react";

export default function OurMission() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background gradient and effects */}
      <div className="absolute inset-0 bg-[#0A1128] z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#1A1A40]/90 to-[#0A1128] opacity-80"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>

        {/* Decorative circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-900/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-900/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="lg:w-11/12 mx-auto px-4 container relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Mission label */}
          <motion.div
            className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Purpose
          </motion.div>

          {/* Mission heading */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Our Mission</span>
          </h2>

          {/* Animated underline */}
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-10 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />

          {/* Mission statement */}
          <motion.p
            className="text-xl text-indigo-100/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            At DAMSA, we revolutionize digital asset access and blockchain
            technology, empowering global users to generate sustainable income
            safely.
          </motion.p>
        </motion.div>

        {/* Core values grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {[
            {
              icon: <Globe className="h-7 w-7" />,
              title: "Global Access",
              description:
                "Breaking down barriers to digital asset ownership across borders, making advanced technologies accessible to everyone regardless of location.",
              color: "from-indigo-600 to-cyan-400",
              delay: 0,
            },
            {
              icon: <Shield className="h-7 w-7" />,
              title: "Risk Management",
              description:
                "Navigating the volatile landscape of digital assets with strategic approaches that prioritize security and sustainable growth.",
              color: "from-purple-600 to-indigo-400",
              delay: 0.1,
            },
            {
              icon: <Sparkles className="h-7 w-7" />,
              title: "Educational Excellence",
              description:
                "Delivering transformative learning experiences that bridge knowledge gaps and empower individuals to make informed decisions in the digital economy.",
              color: "from-indigo-500 to-purple-500",
              delay: 0.2,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-gradient-to-br from-[#0A1128]/80 to-[#1A1A40]/80 border border-indigo-500/20 p-8 hover-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Card glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-indigo-900/10"></div>

              {/* Icon with gradient background */}
              <div className="relative mb-6 w-16 h-16 mx-auto rounded-lg flex items-center justify-center">
                <div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-r ${item.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>
                <div className="absolute inset-0 rounded-lg backdrop-blur-sm border border-indigo-500/30"></div>
                <div className="relative text-indigo-100">{item.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-center text-gradient-primary">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-indigo-100/70 text-center leading-relaxed">
                {item.description}
              </p>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rotate-45 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional mission content */}
        <motion.div
          className="mt-20 glass-panel p-8 sm:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gradient-secondary">
                Committed to Excellence
              </h3>
              <p className="text-indigo-100/80 mb-6 leading-relaxed">
                Our approach combines cutting-edge technology with deep
                expertise to create opportunities that were once only available
                to institutional investors. We believe in transparent
                operations, sustainable growth, and empowering communities
                through educational resources and accessible tools.
              </p>
              {/* <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { number: "100+", label: "Projects Launched" },
                  { number: "30K+", label: "Community Members" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-purple-300 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-indigo-200/60">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 blur-xl"></div>
              <div className="relative p-6 rounded-xl border border-indigo-500/20 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-4 text-indigo-100">
                  Core Principles
                </h4>
                {[
                  {
                    icon: <Target size={18} />,
                    text: "Making complex technologies accessible to all",
                  },
                  {
                    icon: <Compass size={18} />,
                    text: "Transparency in operations and educational resources",
                  },
                  {
                    icon: <Award size={18} />,
                    text: "Continuous innovation in digital asset solutions",
                  },
                ].map((principle, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 mb-4 last:mb-0"
                  >
                    <div className="text-purple-400 flex-shrink-0">
                      {principle.icon}
                    </div>
                    <p className="text-indigo-100/80">{principle.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
