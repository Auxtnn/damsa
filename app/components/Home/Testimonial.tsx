"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  delay: number;
  index: any;
  image: any;
};

export const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  image,
  delay,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative h-full"
    >
      <div className="relative p-8 sm:p-10 rounded-xl overflow-hidden hover-glow h-full flex flex-col">
        {/* Card background with glass effect */}
        <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-br from-[#0A1128]/80 to-[#1A1A40]/80 border border-indigo-500/20 rounded-xl"></div>

        {/* Animated gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl"></div>

        {/* Quote icon */}
        <div className="absolute top-6 right-6 text-indigo-500/20 z-0">
          <Quote size={64} />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col flex-grow">
          <div className="flex-grow">
            <p className="text-indigo-100/90 mb-6 leading-relaxed italic text-lg overflow-y-auto">
              "{quote}"
            </p>
          </div>

          <div className="flex items-center mt-auto pt-4">
            {/* Profile image/avatar */}
            <div className="mr-4 w-12 h-12 rounded-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-70"></div>
              {image ? (
                <img
                  src={image}
                  alt={author}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white font-medium">
                  {author.charAt(0)}
                </div>
              )}
            </div>

            {/* Author info */}
            <div>
              <h4 className="font-semibold text-indigo-100">{author}</h4>
              <p className="text-sm text-indigo-300/60">{role}</p>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"
          initial={{ width: "0%" }}
          whileInView={{ width: "50%" }}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};
