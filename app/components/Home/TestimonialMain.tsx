"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Testimonial } from "./Testimonial";

export default function TestimonialMain() {
  const testimonials = [
    {
      quote:
        "DAMSA's portfolio management strategies have consistently delivered impressive returns while effectively mitigating risks. Their expertise in the digital asset space is unmatched.",
      author: "Alex Chen",
      role: "Crypto Entrepreneur",
      image: "/images/team.jpg",
      delay: 0.2,
    },
    {
      quote:
        "The educational resources provided by DAMSA gave me the confidence to navigate the complex world of DLT. Their consultants are patient, knowledgeable and genuinely care about your success.",
      author: "Sarah Johnson",
      role: "Individual Investor",
      image: "/images/team.jpg",
      delay: 0.4,
    },
  ];

  return (
    <section className="relative py-10 overflow-hidden">
      {/* Background with subtle animations */}
      <div className="absolute inset-0 bg-[#0A1128] z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>

        {/* Animated background shapes */}
        <motion.div
          className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-indigo-900/10 blur-3xl"
          animate={{
            x: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 -left-32 w-64 h-64 rounded-full bg-purple-900/10 blur-3xl"
          animate={{
            x: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 cyber-dots opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Testimonials label */}
          <motion.div
            className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Client Success Stories
          </motion.div>

          {/* Section heading */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Testimonials</span>
          </h2>

          {/* Animated underline */}
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-10 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />

          {/* Section description */}
          <motion.p
            className="text-xl text-indigo-100/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Hear directly from our clients who have transformed their digital
            asset journey with DAMSA's expert guidance and solutions.
          </motion.p>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              image={testimonial.image}
              delay={testimonial.delay}
              index={index}
            />
          ))}
        </div>

        {/* Additional testimonial featured quote */}
        <motion.div
          className="mt-16 relative overflow-hidden rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-xl"></div>

          <div className="relative md:p-10 p-6 sm:p-6 text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-gradient-secondary max-w-3xl mx-auto leading-relaxed">
              "DAMSA's approach to digital asset management has completely
              revolutionized how I view and interact with blockchain
              technologies."
            </h3>

            <div className="flex items-center justify-center mt-8">
              <div className="mr-3 w-14 h-14 rounded-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-70"></div>
                <div className="w-full h-full flex items-center justify-center text-white font-medium text-xl">
                  M
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-indigo-100 text-lg">
                  Michael Roberts
                </h4>
                <p className="text-indigo-300/60">Institutional Investor</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { number: "98%", label: "Client Satisfaction" },
            { number: "3.2M+", label: "Assets Managed" },
            { number: "500+", label: "Happy Clients" },
            { number: "25+", label: "Countries Served" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl backdrop-blur-sm bg-indigo-900/10 border border-indigo-500/20"
            >
              <div className="text-3xl font-bold text-gradient-primary mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-indigo-300/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
