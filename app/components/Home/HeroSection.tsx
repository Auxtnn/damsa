"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const [mounted, setMounted] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with mature dark navy and gradient overlays */}
      <div className="absolute inset-0 bg-[#0A1128] z-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1128] via-[#1A1A40] to-[#0A1128] opacity-70"></div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(rgba(153, 102, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Animated accent gradients */}
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [0, 40, 0],
            opacity: [0.4, 0.6, 0.4],
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
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${Math.floor(
                Math.random() * 100 + 100
              )}, ${Math.floor(Math.random() * 50 + 50)}, ${Math.floor(
                Math.random() * 200 + 50
              )}, 0.06)`,
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              rotate: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 md:pt-20 max-w-6xl mx-auto px-6 lg:px-8 text-center"
        style={{ opacity, scale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Headline */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-purple-300 to-indigo-300">
              DAMSA
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-indigo-200/80">
            Digital Asset & Protocols
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          className="mt-8 max-w-2xl mx-auto text-lg text-indigo-100/70 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          DAMSA is building a network of machines using digital assets and
          protocols to contribute to an open web that empowers everyone. Join
          over 1 million people sharing their machine resources and earning
          digital assets through protocols.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-5 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <button className="group relative px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/40">
            <a
              href="/services"
              className="relative z-10 flex items-center justify-center"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </button>

          <button className="group relative px-8 py-4 overflow-hidden rounded-lg bg-transparent border border-indigo-500/30 text-indigo-200 font-medium backdrop-blur-sm hover:border-indigo-400/50 transition-all">
            <a
              href="/contact"
              className="relative z-10 flex items-center justify-center"
            >
              Get Started
              <Rocket className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </button>
        </motion.div>

        {/* Partners badge */}
        <motion.div
          className="mt-16 px-4 py-2 rounded-full bg-[#0A1128]/70 border border-indigo-500/20 backdrop-blur-sm inline-flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="text-xs font-medium text-indigo-300">Partners:</span>
          <div className="flex items-center gap-3">
            {["Gradient", "Teneo", "Natix", "Silencio", "Acurast"].map(
              (partner, i) => (
                <span
                  key={i}
                  className="text-xs font-medium text-indigo-100/70"
                >
                  {partner}
                </span>
              )
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <span className="text-xs text-indigo-300/70">Scroll to discover</span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-purple-500/50 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
