"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Rocket,
  Shield,
  Briefcase,
  ChevronRight,
  ArrowRight,
  DollarSign,
  BookOpen,
  LineChart,
  TrendingUp,
  Sparkles,
} from "lucide-react";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  index: any;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  delay,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative overflow-hidden rounded-xl backdrop-blur-lg border border-indigo-500/20 bg-gradient-to-br from-[#0A1128]/80 to-[#1A1A40]/80"
    >
      {/* Subtle gradient background that shifts on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* Animated border glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent)`,
            backgroundSize: "200% 100%",
            animation: "shine 3s infinite linear",
          }}
        ></div>
      </div>

      <div className="relative p-8 sm:p-10 flex flex-col h-full z-10">
        {/* Service icon with floating animation */}
        <div
          className="mb-6 w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 backdrop-blur-sm"
          style={{
            animation: `float ${
              4 + index * 0.5
            }s ease-in-out infinite alternate`,
          }}
        >
          <div className="text-purple-300">{icon}</div>
        </div>

        {/* Service title */}
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gradient-primary group-hover:text-shadow-glow transition-all duration-500">
          {title}
        </h3>

        {/* Service description */}
        <p className="text-indigo-100/70 mb-6 leading-relaxed">{description}</p>

        {/* Learn more link */}
        <div className="mt-auto">
          <a
            href="#"
            className="inline-flex items-center text-purple-300 hover:text-purple-200 text-sm font-medium transition-colors duration-300"
          >
            Learn more
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Decorative corner element */}
        <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-purple-500 to-transparent rounded-tl-full"></div>
        </div>
      </div>
    </motion.div>
  );
};
