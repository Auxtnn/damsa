"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Shield,
  Award,
  ArrowRight,
  CheckCircle,
  LineChart,
  Zap,
  Globe,
  BookOpen,
  Lightbulb,
  Heart,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#0A1128]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] pt-20 flex flex-col items-center justify-center overflow-hidden">
        {/* Background with animations */}
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128] via-[#1A1A40] to-[#0A1128] opacity-80"></div>
          <div className="absolute inset-0 opacity-20 grid-pattern"></div>

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
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Story
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl space-x-3 lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient-primary">About</span>

            <span className="text-white">DAMSA</span>
          </motion.h1>

          <motion.p
            className="text-xl text-indigo-100/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Digital Asset & Protocols Agency revolutionizing how the world
            interacts with digital assets through curated media and DLT
            solutions.
          </motion.p>
        </div>
      </section>

      {/* Our Vision & Mission Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
          <div className="absolute inset-0 cyber-dots opacity-10"></div>
        </div>

        <div className="lg:w-11/12 container  mx-auto px-4  relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 backdrop-blur-sm mr-4">
                  <Lightbulb className="h-6 w-6 text-purple-300" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gradient-primary">
                  Our Vision
                </h2>
              </div>

              <p className="text-indigo-100/80 mb-6 leading-relaxed">
                To create a world where digital assets are accessible to
                everyone, empowering individuals and organizations to
                participate in the decentralized economy with confidence and
                security.
              </p>

              <p className="text-indigo-100/80 leading-relaxed">
                We envision a future where the benefits of blockchain technology
                and digital assets are seamlessly integrated into daily life,
                creating new opportunities for wealth creation, financial
                inclusion, and technological innovation.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 backdrop-blur-sm mr-4">
                  <Target className="h-6 w-6 text-purple-300" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gradient-primary">
                  Our Mission
                </h2>
              </div>

              <p className="text-indigo-100/80 mb-6 leading-relaxed">
                To democratize access to digital assets by providing expert
                guidance, innovative solutions, and quality educational
                resources that enable anyone to navigate this complex landscape
                successfully.
              </p>

              <p className="text-indigo-100/80 leading-relaxed">
                We are committed to breaking down barriers to entry, exposing
                scams, and creating transparent pathways for both active and
                passive income generation through digital assets and protocols,
                while contributing to charitable causes that create positive
                social impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
        </div>

        <div className="lg:w-11/12 container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
              Our Story
            </h2>
            <p className="text-indigo-100/80 max-w-3xl mx-auto">
              The journey that led to the creation of DAMSA and our mission to
              empower through digital assets.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-500/20 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-16">
              {[
                {
                  year: "2018",
                  title: "The Beginning",
                  description:
                    "Our founder's journey began during the crypto winter, identifying the need for better education and genuine guidance in the digital asset space. While many left the market, we saw an opportunity to build something meaningful.",
                },
                {
                  year: "2020",
                  title: "First Community",
                  description:
                    "DAMSA started as a small community of digital asset enthusiasts sharing knowledge and helping each other navigate the complexities of blockchain technology and investment strategies.",
                },
                {
                  year: "2021",
                  title: "Service Expansion",
                  description:
                    "As our community grew, we formalized our offerings into structured services, focusing on portfolio management, education, and consulting to help more people benefit from digital assets.",
                },
                {
                  year: "2022",
                  title: "Tech Innovation",
                  description:
                    "We expanded into custom DLT solutions, helping businesses leverage blockchain technology for improved efficiency, transparency, and new business models.",
                },
                {
                  year: "2023",
                  title: "Global Reach",
                  description:
                    "DAMSA's influence expanded globally, with clients and partners across 45+ countries and a growing team of experts in various aspects of digital assets and blockchain technology.",
                },
                {
                  year: "2025",
                  title: "The Future",
                  description:
                    "Today, we continue to grow and innovate, staying at the forefront of the digital asset revolution while remaining true to our core mission of empowerment through education, transparency, and technological excellence.",
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center`}
                >
                  <div
                    className={`md:w-5/12 ${
                      index % 2 === 0
                        ? "md:text-right md:pr-12"
                        : "md:text-left md:pl-12"
                    } mb-6 md:mb-0`}
                  >
                    <span className="text-purple-400 font-bold">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold text-indigo-100 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-indigo-200/70">
                      {milestone.description}
                    </p>
                  </div>

                  <div className="md:w-2/12 flex justify-center relative">
                    <div className="w-12 h-12 rounded-full bg-indigo-900/50 border-2 border-indigo-500/50 flex items-center justify-center text-purple-300 relative z-10 shadow-lg shadow-indigo-900/30">
                      <span className="text-indigo-100 font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-indigo-900/30 rounded-full blur-lg"></div>
                  </div>

                  <div className="md:w-5/12 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
        </div>

        <div className="lg:w-11/12 container  mx-auto px-4  relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
              Core Values
            </h2>
            <p className="text-indigo-100/80 max-w-3xl mx-auto">
              The principles that guide everything we do at DAMSA and define our
              approach to digital assets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Transparency",
                description:
                  "We believe in complete transparency in all our operations, communications, and recommendations.",
                icon: <Globe className="h-6 w-6" />,
                color: "from-indigo-600 to-blue-500",
              },
              {
                title: "Education",
                description:
                  "We are committed to empowering through knowledge, making complex concepts accessible to everyone.",
                icon: <BookOpen className="h-6 w-6" />,
                color: "from-purple-600 to-indigo-600",
              },
              {
                title: "Innovation",
                description:
                  "We constantly evolve and adapt to remain at the forefront of the digital asset revolution.",
                icon: <Zap className="h-6 w-6" />,
                color: "from-fuchsia-500 to-purple-600",
              },
              {
                title: "Integrity",
                description:
                  "We operate with the highest ethical standards, always putting our clients' interests first.",
                icon: <Shield className="h-6 w-6" />,
                color: "from-cyan-600 to-blue-600",
              },
              {
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, from research to customer service.",
                icon: <Award className="h-6 w-6" />,
                color: "from-amber-600 to-red-600",
              },
              {
                title: "Community",
                description:
                  "We build and nurture communities that support and empower each other.",
                icon: <Users className="h-6 w-6" />,
                color: "from-green-600 to-teal-600",
              },
              {
                title: "Accessibility",
                description:
                  "We make digital assets accessible to everyone, regardless of background or experience.",
                icon: <LineChart className="h-6 w-6" />,
                color: "from-blue-600 to-indigo-600",
              },
              {
                title: "Social Impact",
                description:
                  "We believe in giving back and using our platform to create positive change in the world.",
                icon: <Heart className="h-6 w-6" />,
                color: "from-pink-600 to-rose-600",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-xl text-center hover-glow transition-all duration-500 group"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${value.color} bg-opacity-20 border border-indigo-500/30 transition-all duration-300 group-hover:shadow-lg`}
                  >
                    <div className="text-indigo-100">{value.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-indigo-100 mb-3">
                  {value.title}
                </h3>
                <p className="text-indigo-200/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
        </div>

        <div className="lg:w-11/12 container mx-auto px-4 relative z-10">
          <motion.div
            className="glass-panel p-10 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                {
                  value: "5000+",
                  label: "Clients Served",
                  icon: <Users className="h-6 w-6" />,
                },
                {
                  value: "45+",
                  label: "Countries",
                  icon: <Globe className="h-6 w-6" />,
                },
                {
                  value: "$42M+",
                  label: "Assets Managed",
                  icon: <LineChart className="h-6 w-6" />,
                },
                {
                  value: "98%",
                  label: "Client Satisfaction",
                  icon: <Award className="h-6 w-6" />,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center text-purple-300 mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gradient-primary mb-1">
                    {stat.value}
                  </div>
                  <p className="text-indigo-200/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners & Collaborations Section */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
        </div>

        <div className="lg:w-11/12 container  mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
              Partners & Collaborations
            </h2>
            <p className="text-indigo-100/80 max-w-3xl mx-auto">
              We work with leading organizations in the blockchain and digital
              asset ecosystem to deliver the best solutions for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Gradient",
              "Teneo",
              "Natix",
              "Silencio",
              "Grass",
              "Denet",
              "Acurast",
              "Nodle",
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-xl text-center group hover-glow transition-all duration-500"
              >
                <div className="h-24 flex items-center justify-center">
                  {/* This would be the partner logo in production */}
                  <div className="text-indigo-100 text-xl font-bold group-hover:text-purple-300 transition-colors">
                    {partner}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Responsibility Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
        </div>

        <div className="lg:w-11/12 container mx-auto px-4 relative z-10">
          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider">
                Giving Back
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
                Social Responsibility
              </h2>
              <p className="text-indigo-100/80 mb-8 leading-relaxed">
                At DAMSA, we believe in the power of digital assets to create
                positive change in the world. That's why we dedicate a portion
                of our profits to charitable causes and initiatives that align
                with our values and mission.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Education Initiatives",
                    description:
                      "Supporting programs that provide quality education and digital literacy skills to underserved communities.",
                  },
                  {
                    title: "Environmental Conservation",
                    description:
                      "Contributing to projects that offset the environmental impact of blockchain technology and promote sustainability.",
                  },
                  {
                    title: "Financial Inclusion",
                    description:
                      "Backing initiatives that increase access to financial services for unbanked and underbanked populations.",
                  },
                  {
                    title: "Financial Inclusion",
                    description:
                      "Backing initiatives that increase access to financial services for unbanked and underbanked populations.",
                  },
                  {
                    title: "Technology for Good",
                    description:
                      "Supporting organizations that use blockchain technology to address social and humanitarian challenges.",
                  },
                ].map((initiative, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-indigo-100 font-medium mb-1">
                        {initiative.title}
                      </h3>
                      <p className="text-indigo-200/70">
                        {initiative.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 blur-2xl"></div>
              <div className="relative glass-panel p-8 rounded-xl">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 backdrop-blur-sm">
                    <Heart className="h-8 w-8 text-purple-300" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-6 text-center text-indigo-100">
                  Impact Metrics
                </h3>

                <div className="space-y-6">
                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-indigo-100 font-medium">
                        Donations Made
                      </span>
                      <span className="text-purple-300">$250,000+</span>
                    </div>
                    <div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-indigo-100 font-medium">
                        Educational Grants
                      </span>
                      <span className="text-purple-300">15 Programs</span>
                    </div>
                    <div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-indigo-100 font-medium">
                        People Impacted
                      </span>
                      <span className="text-purple-300">10,000+</span>
                    </div>
                    <div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-indigo-100 font-medium">
                        Volunteer Hours
                      </span>
                      <span className="text-purple-300">5,000+ Hours</span>
                    </div>
                    <div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-indigo-900/40 border border-indigo-500/20 text-indigo-200 text-xs">
                    Updated Quarterly
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
        </div>

        <div className="lg:w-11/12 container  mx-auto px-4  relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
              What People Say About Us
            </h2>
            <p className="text-indigo-100/80 max-w-3xl mx-auto">
              Hear from our clients and partners about their experiences working
              with DAMSA.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "DAMSA transformed my understanding of digital assets. Their educational resources and personalized coaching helped me build a portfolio that has consistently outperformed my traditional investments.",
                author: "Michael Stevens",
                role: "Individual Investor",
                image: "/images/team.jpg", // This would be replaced with actual image path
              },
              {
                quote:
                  "As a business owner, I was skeptical about integrating blockchain solutions. DAMSA's team took the time to understand our challenges and delivered a custom solution that has significantly improved our supply chain efficiency.",
                author: "Rebecca Chang",
                role: "CEO, Global Logistics",
                image: "/images/team.jpg", // This would be replaced with actual image path
              },
              {
                quote:
                  "Their commitment to transparency and education sets them apart in the digital asset space. DAMSA genuinely cares about empowering their clients rather than just making quick profits.",
                author: "David Okonkwo",
                role: "Financial Advisor",
                image: "/images/team.jpg", // This would be replaced with actual image path
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass-panel rounded-xl p-6 relative"
              >
                <div className="absolute top-6 right-6 text-indigo-500/20">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 11C11.2239 11 12.5 9.72386 12.5 8V6C12.5 4.27614 11.2239 3 9.5 3H7.5C5.77614 3 4.5 4.27614 4.5 6V8C4.5 12.4183 8.08172 16 12.5 16V14C9.18629 14 6.5 11.3137 6.5 8V6C6.5 5.44772 6.94772 5 7.5 5H9.5C10.0523 5 10.5 5.44772 10.5 6V8C10.5 8.55228 10.0523 9 9.5 9H8.5V11H9.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M19.5 11C21.2239 11 22.5 9.72386 22.5 8V6C22.5 4.27614 21.2239 3 19.5 3H17.5C15.7761 3 14.5 4.27614 14.5 6V8C14.5 12.4183 18.0817 16 22.5 16V14C19.1863 14 16.5 11.3137 16.5 8V6C16.5 5.44772 16.9477 5 17.5 5H19.5C20.0523 5 20.5 5.44772 20.5 6V8C20.5 8.55228 20.0523 9 19.5 9H18.5V11H19.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <p className="text-indigo-100/80 mb-6 relative">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative mr-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-70"></div>
                    <div className="w-full h-full flex items-center justify-center text-white font-medium">
                      {testimonial.author.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-indigo-100 font-medium">
                      {testimonial.author}
                    </h4>
                    <p className="text-indigo-200/60 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128] via-[#1A1A40]/90 to-[#0A1128]/90 opacity-90"></div>

          <div className="absolute inset-0 digital-noise opacity-5"></div>

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
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
            Join Our Journey
          </h2>

          <p className="text-xl text-indigo-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Whether you're looking to invest in digital assets, learn about
            blockchain technology, or implement DLT solutions for your business,
            we're here to help you succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/30"
            >
              <span className="relative z-10 flex items-center justify-center">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>

            <a
              href="/services"
              className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg bg-transparent border border-indigo-500/30 text-indigo-200 font-medium backdrop-blur-sm hover:border-indigo-400/50 transition-all"
            >
              <span className="relative z-10 flex items-center justify-center">
                Explore Our Services
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
