"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Code,
  Layers,
  FileCode,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Server,
  Database,
  BarChart4,
  Blocks,
} from "lucide-react";

export default function DLTSolutionsPage() {
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
            Technology Solutions
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl space-x-3 lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient-primary">DLT</span>

            <span className="text-white">Solutions</span>
          </motion.h1>

          <motion.p
            className="text-xl text-indigo-100/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Harness the power of distributed ledger technology for your business
            with our custom development services. From smart contracts to
            full-scale decentralized applications, we build secure and scalable
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a
              href="#smart-contracts"
              className="px-6 py-2 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-indigo-200 hover:bg-indigo-900/50 hover:border-indigo-400/50 transition-all"
            >
              Smart Contracts
            </a>
            <a
              href="#enterprise-solutions"
              className="px-6 py-2 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-indigo-200 hover:bg-indigo-900/50 hover:border-indigo-400/50 transition-all"
            >
              Enterprise Solutions
            </a>
            <a
              href="#tokenization"
              className="px-6 py-2 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-indigo-200 hover:bg-indigo-900/50 hover:border-indigo-400/50 transition-all"
            >
              Tokenization
            </a>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Technologies We Work With
            </h2>
            <p className="text-indigo-100/80 max-w-3xl mx-auto">
              Our team of experts specializes in multiple blockchain platforms
              and technologies, allowing us to build the right solution for your
              specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Ethereum",
                logo: "ETH",
                description: "Smart contracts & DApps",
                color: "from-indigo-600 to-blue-500",
              },
              {
                name: "Solana",
                logo: "SOL",
                description: "High-performance applications",
                color: "from-purple-600 to-indigo-600",
              },
              {
                name: "Polkadot",
                logo: "DOT",
                description: "Cross-chain interoperability",
                color: "from-pink-600 to-rose-500",
              },
              {
                name: "Polygon",
                logo: "MATIC",
                description: "Scalable solutions",
                color: "from-indigo-500 to-purple-600",
              },
              {
                name: "Hyperledger",
                logo: "HL",
                description: "Enterprise blockchain solutions",
                color: "from-emerald-600 to-teal-500",
              },
              {
                name: "Cosmos",
                logo: "ATOM",
                description: "Interconnected blockchains",
                color: "from-blue-600 to-indigo-500",
              },
              {
                name: "Avalanche",
                logo: "AVAX",
                description: "Fast, low-cost smart contracts",
                color: "from-red-600 to-rose-500",
              },
              {
                name: "Cardano",
                logo: "ADA",
                description: "Research-driven approach",
                color: "from-cyan-600 to-blue-500",
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                viewport={{ once: true }}
                className="glass-panel rounded-xl p-4 text-center group hover-glow transition-all duration-500 hover:border-indigo-500/50"
              >
                <div className="inline-flex mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${tech.color} bg-opacity-20 border border-indigo-500/30`}
                  >
                    <div className="text-white font-bold">{tech.logo}</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-indigo-100 mb-1 group-hover:text-purple-300 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-indigo-200/70 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-indigo-200/60 text-sm">
              We also work with many other blockchain platforms and can adapt to
              your preferred technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Smart Contracts Section */}
      <section id="smart-contracts" className="relative py-20 overflow-hidden">
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
                Contract Development
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
                Smart Contracts
              </h2>
              <p className="text-indigo-100/80 mb-8 leading-relaxed">
                Our expert developers create secure, efficient, and reliable
                smart contracts tailored to your specific business requirements.
                We follow industry best practices and rigorous testing
                procedures to ensure your contracts function exactly as
                intended.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Custom Development",
                    description:
                      "Tailor-made smart contracts designed to meet your specific business requirements",
                  },
                  {
                    title: "Security Audits",
                    description:
                      "Comprehensive testing and auditing to identify and fix vulnerabilities before deployment",
                  },
                  {
                    title: "Gas Optimization",
                    description:
                      "Efficient code that minimizes transaction costs while maintaining functionality",
                  },
                  {
                    title: "Upgradeable Contracts",
                    description:
                      "Future-proof designs that allow for updates and enhancements as your needs evolve",
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
                  href="/contact"
                  className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/30"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Discuss Your Project
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
                    <Code className="h-8 w-8 text-purple-300" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-6 text-center text-indigo-100">
                  Use Cases
                </h3>

                <div className="space-y-5">
                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 18H18C19.1046 18 20 17.1046 20 16V5C20 3.89543 19.1046 3 18 3H9C7.89543 3 7 3.89543 7 5V7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14 13V17C14 18.1046 13.1046 19 12 19H6C4.89543 19 4 18.1046 4 17V13C4 11.8954 4.89543 11 6 11H12C13.1046 11 14 11.8954 14 13Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-indigo-100 font-medium mb-1">
                          DeFi Protocols
                        </h4>
                        <p className="text-indigo-200/60 text-sm">
                          Lending platforms, liquidity pools, yield aggregators
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 12H18L15 21L9 3L6 12H2"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-indigo-100 font-medium mb-1">
                          NFT Marketplaces
                        </h4>
                        <p className="text-indigo-200/60 text-sm">
                          Creation, trading, royalty distributions,
                          fractionalization
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center mr-4 flex-shrink-0">
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
                            d="M16.2399 7.76001L14.1199 14.12L7.75988 16.24L9.87988 9.88001L16.2399 7.76001Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-indigo-100 font-medium mb-1">
                          Supply Chain Tracking
                        </h4>
                        <p className="text-indigo-200/60 text-sm">
                          Product authentication, provenance tracking, automated
                          payments
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 9H21"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 21V9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-indigo-100 font-medium mb-1">
                          Governance Systems
                        </h4>
                        <p className="text-indigo-200/60 text-sm">
                          DAO structures, voting mechanisms, treasury management
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Solutions Section */}
      <section
        id="enterprise-solutions"
        className="relative py-12 overflow-hidden"
      >
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
                    <Server className="h-8 w-8 text-purple-300" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-6 text-center text-indigo-100">
                  Our Approach
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-100 font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-indigo-100 font-medium mb-1">
                        Consultation & Analysis
                      </h4>
                      <p className="text-indigo-200/60 text-sm">
                        Understanding your business challenges and identifying
                        the right blockchain solution
                      </p>
                    </div>
                  </div>

                  <div className="w-0.5 h-6 bg-indigo-500/20 mx-auto"></div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-100 font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-indigo-100 font-medium mb-1">
                        Architecture Design
                      </h4>
                      <p className="text-indigo-200/60 text-sm">
                        Creating a scalable, secure blueprint tailored to your
                        specific requirements
                      </p>
                    </div>
                  </div>

                  <div className="w-0.5 h-6 bg-indigo-500/20 mx-auto"></div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-100 font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-indigo-100 font-medium mb-1">
                        Proof of Concept
                      </h4>
                      <p className="text-indigo-200/60 text-sm">
                        Developing a minimal viable solution to validate the
                        approach and gather feedback
                      </p>
                    </div>
                  </div>

                  <div className="w-0.5 h-6 bg-indigo-500/20 mx-auto"></div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-100 font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-indigo-100 font-medium mb-1">
                        Full Implementation
                      </h4>
                      <p className="text-indigo-200/60 text-sm">
                        Building the complete solution with rigorous testing and
                        optimization
                      </p>
                    </div>
                  </div>

                  <div className="w-0.5 h-6 bg-indigo-500/20 mx-auto"></div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center text-indigo-100 font-bold mr-4 flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h4 className="text-indigo-100 font-medium mb-1">
                        Deployment & Support
                      </h4>
                      <p className="text-indigo-200/60 text-sm">
                        Seamless integration with your existing systems and
                        ongoing maintenance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider">
                Business Applications
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
                Enterprise Solutions
              </h2>
              <p className="text-indigo-100/80 mb-8 leading-relaxed">
                Transform your business operations with custom enterprise
                blockchain solutions. We help organizations across industries
                leverage DLT to increase efficiency, enhance security, and
                create new business models.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Private & Consortium Blockchains",
                    description:
                      "Customized blockchain networks for your organization or industry consortium",
                  },
                  {
                    title: "Legacy System Integration",
                    description:
                      "Seamless connection between your existing systems and blockchain solutions",
                  },
                  {
                    title: "Compliance & Governance",
                    description:
                      "Built-in mechanisms for regulatory compliance and corporate governance",
                  },
                  {
                    title: "Scalable Architecture",
                    description:
                      "Enterprise-grade infrastructure designed to grow with your business needs",
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
                  href="/contact"
                  className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg bg-transparent border border-indigo-500/30 text-indigo-200 font-medium backdrop-blur-sm hover:border-indigo-400/50 transition-all"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tokenization Section */}
      <section id="tokenization" className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
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
                Asset Digitization
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
                Tokenization
              </h2>
              <p className="text-indigo-100/80 mb-8 leading-relaxed">
                Convert real-world assets into digital tokens on the blockchain,
                unlocking new levels of liquidity, fractional ownership, and
                programmable functionality. Our tokenization solutions transform
                how assets are owned, transferred, and managed.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Asset-Backed Tokens",
                    description:
                      "Digitize real estate, art, commodities, and other physical assets for fractional ownership",
                  },
                  {
                    title: "Security Tokens",
                    description:
                      "Compliant tokenization of financial securities with built-in regulatory features",
                  },
                  {
                    title: "Utility Tokens",
                    description:
                      "Custom token economies designed to power your product or service ecosystem",
                  },
                  {
                    title: "NFT Collections",
                    description:
                      "End-to-end solutions for creating, distributing, and managing non-fungible tokens",
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
                  href="/contact"
                  className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/30"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Discuss Tokenization Options
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
                    <Blocks className="h-8 w-8 text-purple-300" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-6 text-center text-indigo-100">
                  Tokenization Benefits
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4">
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center text-purple-300">
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
                          />
                          <path
                            d="M15 9L9 15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 9L9 15L15 15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-indigo-100 text-center font-medium mb-1">
                      Increased Liquidity
                    </h4>
                    <p className="text-indigo-200/60 text-center text-sm">
                      Unlock value in previously illiquid assets
                    </p>
                  </div>

                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4">
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center text-purple-300">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 3H17C18.1046 3 19 3.89543 19 5V9M11 3H5C3.89543 3 3 3.89543 3 5V9M11 3V21M11 21H17C18.1046 21 19 20.1046 19 19V15M11 21H5C3.89543 21 3 20.1046 3 19V15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-indigo-100 text-center font-medium mb-1">
                      Fractional Ownership
                    </h4>
                    <p className="text-indigo-200/60 text-center text-sm">
                      Lower barriers to entry for investors
                    </p>
                  </div>

                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4">
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center text-purple-300">
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
                            d="M17 12H14L12 7L10 12H7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-indigo-100 text-center font-medium mb-1">
                      Automated Compliance
                    </h4>
                    <p className="text-indigo-200/60 text-center text-sm">
                      Built-in regulatory safeguards
                    </p>
                  </div>

                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4">
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center text-purple-300">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21 7.5V6.75C21 5.50736 19.9926 4.5 18.75 4.5H5.25C4.00736 4.5 3 5.50736 3 6.75V17.25C3 18.4926 4.00736 19.5 5.25 19.5H18.75C19.9926 19.5 21 18.4926 21 17.25V16.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.75 12L12.75 9H16.5C17.3284 9 18 9.67157 18 10.5V13.5C18 14.3284 17.3284 15 16.5 15H12.75L15.75 12Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-indigo-100 text-center font-medium mb-1">
                      Global Access
                    </h4>
                    <p className="text-indigo-200/60 text-center text-sm">
                      Worldwide investor participation
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-indigo-900/30 border border-indigo-500/30">
                  <h4 className="text-indigo-100 font-medium mb-2">
                    Asset Classes
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                      <span className="text-indigo-200/70 text-sm">
                        Real Estate
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                      <span className="text-indigo-200/70 text-sm">
                        Art & Collectibles
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                      <span className="text-indigo-200/70 text-sm">
                        Investment Funds
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                      <span className="text-indigo-200/70 text-sm">
                        Commodities
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                      <span className="text-indigo-200/70 text-sm">
                        Intellectual Property
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                      <span className="text-indigo-200/70 text-sm">
                        Carbon Credits
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="relative py-12 overflow-hidden">
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
              Security & Compliance
            </h2>
            <p className="text-indigo-100/80 max-w-3xl mx-auto">
              We prioritize the security and regulatory compliance of your
              blockchain solutions, implementing industry best practices and
              rigorous testing procedures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Code Audits",
                description:
                  "Comprehensive testing to identify and fix vulnerabilities before deployment",
                icon: <FileCode className="h-6 w-6" />,
                color: "from-indigo-600 to-blue-500",
              },
              {
                title: "Penetration Testing",
                description:
                  "Simulated attacks to identify and address potential security weaknesses",
                icon: <Shield className="h-6 w-6" />,
                color: "from-purple-600 to-indigo-600",
              },
              {
                title: "Regulatory Compliance",
                description:
                  "Solutions designed to meet relevant regulatory requirements across jurisdictions",
                icon: <Database className="h-6 w-6" />,
                color: "from-fuchsia-500 to-purple-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-xl text-center hover-glow transition-all duration-500"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${feature.color} bg-opacity-20 border border-indigo-500/30`}
                  >
                    <div className="text-indigo-100">{feature.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-indigo-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-indigo-200/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 p-6 glass-panel rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-10">
                <h3 className="text-xl font-bold text-indigo-100 mb-2">
                  Our Security Commitment
                </h3>
                <p className="text-indigo-200/70">
                  Every solution we develop undergoes rigorous security testing
                  and audit processes to ensure the highest levels of protection
                  for your assets and data. We stay updated with the latest
                  security best practices and continuously monitor deployed
                  solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
        </div>

        <div className=" mx-auto px-4 lg:w-11/12 container relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
              Success Stories
            </h2>
            <p className="text-indigo-100/80 max-w-3xl mx-auto">
              See how our DLT solutions have helped organizations across
              industries transform their operations and create new value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Real Estate Tokenization Platform",
                client: "Global Property Investments",
                description:
                  "Developed a platform enabling fractional ownership of premium commercial properties, increasing liquidity and expanding their investor base by 300%.",
                technologies: ["Ethereum", "ERC-1155", "MetaMask Integration"],
                results: "47% increase in property portfolio value",
                image: "/case-studies/real-estate.jpg", // This would be replaced with actual image path
              },
              {
                title: "Supply Chain Traceability System",
                client: "Organic Foods Cooperative",
                description:
                  "Created an end-to-end traceability solution for organic produce, enabling consumers to verify product origins and farming practices through QR codes.",
                technologies: [
                  "Hyperledger Fabric",
                  "IoT Sensors",
                  "Mobile App",
                ],
                results: "28% increase in consumer trust metrics",
                image: "/case-studies/supply-chain.jpg", // This would be replaced with actual image path
              },
              {
                title: "DeFi Yield Aggregator",
                client: "FinTech Startup",
                description:
                  "Built a smart contract system that automatically optimizes yield across multiple DeFi protocols, maximizing returns while managing risk parameters.",
                technologies: ["Solana", "Rust", "Cross-chain Bridges"],
                results: "32% higher yields than market averages",
                image: "/case-studies/defi.jpg", // This would be replaced with actual image path
              },
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass-panel rounded-xl overflow-hidden hover-glow transition-all duration-500 group"
              >
                <div className="h-40 bg-indigo-900/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/80 to-purple-900/30"></div>

                  {/* This would be an actual image in production */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-indigo-900/70 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
                      <BarChart4 className="h-8 w-8" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-1 rounded-md bg-indigo-900/70 backdrop-blur-sm border border-indigo-500/30 text-indigo-200 text-xs">
                      {study.client}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-indigo-100 mb-2 group-hover:text-purple-300 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-indigo-200/70 text-sm mb-4">
                    {study.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-xs text-indigo-300/60 mb-2">
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-full bg-indigo-900/30 text-indigo-200 text-xs border border-indigo-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-indigo-500/20">
                    <div className="text-purple-300 font-medium text-sm">
                      {study.results}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
        </div>

        <div className=" mx-auto px-4 lg:w-11/12 container relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
              Our Development Process
            </h2>
            <p className="text-indigo-100/80 max-w-3xl mx-auto">
              We follow a structured, agile methodology that ensures transparent
              communication, rapid iteration, and high-quality deliverables.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-500/20 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-16">
              {[
                {
                  phase: "Discovery",
                  description:
                    "Understanding your business challenges, goals, and requirements to determine if blockchain is the right solution and which approach will deliver the most value.",
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 21H16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 17V21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  phase: "Architecture & Design",
                  description:
                    "Creating a detailed blueprint for your solution, including technical architecture, smart contract design, user interfaces, and integration points with existing systems.",
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 20H22"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 20V13C5 11.3431 6.34315 10 8 10H16C17.6569 10 19 11.3431 19 13V20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 10V4.5C12 3.67157 11.3284 3 10.5 3H6.5C5.67157 3 5 3.67157 5 4.5V7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  phase: "Development & Testing",
                  description:
                    "Building your solution with iterative development cycles, continuous testing, and regular feedback loops to ensure the final product meets all requirements and quality standards.",
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 18L22 12L16 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 6L2 12L8 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  phase: "Deployment & Integration",
                  description:
                    "Securely deploying your solution to the selected blockchain networks and integrating it with your existing systems and processes, ensuring a smooth transition.",
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.6001 9H20.4001"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.6001 15H20.4001"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 20.4001C13.9883 20.4001 15.6 16.9707 15.6 12.0001C15.6 7.02953 13.9883 3.6001 12 3.6001C10.0118 3.6001 8.40002 7.02953 8.40002 12.0001C8.40002 16.9707 10.0118 20.4001 12 20.4001Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  phase: "Support & Maintenance",
                  description:
                    "Providing ongoing technical support, monitoring, and maintenance to ensure your solution continues to operate effectively and adapt to changing requirements.",
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.4 15C19.7 14 20 13 20 12C20 11 19.7 10 19.4 9M15 19.4C14 19.7 13 20 12 20C11 20 10 19.7 9 19.4M9 4.6C10 4.3 11 4 12 4C13 4 14 4.3 15 4.6M4.6 9C4.3 10 4 11 4 12C4 13 4.3 14 4.6 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 12H12.01"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${
                    index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                  } items-center`}
                >
                  <div
                    className={`md:w-5/12 ${
                      index % 2 === 1
                        ? "md:text-right md:pl-12"
                        : "md:text-left md:pr-12"
                    } mb-6 md:mb-0`}
                  >
                    <h3 className="text-xl font-bold text-indigo-100 mb-3">
                      {step.phase}
                    </h3>
                    <p className="text-indigo-200/70">{step.description}</p>
                  </div>

                  <div className="md:w-2/12 flex justify-center relative">
                    <div className="w-12 h-12 rounded-full bg-indigo-900/50 border-2 border-indigo-500/50 flex items-center justify-center text-purple-300 relative z-10 shadow-lg shadow-indigo-900/30">
                      {step.icon}
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

      {/* FAQ Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-indigo-100/80 max-w-3xl mx-auto">
              Answers to common questions about our DLT solutions and services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question:
                  "How do you determine if a blockchain solution is right for my business problem?",
                answer:
                  "We conduct a thorough assessment of your business challenges, goals, and technical requirements. Blockchain solutions are ideal when you need transparent, immutable record-keeping, reduced intermediaries, or automated trust between parties. During our discovery phase, we evaluate alternative solutions as well to ensure blockchain is truly the optimal approach for your specific situation.",
              },
              {
                question: "What blockchain platforms do you work with?",
                answer:
                  "We have extensive experience with multiple blockchain platforms including Ethereum, Solana, Polkadot, Hyperledger Fabric, Cosmos, Polygon, Avalanche, and Cardano. We select the most appropriate platform based on your specific requirements, considering factors such as transaction throughput, cost, security needs, and ecosystem compatibility.",
              },
              {
                question: "How do you ensure the security of smart contracts?",
                answer:
                  "We implement a multi-layered security approach that includes formal verification, comprehensive testing, and third-party audits. Our development process incorporates security best practices at every stage, from design to deployment. We also stay updated on the latest security vulnerabilities and ensure our contracts follow established patterns that have been battle-tested in production environments.",
              },
              {
                question:
                  "Can you integrate blockchain solutions with our existing systems?",
                answer:
                  "Yes, we specialize in integrating blockchain solutions with existing enterprise systems like ERP, CRM, and supply chain management platforms. We develop custom APIs and middleware that bridge the gap between on-chain and off-chain systems, ensuring seamless data flow and business process continuity while leveraging the benefits of blockchain technology.",
              },
              {
                question:
                  "What is the typical timeline for developing a DLT solution?",
                answer:
                  "Project timelines vary based on complexity, but typically range from 2-3 months for simpler applications to 6-12 months for enterprise-scale solutions. We follow an agile methodology with regular deliverables and checkpoints, allowing you to see progress throughout the development process. We can provide a more specific timeline after our initial discovery and requirements gathering phase.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass-panel rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-indigo-100">
                  {faq.question}
                </h3>
                <p className="text-indigo-200/70">{faq.answer}</p>
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
            <Layers className="h-6 w-6 text-purple-400 mr-2" />
            <span className="text-indigo-100 font-medium">
              Trusted by leading companies worldwide
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
            Ready to Transform Your Business with Blockchain?
          </h2>

          <p className="text-xl text-indigo-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how our DLT solutions can help you create new
            opportunities, streamline operations, and drive innovation in your
            industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/30"
            >
              <span className="relative z-10 flex items-center justify-center">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
