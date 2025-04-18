"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  BarChart,
  PieChart,
  Shield,
  TrendingUp,
  Award,
  Users,
  ArrowRight,
  CheckCircle,
  Lock,
} from "lucide-react";

export default function PortfolioInvestmentPage() {
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
            Investment Solutions
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient-primary">Digital Asset</span>
            <br />
            <span className="text-white">Portfolio Investment</span>
          </motion.h1>

          <motion.p
            className="text-xl text-indigo-100/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Strategic portfolio management combining cutting-edge analytics with
            deep market expertise to maximize returns while mitigating risk in
            digital asset investments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a
              href="#investment-strategies"
              className="px-6 py-2 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-indigo-200 hover:bg-indigo-900/50 hover:border-indigo-400/50 transition-all"
            >
              Investment Strategies
            </a>
            <a
              href="#portfolio-types"
              className="px-6 py-2 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-indigo-200 hover:bg-indigo-900/50 hover:border-indigo-400/50 transition-all"
            >
              Portfolio Types
            </a>
            <a
              href="#risk-management"
              className="px-6 py-2 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-indigo-200 hover:bg-indigo-900/50 hover:border-indigo-400/50 transition-all"
            >
              Risk Management
            </a>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Performance Overview */}
      <section className="relative py-20 overflow-hidden">
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
              Portfolio Performance Overview
            </h2>
            <p className="text-indigo-100/80 max-w-3xl mx-auto">
              Our data-driven approach has consistently delivered impressive
              returns across various market conditions, outperforming
              traditional investment vehicles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Average Annual Return",
                value: "24.7%",
                icon: <TrendingUp className="h-6 w-6" />,
                detail: "Across all portfolio types",
                color: "from-indigo-600 to-blue-500",
              },
              {
                title: "Assets Under Management",
                value: "$42M+",
                icon: <BarChart className="h-6 w-6" />,
                detail: "Trusted by investors worldwide",
                color: "from-purple-600 to-indigo-600",
              },
              {
                title: "Client Satisfaction",
                value: "98%",
                icon: <Award className="h-6 w-6" />,
                detail: "Retention rate over 36 months",
                color: "from-fuchsia-500 to-purple-600",
              },
            ].map((stat, index) => (
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
                    className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${stat.color} bg-opacity-20 border border-indigo-500/30`}
                  >
                    <div className="text-indigo-100">{stat.icon}</div>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gradient-primary mb-2">
                  {stat.value}
                </h3>
                <p className="text-indigo-100 font-medium mb-1">{stat.title}</p>
                <p className="text-indigo-200/60 text-sm">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Strategies Section */}
      <section
        id="investment-strategies"
        className="relative py-12 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
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
                Our Approach
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
                Investment Strategies
              </h2>
              <p className="text-indigo-100/80 mb-8 leading-relaxed">
                We employ multiple investment strategies tailored to your risk
                tolerance and financial goals. Our approach combines fundamental
                analysis, technical analysis, and market sentiment to identify
                opportunities across the digital asset ecosystem.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Long-term Value Investing",
                    description:
                      "Identifying digital assets with strong fundamentals and holding for sustained growth",
                  },
                  {
                    title: "Yield Generation",
                    description:
                      "Strategic staking, lending, and liquidity provision to generate passive income",
                  },
                  {
                    title: "Strategic Trading",
                    description:
                      "Capitalizing on market inefficiencies with research-backed position entries and exits",
                  },
                  {
                    title: "Emerging Opportunities",
                    description:
                      "Early access to promising projects and new digital asset categories",
                  },
                ].map((strategy, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-indigo-100 font-medium mb-1">
                        {strategy.title}
                      </h3>
                      <p className="text-indigo-200/70">
                        {strategy.description}
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
                    <LineChart className="h-8 w-8 text-purple-300" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-6 text-center text-indigo-100">
                  Strategy Performance
                </h3>

                <div className="space-y-6">
                  <div className="p-4 rounded-lg border border-indigo-500/20 bg-indigo-900/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-indigo-100 font-medium">
                        Long-term Value
                      </span>
                      <span className="text-purple-300">
                        +168%{" "}
                        <span className="text-xs text-indigo-300/60">
                          (3yr)
                        </span>
                      </span>
                    </div>
                    <div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full"></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-indigo-500/20 bg-indigo-900/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-indigo-100 font-medium">
                        Yield Generation
                      </span>
                      <span className="text-purple-300">
                        +42%{" "}
                        <span className="text-xs text-indigo-300/60">
                          (annual)
                        </span>
                      </span>
                    </div>
                    <div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
                      <div className="h-full w-3/5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-indigo-500/20 bg-indigo-900/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-indigo-100 font-medium">
                        Strategic Trading
                      </span>
                      <span className="text-purple-300">
                        +89%{" "}
                        <span className="text-xs text-indigo-300/60">
                          (annual)
                        </span>
                      </span>
                    </div>
                    <div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
                      <div className="h-full w-2/5 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-indigo-500/20 bg-indigo-900/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-indigo-100 font-medium">
                        Emerging Opportunities
                      </span>
                      <span className="text-purple-300">
                        +215%{" "}
                        <span className="text-xs text-indigo-300/60">
                          (2yr)
                        </span>
                      </span>
                    </div>
                    <div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-indigo-200/60 text-sm italic">
                    Past performance is not indicative of future results.
                    Returns shown are average across client portfolios.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Types Section */}
      <section id="portfolio-types" className="relative py-12 overflow-hidden">
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
              Portfolio Types
            </h2>
            <p className="text-indigo-100/80 max-w-3xl mx-auto">
              We offer several portfolio types tailored to different risk
              profiles and investment goals. Each portfolio is customized to
              your unique situation and preferences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Conservative",
                description:
                  "Focused on capital preservation with moderate growth through established digital assets",
                riskLevel: "Low to Medium",
                targetReturn: "6-12% Annual",
                minInvestment: "$5,000",
                allocation: [
                  { asset: "Blue-chip cryptocurrencies", percentage: 60 },
                  { asset: "Stablecoins (yield)", percentage: 30 },
                  { asset: "Select altcoins", percentage: 10 },
                ],
                color: "from-indigo-600 to-blue-500",
                icon: <Shield className="h-6 w-6" />,
              },
              {
                title: "Balanced",
                description:
                  "Optimized for growth while maintaining reasonable risk exposure and downside protection",
                riskLevel: "Medium",
                targetReturn: "15-25% Annual",
                minInvestment: "$10,000",
                allocation: [
                  { asset: "Blue-chip cryptocurrencies", percentage: 40 },
                  { asset: "Mid-cap altcoins", percentage: 30 },
                  { asset: "DeFi yield strategies", percentage: 20 },
                  { asset: "Small-cap opportunities", percentage: 10 },
                ],
                color: "from-purple-600 to-indigo-600",
                icon: <PieChart className="h-6 w-6" />,
              },
              {
                title: "Growth",
                description:
                  "Maximizing returns through strategic positioning in high-potential digital assets",
                riskLevel: "Medium to High",
                targetReturn: "20-40%+ Annual",
                minInvestment: "$25,000",
                allocation: [
                  { asset: "Blue-chip cryptocurrencies", percentage: 30 },
                  { asset: "Mid-cap altcoins", percentage: 30 },
                  { asset: "Small-cap opportunities", percentage: 25 },
                  { asset: "Early-stage projects", percentage: 15 },
                ],
                color: "from-fuchsia-500 to-purple-600",
                icon: <TrendingUp className="h-6 w-6" />,
              },
            ].map((portfolio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass-panel rounded-xl overflow-hidden group hover-glow transition-all duration-500"
              >
                <div
                  className={`bg-gradient-to-r ${portfolio.color} p-6 relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 backdrop-blur-sm">
                      <div className="text-white">{portfolio.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white ml-3">
                      {portfolio.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-indigo-100/80 mb-6">
                    {portfolio.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-indigo-200/60">Risk Level:</span>
                      <span className="text-indigo-100">
                        {portfolio.riskLevel}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-indigo-200/60">Target Return:</span>
                      <span className="text-indigo-100">
                        {portfolio.targetReturn}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-indigo-200/60">
                        Min. Investment:
                      </span>
                      <span className="text-indigo-100">
                        {portfolio.minInvestment}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-indigo-100 font-medium mb-3">
                    Asset Allocation
                  </h4>
                  <div className="space-y-3">
                    {portfolio.allocation.map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-indigo-200/70">
                            {item.asset}
                          </span>
                          <span className="text-indigo-100">
                            {item.percentage}%
                          </span>
                        </div>
                        <div className="h-1.5 bg-indigo-900/50 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${portfolio.color} rounded-full`}
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <a
                      href="/contact"
                      className="inline-flex items-center text-indigo-300 hover:text-purple-300 font-medium transition-colors"
                    >
                      Get started with this portfolio
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management Section */}
      <section id="risk-management" className="relative py-12 overflow-hidden">
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
            <div className="order-2 md:order-1">
              <div className="relative glass-panel p-8 rounded-xl">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 backdrop-blur-sm">
                    <Lock className="h-8 w-8 text-purple-300" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-6 text-center text-indigo-100">
                  Security Measures
                </h3>

                <div className="space-y-4">
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
                          d="M12 16V12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 8H12.01"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-indigo-100 font-medium mb-1">
                        Multi-signature Security
                      </h4>
                      <p className="text-indigo-200/60 text-sm">
                        All withdrawals require multiple approvals to prevent
                        unauthorized access
                      </p>
                    </div>
                  </div>

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
                        24/7 Monitoring
                      </h4>
                      <p className="text-indigo-200/60 text-sm">
                        Continuous monitoring of market conditions and portfolio
                        performance
                      </p>
                    </div>
                  </div>

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
                          d="M16 8L8 16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 8L16 16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-indigo-100 font-medium mb-1">
                        Stop-Loss Protocols
                      </h4>
                      <p className="text-indigo-200/60 text-sm">
                        Automated risk management systems to limit downside
                        exposure
                      </p>
                    </div>
                  </div>

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
                          d="M3 3L21 21"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.584 10.587C10.2087 10.962 9.99775 11.4708 9.99756 12.0013C9.99737 12.5318 10.2079 13.0408 10.583 13.416C10.958 13.7912 11.4667 14.002 11.9971 14.0022C12.5275 14.0024 13.0364 13.7918 13.412 13.417"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17.357 17.349C15.726 18.449 13.942 19 12 19C8 19 4.667 16.667 2 12C2.778 10.639 3.612 9.476 4.5 8.512"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-indigo-100 font-medium mb-1">
                        Cold Storage
                      </h4>
                      <p className="text-indigo-200/60 text-sm">
                        Majority of assets held in offline wallets for maximum
                        security
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-indigo-200/60 text-sm">
                    Security is our top priority, with multiple layers of
                    protection for your assets.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider">
                Protection & Security
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
                Risk Management
              </h2>
              <p className="text-indigo-100/80 mb-8 leading-relaxed">
                We implement comprehensive risk management strategies to protect
                your portfolio from market volatility and other potential
                threats. Our multi-layered approach ensures that your digital
                assets are both secure and positioned for growth.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Strategic Diversification",
                    description:
                      "Spreading investments across multiple asset classes, protocols, and blockchain ecosystems to reduce concentration risk",
                  },
                  {
                    title: "Volatility Management",
                    description:
                      "Dynamic rebalancing based on market conditions to capture upside while limiting drawdowns",
                  },
                  {
                    title: "Liquidity Planning",
                    description:
                      "Ensuring appropriate liquidity levels to capitalize on opportunities and manage unexpected conditions",
                  },
                  {
                    title: "Regular Auditing",
                    description:
                      "Continuous assessment of portfolio performance, security, and alignment with investment goals",
                  },
                ].map((strategy, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-indigo-100 font-medium mb-1">
                        {strategy.title}
                      </h3>
                      <p className="text-indigo-200/70">
                        {strategy.description}
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
                    Schedule a Risk Assessment
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 overflow-hidden">
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
              Get answers to common questions about our portfolio investment
              services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What is the minimum investment required?",
                answer:
                  "Our minimum investment varies by portfolio type. Conservative portfolios start at $5,000, Balanced at $10,000, and Growth at $25,000. We can discuss options if these minimums present a challenge.",
              },
              {
                question: "How liquid are the investments?",
                answer:
                  "Most assets in our portfolios can be liquidated within 24-48 hours. Some yield-generating positions may have lock-up periods ranging from 7 to 30 days. We can customize your portfolio based on your liquidity needs.",
              },
              {
                question: "How are my digital assets secured?",
                answer:
                  "We implement institutional-grade security including multi-signature wallets, cold storage, and 24/7 monitoring. The majority of assets are kept in offline storage, with only working balances maintained in hot wallets.",
              },
              {
                question: "What fees are associated with your services?",
                answer:
                  "Our fee structure includes a 1.5% annual management fee and a 20% performance fee on profits above a predefined hurdle rate. We don't charge any hidden fees, and all costs are transparently disclosed.",
              },
              {
                question: "How frequently will I receive portfolio updates?",
                answer:
                  "Clients receive monthly comprehensive performance reports, weekly summary updates, and real-time alerts for significant market events. We also schedule quarterly strategy review calls to discuss performance and adjustments.",
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
      <section className="relative py-12 overflow-hidden">
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
            <Users className="h-6 w-6 text-purple-400 mr-2" />
            <span className="text-indigo-100 font-medium">
              Join 500+ investors who trust DAMSA
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
            Ready to Start Your Digital Asset Journey?
          </h2>

          <p className="text-xl text-indigo-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Schedule a free consultation with our portfolio experts to create a
            customized investment strategy tailored to your goals.
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
