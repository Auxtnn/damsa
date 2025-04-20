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
import { ServiceCard } from "./ServiceCard";

export default function Services() {
  const services = [
    {
      icon: <LineChart size={28} />,
      title: "Digital Asset Portfolio Development",
      description:
        "Leverage our data-driven strategies for maximizing returns while minimizing risk exposure. Our portfolio development combines cutting-edge analytics with deep market expertise to position your digital assets for optimal growth.",
      delay: 0.2,
    },
    {
      icon: <DollarSign size={28} />,
      title: "Merchant Services",
      description:
        "Seamlessly integrate digital asset merchant solutions into your business with our secure, zero fees, low rates & multi-chain support. We provide robust infrastructure, multi-chain support, and detailed analytics to transform how your business handles transactions.",
      delay: 0.4,
    },
    {
      icon: <BookOpen size={28} />,
      title: "Training & Consultation",
      description:
        "Navigate the complex digital asset landscape with confidence through our training and personalized advisory services. Our consultants provide tailored guidance on investment strategies, regulatory compliance, and technological integration.",
      delay: 0.6,
    },
  ];

  return (
    <section className="relative pt-10 pb-16  px-4  cyber-dots overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#0A1128] z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
      </div>

      {/* Animated background shapes */}
      <motion.div
        className="absolute top-1/3 -left-32 w-64 h-64 rounded-full bg-purple-900/10 blur-3xl"
        animate={{
          y: [0, 50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-indigo-900/10 blur-3xl"
        animate={{
          y: [0, -40, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="lg:w-11/12 px-4 container mx-auto relative z-10">
        <motion.div
          className="text-center mb-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section label */}
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider">
            Our Services
          </div>

          {/* Section title */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 relative inline-block">
            <span className="text-gradient-primary">Premium Services</span>
            <motion.div
              className="absolute -bottom-3 left-1/2 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
              initial={{ width: "0%", x: "-50%" }}
              whileInView={{ width: "50%", x: "-50%" }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </h2>

          {/* Section description */}
          <p className="text-lg text-indigo-100/70 max-w-3xl mx-auto leading-relaxed">
            From Consulting, Training & Portfolio development, we leverage
            digital asset & DLT (distributed ledger technology) protocols to
            empower anyone for greater good.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
              index={index}
            />
          ))}
        </div>

        {/* Feature highlights */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              icon: <Shield className="h-6 w-6" />,
              title: "Secure & Trusted",
              description:
                "End-to-end encryption and advanced security protocols",
            },
            {
              icon: <TrendingUp className="h-6 w-6" />,
              title: "Data-Driven",
              description: "AI-powered analytics for optimal performance",
            },
            {
              icon: <Sparkles className="h-6 w-6" />,
              title: "Cutting-Edge",
              description:
                "Always at the forefront of digital asset innovation",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-900/30 border border-indigo-500/20 backdrop-blur-sm flex items-center justify-center text-purple-300">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-indigo-100 mb-1">
                  {feature.title}
                </h4>
                <p className="text-indigo-200/60">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <a
            href="/services"
            className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/30"
          >
            <span className="relative z-10 flex items-center justify-center">
              Explore All Services
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
