"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  DollarSign,
  BookOpen,
  Globe,
  Film,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function ServicesMain() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A1128] z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>

        {/* Background elements */}
        <div className="absolute inset-0 cyber-dots opacity-10"></div>
      </div>

      <div className="lg:w-11/12 container  mx-auto px-4 relative z-10">
        {/* Portfolio Investment */}
        <div className="mb-32">
          <motion.div
            className="grid md:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div>
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider">
                Investment Solutions
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
                Digital Asset Portfolio Development
              </h2>
              <p className="text-indigo-100/80 mb-6 leading-relaxed">
                Leverage our data-driven strategies for maximizing returns while
                minimizing risk exposure. Our portfolio management combines
                cutting-edge analytics with deep market expertise to position
                your digital assets for optimal growth.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Customized portfolio creation based on your risk tolerance",
                  "Diversification across multiple digital asset classes",
                  "Regular rebalancing to optimize performance",
                  "Detailed performance reporting and analytics",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-indigo-100/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/services/portfolio-investment"
                className="inline-flex items-center text-indigo-300 hover:text-purple-300 font-medium transition-colors"
              >
                Learn more about our investment strategies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 blur-2xl"></div>
              <div className="relative glass-panel p-8 rounded-xl">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 backdrop-blur-sm">
                    <LineChart className="h-8 w-8 text-purple-300" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-4 rounded-lg border border-indigo-500/20 bg-indigo-900/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-indigo-100 font-medium">
                        Conservative
                      </span>
                      <span className="text-indigo-300">6-12% APY</span>
                    </div>
                    <div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full"></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-indigo-500/20 bg-indigo-900/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-indigo-100 font-medium">
                        Balanced
                      </span>
                      <span className="text-indigo-300">15-25% APY</span>
                    </div>
                    <div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
                      <div className="h-full w-3/5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-indigo-500/20 bg-indigo-900/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-indigo-100 font-medium">
                        Growth
                      </span>
                      <span className="text-indigo-300">20-40%+ APY</span>
                    </div>
                    <div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
                      <div className="h-full w-2/5 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Merchant Services */}
        <div className="mb-32">
          <motion.div
            className="grid md:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="order-2 md:order-1">
              <div className="relative glass-panel p-8 rounded-xl">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 backdrop-blur-sm">
                    <DollarSign className="h-8 w-8 text-purple-300" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center mr-4">
                      <ShieldCheck className="h-5 w-5 text-indigo-300" />
                    </div>
                    <div>
                      <h4 className="text-indigo-100 font-medium">
                        Enhanced Security
                      </h4>
                      <p className="text-indigo-200/60 text-sm">
                        Multi-signature protection & secure infrastructure
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center mr-4">
                      <TrendingUp className="h-5 w-5 text-indigo-300" />
                    </div>
                    <div>
                      <h4 className="text-indigo-100 font-medium">
                        Analytics Dashboard
                      </h4>
                      <p className="text-indigo-200/60 text-sm">
                        Track performance metrics in real-time
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center mr-4">
                      <Zap className="h-5 w-5 text-indigo-300" />
                    </div>
                    <div>
                      <h4 className="text-indigo-100 font-medium">
                        Fast Settlement
                      </h4>
                      <p className="text-indigo-200/60 text-sm">
                        Same-day settlement to your preferred account
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-indigo-500/20 text-center">
                    <p className="text-indigo-100/80 mb-2">
                      Competitive Processing Fees
                    </p>
                    <p className="text-2xl font-bold text-gradient-primary">
                      0.5% - 1.2%
                    </p>
                    <p className="text-indigo-200/60 text-sm">
                      Based on monthly transaction volume
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider">
                Payment Solutions
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
                Merchant Services
              </h2>
              <p className="text-indigo-100/80 mb-6 leading-relaxed">
                Seamlessly integrate digital asset payments into your business
                with our secure, low-fee merchant solutions. We provide robust
                infrastructure, multi-chain support, and detailed analytics to
                transform how your business handles transactions.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Accept multiple digital currencies with minimal fees",
                  "Customizable payment widgets for your website",
                  "Detailed transaction reporting and analytics",
                  "Automated conversion to fiat currencies if desired",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-indigo-100/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/services/merchant-services"
                className="inline-flex items-center text-indigo-300 hover:text-purple-300 font-medium transition-colors"
              >
                Explore our merchant solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Coaching & Consulting */}
        <div className="mb-32">
          <motion.div
            className="grid md:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div>
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider">
                Educational Services
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
                Coaching & Consulting
              </h2>
              <p className="text-indigo-100/80 mb-6 leading-relaxed">
                Navigate the complex digital asset landscape with confidence
                through our personalized advisory services. Our consultants
                provide tailored guidance on investment strategies, regulatory
                compliance, and technological integration.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "One-on-one sessions with digital asset experts",
                  "Personalized investment strategy development",
                  "Technical implementation guidance for businesses",
                  "Regular market updates and opportunity alerts",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-indigo-100/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/services/coaching-consulting"
                className="inline-flex items-center text-indigo-300 hover:text-purple-300 font-medium transition-colors"
              >
                Learn about our coaching programs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 blur-2xl"></div>
              <div className="relative glass-panel p-8 rounded-xl">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 backdrop-blur-sm">
                    <BookOpen className="h-8 w-8 text-purple-300" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-purple-500/10 to-transparent"></div>
                    <h4 className="text-indigo-100 font-medium mb-2">
                      Beginner Package
                    </h4>
                    <p className="text-indigo-200/60 text-sm mb-3">
                      Fundamentals of digital assets and investment principles
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-indigo-300/70">4 Weeks</span>
                      <span className="text-purple-300 font-medium">$799</span>
                    </div>
                  </div>

                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-purple-500/10 to-transparent"></div>
                    <h4 className="text-indigo-100 font-medium mb-2">
                      Advanced Strategy
                    </h4>
                    <p className="text-indigo-200/60 text-sm mb-3">
                      Technical analysis, portfolio optimization, DeFi
                      strategies
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-indigo-300/70">8 Weeks</span>
                      <span className="text-purple-300 font-medium">
                        $1,499
                      </span>
                    </div>
                  </div>

                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-purple-500/10 to-transparent"></div>
                    <h4 className="text-indigo-100 font-medium mb-2">
                      Corporate Training
                    </h4>
                    <p className="text-indigo-200/60 text-sm mb-3">
                      Customized enterprise solutions and team education
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-indigo-300/70">Custom</span>
                      <span className="text-purple-300 font-medium">
                        Contact Us
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* DLT Solutions */}
        <div className="mb-32">
          <motion.div
            className="grid md:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="order-2 md:order-1">
              <div className="relative glass-panel p-8 rounded-xl">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 backdrop-blur-sm">
                    <Globe className="h-8 w-8 text-purple-300" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg border border-indigo-500/20 bg-indigo-900/20 text-center">
                      <h5 className="text-indigo-100 font-medium mb-1">
                        Smart Contracts
                      </h5>
                      <div className="text-3xl font-bold text-gradient-secondary mb-1">
                        100+
                      </div>
                      <p className="text-indigo-200/60 text-xs">
                        Deployed Solutions
                      </p>
                    </div>

                    <div className="p-4 rounded-lg border border-indigo-500/20 bg-indigo-900/20 text-center">
                      <h5 className="text-indigo-100 font-medium mb-1">
                        Integration
                      </h5>
                      <div className="text-3xl font-bold text-gradient-secondary mb-1">
                        20+
                      </div>
                      <p className="text-indigo-200/60 text-xs">
                        Supported Chains
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-indigo-100/80">
                        Enterprise Solutions
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-full ${
                              i < 5 ? "bg-purple-500/70" : "bg-indigo-900/40"
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-indigo-100/80">Tokenization</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-full ${
                              i < 4 ? "bg-purple-500/70" : "bg-indigo-900/40"
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-indigo-100/80">
                        NFT Development
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-full ${
                              i < 5 ? "bg-purple-500/70" : "bg-indigo-900/40"
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-indigo-100/80">
                        DeFi Integration
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-full ${
                              i < 4 ? "bg-purple-500/70" : "bg-indigo-900/40"
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider">
                Technology Solutions
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
                DLT Protocols
              </h2>
              <p className="text-indigo-100/80 mb-6 leading-relaxed">
                Harness the power of distributed ledger technology for your
                business with our custom development services. From smart
                contracts to full-scale decentralized applications, we build
                secure and scalable solutions.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Custom smart contract development and auditing",
                  "Tokenization of assets for improved liquidity",
                  "Enterprise blockchain implementation and integration",
                  "NFT marketplace creation and curation",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-indigo-100/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/services/dlt-solutions"
                className="inline-flex items-center text-indigo-300 hover:text-purple-300 font-medium transition-colors"
              >
                Discover our technology solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Media Curation */}
        <div>
          <motion.div
            className="grid md:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div>
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider">
                Content Solutions
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
                Digital Asset Media
              </h2>
              <p className="text-indigo-100/80 mb-6 leading-relaxed">
                Stay informed with our expertly curated media content on digital
                assets and DLT. We filter through the noise to bring you
                relevant, accurate, and actionable information tailored to your
                interests and investment strategy.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Curated content delivered to your inbox weekly",
                  "In-depth analysis of market trends and opportunities",
                  "Educational resources for continuous learning",
                  "Exclusive interviews with industry leaders",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-indigo-100/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/services/media-curation"
                className="inline-flex items-center text-indigo-300 hover:text-purple-300 font-medium transition-colors"
              >
                Explore our media services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 blur-2xl"></div>
              <div className="relative glass-panel p-8 rounded-xl">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 backdrop-blur-sm">
                    <Film className="h-8 w-8 text-purple-300" />
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="bg-indigo-900/50 p-1.5 rounded mr-3">
                        <svg
                          width="16"
                          height="16"
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
                            d="M10 8L16 12L10 16V8Z"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-indigo-100 font-medium mb-1">
                          Weekly Market Updates
                        </h4>
                        <p className="text-indigo-200/60 text-sm">
                          15-minute video briefings on market movements
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="bg-indigo-900/50 p-1.5 rounded mr-3">
                        <svg
                          width="16"
                          height="16"
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
                            d="M10 7L15 12L10 17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-indigo-100 font-medium mb-1">
                          Deep Dive Reports
                        </h4>
                        <p className="text-indigo-200/60 text-sm">
                          Comprehensive analysis of emerging opportunities
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="bg-indigo-900/50 p-1.5 rounded mr-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-indigo-100 font-medium mb-1">
                          Educational Library
                        </h4>
                        <p className="text-indigo-200/60 text-sm">
                          Growing collection of guides and tutorials
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-indigo-500/20">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        <span className="text-indigo-100">
                          3 Subscription Tiers
                        </span>
                      </div>
                      <span className="text-indigo-300 text-sm">
                        Starting at $29/mo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
