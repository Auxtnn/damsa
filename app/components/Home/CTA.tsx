"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ArrowUpRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background gradients and effects */}
      <div className="absolute inset-0 bg-[#0A1128] z-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128] via-[#1A1A40]/80 to-[#3A0CA3]/30 opacity-90"></div>

        {/* Animated floating gradients */}
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

        <motion.div
          className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>

        {/* Digital noise overlay for texture */}
        <div className="absolute inset-0 digital-noise opacity-5"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 ">
        <motion.div
          className="glass-panel rounded-2xl p-10 sm:p-16 overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Shimmering background effect */}
          <div className="absolute inset-0 shine-effect"></div>

          {/* Star burst decoration */}
          <div className="absolute -top-10 -right-10 w-40 h-40 opacity-10">
            <Sparkles className="w-full h-full stroke-purple-300" />
          </div>

          <div className="text-center relative z-10">
            {/* Heading with gradient text */}
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-gradient-primary">Start Your Digital</span>
              <br />
              <span className="text-gradient-secondary">
                Asset Journey Today
              </span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-xl text-indigo-100/80 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Join our network and become an agent for a decentralized future
              with digital assets one protocol at a time.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Primary CTA */}
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

              {/* Secondary CTA */}
              <a
                target="_blank"
                href="https://t.me/+AwRR3CM2LcU1ZjY0"
                className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg bg-transparent border border-indigo-500/30 text-indigo-200 font-medium backdrop-blur-sm hover:border-indigo-400/50 transition-all"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Join Our Community
                  <BookOpen className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            </motion.div>

            {/* Additional incentives */}
            <motion.div
              className="mt-12 pt-8 border-t border-indigo-500/20 grid grid-cols-1 sm:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Expert Guidance",
                  description:
                    "1-on-1 strategy sessions with digital asset analyst",
                },
                {
                  title: "Exclusive Access",
                  description: "Early access to digital asset opportunities",
                },
                {
                  title: "Community Support",
                  description: "Join a network of like-minded people",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-lg font-semibold mb-2 text-indigo-100">
                    {benefit.title}
                  </h3>
                  <p className="text-indigo-200/60 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Quick links below the main CTA */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-indigo-300/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="#"
            className="flex items-center hover:text-indigo-200 transition-colors"
          >
            <span>Terms of Service</span>
            <ArrowUpRight size={14} className="ml-1" />
          </a>
          <a
            href="#"
            className="flex items-center hover:text-indigo-200 transition-colors"
          >
            <span>Privacy Policy</span>
            <ArrowUpRight size={14} className="ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
