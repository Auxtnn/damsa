"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A1128] z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128] via-[#1A1A40]/90 to-[#0A1128]/90 opacity-90"></div>

        {/* Digital noise overlay */}
        <div className="absolute inset-0 digital-noise opacity-5"></div>

        {/* Animated accent gradients */}
        <motion.div
          className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
          Ready to Transform Your Digital Asset Journey?
        </h2>

        <p className="text-xl text-indigo-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          Schedule a free consultation with our experts to discover how our
          services can help you achieve your digital asset goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="/contact"
            className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/30"
          >
            <span className="relative z-10 flex items-center justify-center">
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
