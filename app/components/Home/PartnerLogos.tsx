"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const PartnerLogos = () => {
  // Partner projects mentioned in the original brief
  const partners = [
    { name: "Gradient", logo: "/images/logos/gradient.png" },
    { name: "Teneo", logo: "/images/logos/teneo.png" },
    { name: "Natix", logo: "/images/logos/natix.jpg" },
    { name: "Silencio", logo: "/images/logos/silencio.jpg" },
    { name: "Grass", logo: "/images/logos/grass.png" },
    { name: "Denet", logo: "/images/logos/denet.png" },
    { name: "Acurast", logo: "/images/logos/acurast.jpg" },
    { name: "Nodle", logo: "/images/logos/nodle.png" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
      {partners.map((partner, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="relative overflow-hidden rounded-xl backdrop-blur-sm bg-gradient-to-br from-[#0A1128]/60 to-[#1A1A40]/60 border border-indigo-500/20 p-6 h-full hover-glow transition-all duration-500">
            {/* Animated border effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent)`,
                  backgroundSize: "200% 100%",
                  animation: "shine 3s infinite linear",
                }}
              ></div>
            </div>

            {/* Logo placeholder - in a real implementation, use the actual logo */}
            <div className="relative flex flex-col items-center justify-center h-full z-10">
              {/* This would normally display the actual logo */}
              <div className="w-16 h-16 mb-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20 flex items-center justify-center">
                <img
                  src={partner.logo}
                  className="text-gradient-primary font-bold text-xl"
                />
              </div>
              <h3 className="text-lg font-medium text-indigo-100 text-center">
                {partner.name}
              </h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
