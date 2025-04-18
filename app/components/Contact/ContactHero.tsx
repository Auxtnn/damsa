"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative pt-16 min-h-[50vh] flex flex-col items-center justify-center overflow-hidden">
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

        {/* Digital noise overlay */}
        <div className="absolute inset-0 digital-noise opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4  py-20 text-center">
        {/* Label */}
        <motion.div
          className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-gradient-primary">Contact</span>{" "}
          <span className="text-white">Us</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-xl text-indigo-100/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Have questions about our services or ready to start your digital asset
          journey? Our team is here to help you navigate the world of digital
          assets.
        </motion.p>

        {/* Contact cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            {
              icon: <Mail className="h-6 w-6" />,
              title: "Email Us",
              info: "info@damsa.network",
              link: "mailto:info@damsa.network",
              color: "from-indigo-600 to-blue-400",
            },
            {
              icon: <Phone className="h-6 w-6" />,
              title: "Call Us",
              info: "+1 (123) 456-7890",
              link: "tel:+11234567890",
              color: "from-purple-600 to-indigo-400",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              className="group relative p-6 rounded-xl backdrop-blur-md bg-gradient-to-br from-[#0A1128]/80 to-[#1A1A40]/80 border border-indigo-500/20 hover-glow transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon with gradient background */}
              <div className="mb-4 mx-auto w-14 h-14 rounded-lg relative">
                <div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-r ${item.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>
                <div className="absolute inset-0 rounded-lg backdrop-blur-sm border border-indigo-500/30 flex items-center justify-center">
                  <div className="text-indigo-100">{item.icon}</div>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2 text-indigo-100 group-hover:text-shadow-glow transition-all duration-500">
                {item.title}
              </h3>
              <p className="text-indigo-100/70">{item.info}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
