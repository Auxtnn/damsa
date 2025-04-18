"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Film,
  FileText,
  Rss,
  Newspaper,
  ArrowRight,
  CheckCircle,
  Podcast,
  BookOpen,
  BarChart3,
  Bell,
  MessageCircle,
  Filter,
} from "lucide-react";

export default function MediaCurationPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="bg-[#0A1128]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] pt-16 flex flex-col items-center justify-center overflow-hidden">
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

        <div className="relative z-10 max-w-6xl mx-auto px-4  py-20 text-center">
          <motion.div
            className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Content Solutions
          </motion.div>

          <motion.h1
            className="text-4xl space-x-3 sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient-primary">Media</span>

            <span className="text-white">Curation</span>
          </motion.h1>

          <motion.p
            className="text-xl text-indigo-100/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Stay informed with our expertly curated media content on digital
            assets and DLT. We filter through the noise to bring you relevant,
            accurate, and actionable information.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a
              href="#newsletter"
              className="px-6 py-2 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-indigo-200 hover:bg-indigo-900/50 hover:border-indigo-400/50 transition-all"
            >
              Newsletter
            </a>
            <a
              href="#market-reports"
              className="px-6 py-2 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-indigo-200 hover:bg-indigo-900/50 hover:border-indigo-400/50 transition-all"
            >
              Market Reports
            </a>
            <a
              href="#educational-content"
              className="px-6 py-2 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-indigo-200 hover:bg-indigo-900/50 hover:border-indigo-400/50 transition-all"
            >
              Educational Content
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Media Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
          <div className="absolute inset-0 cyber-dots opacity-10"></div>
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
              Why Choose Our Media
            </h2>
            <p className="text-indigo-100/80 max-w-3xl mx-auto">
              In a world of information overload, our curated content helps you
              stay focused on what matters most for your digital asset journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Curation",
                description:
                  "Content selected and reviewed by industry specialists with deep knowledge of digital assets and blockchain technology",
                icon: <Filter className="h-6 w-6" />,
                color: "from-indigo-600 to-blue-500",
              },
              {
                title: "Actionable Insights",
                description:
                  "Beyond news and theory, we provide practical information you can apply to your investment strategy",
                icon: <BarChart3 className="h-6 w-6" />,
                color: "from-purple-600 to-indigo-600",
              },
              {
                title: "Tailored Content",
                description:
                  "Personalized to your interests, experience level, and specific areas of focus in the digital asset space",
                icon: <MessageCircle className="h-6 w-6" />,
                color: "from-fuchsia-500 to-purple-600",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-xl text-center"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${benefit.color} bg-opacity-20 border border-indigo-500/30`}
                  >
                    <div className="text-indigo-100">{benefit.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-indigo-100 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-indigo-200/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
        </div>

        <div className="lg:w-11/12 container  mx-auto px-4 relative z-10">
          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider">
                Weekly Updates
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
                Curated Newsletter
              </h2>
              <p className="text-indigo-100/80 mb-8 leading-relaxed">
                Our weekly newsletter delivers the most important digital asset
                updates, market insights, and educational content directly to
                your inbox. Stay informed without spending hours researching and
                filtering through unreliable sources.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Market Analysis",
                    description:
                      "Expert insights on price movements, trends, and macro factors affecting digital assets",
                  },
                  {
                    title: "Project Spotlights",
                    description:
                      "Deep dives into promising blockchain projects with strong fundamentals",
                  },
                  {
                    title: "Regulatory Updates",
                    description:
                      "Stay informed about the evolving regulatory landscape across key jurisdictions",
                  },
                  {
                    title: "Educational Resources",
                    description:
                      "Curated learning materials to expand your knowledge of blockchain technology and digital assets",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-indigo-100 font-medium mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-indigo-200/70">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow py-3 px-4 rounded-lg bg-indigo-900/20 border border-indigo-500/30 text-white placeholder:text-indigo-300/40 focus:outline-none focus:border-purple-500"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center whitespace-nowrap py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-purple-500/20 transition-all"
                  >
                    Subscribe Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 blur-2xl"></div>
              <div className="relative glass-panel p-8 rounded-xl">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 backdrop-blur-sm">
                    <Rss className="h-8 w-8 text-purple-300" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-6 text-center text-indigo-100">
                  Newsletter Preview
                </h3>

                <div className="space-y-6">
                  <div className="rounded-lg border border-indigo-500/20 overflow-hidden">
                    <div className="bg-indigo-900/30 px-4 py-2 border-b border-indigo-500/20 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center mr-3">
                        <BarChart3 className="h-4 w-4 text-indigo-300" />
                      </div>
                      <span className="text-indigo-100 font-medium">
                        Weekly Market Recap
                      </span>
                    </div>
                    <div className="p-4 bg-indigo-900/10">
                      <p className="text-indigo-200/70 text-sm mb-2">
                        Bitcoin's price action shows strong support at the $42K
                        level with increasing institutional inflows...
                      </p>
                      <a
                        href="#"
                        className="text-purple-300 text-xs hover:text-purple-200 transition-colors"
                      >
                        Read More
                      </a>
                    </div>
                  </div>

                  <div className="rounded-lg border border-indigo-500/20 overflow-hidden">
                    <div className="bg-indigo-900/30 px-4 py-2 border-b border-indigo-500/20 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center mr-3">
                        <BookOpen className="h-4 w-4 text-indigo-300" />
                      </div>
                      <span className="text-indigo-100 font-medium">
                        Project Spotlight: Acurast
                      </span>
                    </div>
                    <div className="p-4 bg-indigo-900/10">
                      <p className="text-indigo-200/70 text-sm mb-2">
                        Acurast is revolutionizing oracle services with their
                        decentralized computation framework...
                      </p>
                      <a
                        href="#"
                        className="text-purple-300 text-xs hover:text-purple-200 transition-colors"
                      >
                        Read More
                      </a>
                    </div>
                  </div>

                  <div className="rounded-lg border border-indigo-500/20 overflow-hidden">
                    <div className="bg-indigo-900/30 px-4 py-2 border-b border-indigo-500/20 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center mr-3">
                        <Newspaper className="h-4 w-4 text-indigo-300" />
                      </div>
                      <span className="text-indigo-100 font-medium">
                        Regulatory Updates
                      </span>
                    </div>
                    <div className="p-4 bg-indigo-900/10">
                      <p className="text-indigo-200/70 text-sm mb-2">
                        New EU framework for crypto assets takes effect,
                        providing clarity for operators...
                      </p>
                      <a
                        href="#"
                        className="text-purple-300 text-xs hover:text-purple-200 transition-colors"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-indigo-200/60 text-xs">
                    Delivered every Friday
                  </span>
                  <span className="bg-indigo-900/30 text-indigo-300 text-xs px-2 py-1 rounded border border-indigo-500/20">
                    5,000+ Subscribers
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Reports Section */}
      <section id="market-reports" className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
        </div>

        <div className="lg:w-11/12 container  mx-auto px-4 relative z-10">
          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="order-2 md:order-1">
              <div className="relative glass-panel p-8 rounded-xl">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 backdrop-blur-sm">
                    <FileText className="h-8 w-8 text-purple-300" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-6 text-center text-indigo-100">
                  Report Types
                </h3>

                <div className="space-y-5">
                  <div className="p-4 rounded-lg border border-indigo-500/20 bg-indigo-900/20">
                    <div className="flex items-start">
                      <div className="p-2 rounded-md bg-indigo-900/50 mr-4 flex-shrink-0">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.31 8L20.05 17.94"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.69 8H21.17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.38 12.0001L13.12 2.06006"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.69 16.0001L3.95 6.06006"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.31 16H2.83"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.62 12L10.88 21.94"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-indigo-100 font-medium mb-1">
                          Monthly Market Analysis
                        </h4>
                        <p className="text-indigo-200/60 text-sm">
                          Comprehensive review of digital asset market
                          performance with actionable insights
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-indigo-500/20 bg-indigo-900/20">
                    <div className="flex items-start">
                      <div className="p-2 rounded-md bg-indigo-900/50 mr-4 flex-shrink-0">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 22V12H15V22"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-indigo-100 font-medium mb-1">
                          Protocol Deep Dives
                        </h4>
                        <p className="text-indigo-200/60 text-sm">
                          In-depth analysis of emerging projects, tokenomics,
                          and potential use cases
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-indigo-500/20 bg-indigo-900/20">
                    <div className="flex items-start">
                      <div className="p-2 rounded-md bg-indigo-900/50 mr-4 flex-shrink-0">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2 8H18V17C18 18.0609 17.5786 19.0783 16.8284 19.8284C16.0783 20.5786 15.0609 21 14 21H6C4.93913 21 3.92172 20.5786 3.17157 19.8284C2.42143 19.0783 2 18.0609 2 17V8Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 1V4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 1V4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14 1V4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-indigo-100 font-medium mb-1">
                          Quarterly Trends Report
                        </h4>
                        <p className="text-indigo-200/60 text-sm">
                          Macro analysis of market cycles, sector rotation, and
                          emerging trends
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-indigo-500/20 bg-indigo-900/20">
                    <div className="flex items-start">
                      <div className="p-2 rounded-md bg-indigo-900/50 mr-4 flex-shrink-0">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 17H12.01"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-indigo-100 font-medium mb-1">
                          Regulatory Insights
                        </h4>
                        <p className="text-indigo-200/60 text-sm">
                          Analysis of global regulatory developments and their
                          impact on digital assets
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a
                    href="#"
                    className="text-indigo-300 hover:text-purple-300 text-sm font-medium inline-flex items-center transition-colors"
                  >
                    Browse sample reports
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider">
                In-Depth Analysis
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
                Market Reports
              </h2>
              <p className="text-indigo-100/80 mb-8 leading-relaxed">
                Our detailed market reports provide research-backed analysis and
                insights to help you make informed decisions in the fast-moving
                digital asset landscape. From emerging trends to project
                fundamentals, our reports cut through the noise to deliver
                value.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "On-Chain Analytics",
                    description:
                      "Data-driven insights using blockchain metrics to identify trends and market sentiment",
                  },
                  {
                    title: "Technical Analysis",
                    description:
                      "Professional chart analysis and price projections to inform your trading strategy",
                  },
                  {
                    title: "Fundamental Research",
                    description:
                      "Deep evaluation of project fundamentals, team backgrounds, and technology",
                  },
                  {
                    title: "Risk Assessment",
                    description:
                      "Comprehensive risk analysis to help you make calculated investment decisions",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-indigo-100 font-medium mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-indigo-200/70">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="#"
                  className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg bg-transparent border border-indigo-500/30 text-indigo-200 font-medium backdrop-blur-sm hover:border-indigo-400/50 transition-all"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Subscribe to Reports
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Educational Content Section */}
      <section
        id="educational-content"
        className="relative py-12 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
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
              Educational Content
            </h2>
            <p className="text-indigo-100/80 max-w-3xl mx-auto">
              Access a growing library of educational resources designed to
              expand your knowledge of digital assets and blockchain technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Video Tutorials",
                description:
                  "Visual explanations of complex concepts, from blockchain basics to advanced trading strategies",
                icon: <Film className="h-8 w-8" />,
                content: [
                  "Blockchain Fundamentals",
                  "DeFi Explained",
                  "Technical Analysis",
                  "Security Best Practices",
                ],
                color: "from-indigo-600 to-blue-500",
              },
              {
                title: "Podcasts & Interviews",
                description:
                  "Conversations with industry leaders sharing insights and perspectives on the digital asset ecosystem",
                icon: <Podcast className="h-8 w-8" />,
                content: [
                  "Expert Interviews",
                  "Market Commentary",
                  "Project Spotlights",
                  "Regulatory Discussions",
                ],
                color: "from-purple-600 to-indigo-600",
              },
              {
                title: "Guides & Tutorials",
                description:
                  "Step-by-step instructions and comprehensive guides on various aspects of digital assets",
                icon: <BookOpen className="h-8 w-8" />,
                content: [
                  "Getting Started Guides",
                  "Security Best Practices",
                  "DeFi Strategies",
                  "NFT Exploration",
                ],
                color: "from-fuchsia-500 to-purple-600",
              },
            ].map((content, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass-panel rounded-xl overflow-hidden hover-glow transition-all duration-500 group"
              >
                <div
                  className={`bg-gradient-to-r ${content.color} p-6 relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/10 backdrop-blur-sm mr-4">
                      <div className="text-white">{content.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {content.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-indigo-100/80 mb-6">
                    {content.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {content.content.map((item, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                        <span className="text-indigo-200/70">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 glass-panel p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gradient-secondary">
                  Custom Content Creation
                </h3>
                <p className="text-indigo-100/80 mb-6">
                  Need specialized educational content for your team or
                  audience? We create custom educational materials tailored to
                  your specific requirements and knowledge level.
                </p>
                <ul className="space-y-3">
                  {[
                    "Branded educational content for your organization",
                    "Training materials for your team or clients",
                    "Custom tutorials on specific digital asset topics",
                    "White-labeled reports and analysis",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-indigo-200/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="bg-indigo-900/30 border border-indigo-500/20 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4 text-indigo-100">
                    Request Custom Content
                  </h4>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full py-3 px-4 rounded-lg bg-indigo-900/30 border border-indigo-500/30 text-white placeholder:text-indigo-300/40 focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full py-3 px-4 rounded-lg bg-indigo-900/30 border border-indigo-500/30 text-white placeholder:text-indigo-300/40 focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Describe your content needs"
                        rows={3}
                        className="w-full py-3 px-4 rounded-lg bg-indigo-900/30 border border-indigo-500/30 text-white placeholder:text-indigo-300/40 focus:outline-none focus:border-purple-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center py-3 px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-purple-500/20 transition-all"
                    >
                      Submit Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alert Service Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
        </div>

        <div className="lg:w-11/12 container mx-auto px-4  relative z-10">
          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider">
                Real-Time Updates
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
                Alert Service
              </h2>
              <p className="text-indigo-100/80 mb-8 leading-relaxed">
                Stay ahead of the market with our real-time alert service.
                Receive timely notifications about important events, price
                movements, and market developments that could impact your
                digital asset strategy.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Price Alerts",
                    description:
                      "Customizable alerts for price movements and significant market events",
                  },
                  {
                    title: "News Notifications",
                    description:
                      "Instant updates on breaking news with potential market impact",
                  },
                  {
                    title: "Governance Alerts",
                    description:
                      "Notifications about important DAO votes and protocol changes",
                  },
                  {
                    title: "Security Warnings",
                    description:
                      "Immediate alerts about security incidents or vulnerabilities",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-indigo-100 font-medium mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-indigo-200/70">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="#"
                  className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/30"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Try Alert Service Free
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 blur-2xl"></div>
              <div className="relative glass-panel p-8 rounded-xl">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 backdrop-blur-sm">
                    <Bell className="h-8 w-8 text-purple-300" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-6 text-center text-indigo-100">
                  Alert Examples
                </h3>

                <div className="space-y-4">
                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-green-900/30 border border-green-500/30 flex items-center justify-center mr-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 15L12 9L6 15"
                            stroke="#4ADE80"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="text-indigo-100 font-medium">
                          Price Alert
                        </span>
                        <span className="text-green-400 ml-2">+5.2%</span>
                      </div>
                      <span className="ml-auto text-indigo-300/40 text-xs">
                        2 min ago
                      </span>
                    </div>
                    <p className="text-indigo-200/70 text-sm">
                      Bitcoin breaks above $45,000 resistance level with
                      increasing volume. Key technical indicators turning
                      positive.
                    </p>
                  </div>

                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-blue-900/30 border border-blue-500/30 flex items-center justify-center mr-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 20H5V19C5 15.134 8.13401 12 12 12C15.866 12 19 15.134 19 19V20Z"
                            stroke="#60A5FA"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                            stroke="#60A5FA"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="text-indigo-100 font-medium">
                          Governance Alert
                        </span>
                      </div>
                      <span className="ml-auto text-indigo-300/40 text-xs">
                        1 hour ago
                      </span>
                    </div>
                    <p className="text-indigo-200/70 text-sm">
                      Important Uniswap governance proposal #15 voting begins.
                      Changes to fee structure could impact liquidity providers.
                    </p>
                  </div>

                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-amber-900/30 border border-amber-500/30 flex items-center justify-center mr-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 9V13L15 15"
                            stroke="#F59E0B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                            stroke="#F59E0B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="text-indigo-100 font-medium">
                          News Alert
                        </span>
                      </div>
                      <span className="ml-auto text-indigo-300/40 text-xs">
                        5 hours ago
                      </span>
                    </div>
                    <p className="text-indigo-200/70 text-sm">
                      SEC announces new guidelines for digital asset exchanges.
                      Regulatory clarity could reduce market uncertainty.
                    </p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <span className="text-indigo-200/60 text-sm">
                    Alerts delivered via email, SMS, or mobile app
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative pb-20 pt-12 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
        </div>

        <div className="lg:w-11/12 container mx-auto px-4  relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
              What Our Subscribers Say
            </h2>
            <p className="text-indigo-100/80 max-w-3xl mx-auto">
              Hear from our community about how our media content has helped
              them navigate the complex world of digital assets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "DAMSA's weekly newsletter has become an essential part of my investment strategy. The insights and analysis have helped me make more informed decisions and avoid costly mistakes.",
                author: "Thomas Wright",
                role: "Individual Investor",
                image: "/testimonials/thomas.jpg", // This would be replaced with actual image path
              },
              {
                quote:
                  "The quality of research in their market reports is outstanding. As a fund manager, I rely on their analysis to spot opportunities others miss and stay ahead of market trends.",
                author: "Jennifer Lee",
                role: "Hedge Fund Manager",
                image: "/testimonials/jennifer.jpg", // This would be replaced with actual image path
              },
              {
                quote:
                  "Their educational content transformed my understanding of blockchain technology. The clear explanations and practical examples make complex concepts accessible to everyone.",
                author: "Marcus Blackwood",
                role: "Tech Entrepreneur",
                image: "/testimonials/marcus.jpg", // This would be replaced with actual image path
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
                    {/* In a real implementation, would use an actual image: */}
                    {/* <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" /> */}
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
          className="max-w-4xl mx-auto px-4 relative z-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center mb-6">
            <Film className="h-6 w-6 text-purple-400 mr-2" />
            <span className="text-indigo-100 font-medium">
              Join 10,000+ subscribers worldwide
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
            Ready to Stay Informed?
          </h2>

          <p className="text-xl text-indigo-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Subscribe to our newsletter today and get the insights you need to
            navigate the digital asset landscape with confidence.
          </p>

          <form className="max-w-md mx-auto mb-10">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow py-4 px-6 rounded-lg bg-indigo-900/20 border border-indigo-500/30 text-white placeholder:text-indigo-300/40 focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap py-4 px-6 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-purple-500/20 transition-all"
              >
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/services"
              className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg bg-transparent border border-indigo-500/30 text-indigo-200 font-medium backdrop-blur-sm hover:border-indigo-400/50 transition-all"
            >
              <span className="relative z-10 flex items-center justify-center">
                Explore Other Services
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
