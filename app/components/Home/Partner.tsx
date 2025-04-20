"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PartnerLogos } from "./PartnerLogos";

export default function Partners() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative pt-10 pb-10  overflow-hidden">
      {/* Background with subtle animations */}
      <div className="absolute inset-0 bg-[#0A1128] z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#1A1A40]/80 to-[#0A1128] opacity-80"></div>

        {/* Animated background shapes */}
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple-900/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-indigo-900/10 blur-3xl"
          animate={{
            x: [0, -30, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Digital noise overlay */}
        <div className="absolute inset-0 digital-noise opacity-30"></div>
      </div>

      <div className="lg:w-11/12 mx-auto px-4 container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Partners label */}
          <motion.div
            className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Strategic Alliances
          </motion.div>

          {/* Section heading */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Partner Protocols</span>
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
            Collaborating with industry leaders for cutting-edge digital asset
            solutions.
          </motion.p>
        </motion.div>

        <PartnerLogos />

        {/* Partnership benefits */}
        <motion.div
          className="mt-20 glass-panel p-8 sm:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovative Solutions",
                description:
                  "Access cutting-edge protocols through our strategic partnerships.",
              },
              {
                title: "Ecosystem Integration",
                description:
                  "Seamless interoperability and multi-chain integration.",
              },
              {
                title: "Exclusive Opportunities",
                description: "Early access to new features and offerings.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute top-0 left-0 w-10 h-10 -mt-2 -ml-2 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-md"></div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-100 relative">
                  {benefit.title}
                </h3>
                <p className="text-indigo-200/60">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA for partnerships */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-0.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500">
            <a
              href="/contact"
              className="block px-8 py-3 rounded-md bg-[#0A1128] text-indigo-100 font-medium hover:bg-[#0A1128]/80 transition-colors"
            >
              Become a Partner
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
