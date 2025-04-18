"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  DollarSign,
  CreditCard,
  BarChart4,
  Wallet,
  ArrowRight,
  CheckCircle,
  Globe,
  ArrowDownUp,
  ShieldCheck,
  LineChart,
  Zap,
} from "lucide-react";

export default function MerchantServicesPage() {
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
            Payment Solutions
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl space-x-3 font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient-primary">Merchant</span>

            <span className="text-white">Services</span>
          </motion.h1>

          <motion.p
            className="text-xl text-indigo-100/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Seamlessly integrate digital asset payments into your business with
            our secure, low-fee merchant solutions. Transform how your business
            handles transactions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a
              href="#payment-processing"
              className="px-6 py-2 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-indigo-200 hover:bg-indigo-900/50 hover:border-indigo-400/50 transition-all"
            >
              Payment Processing
            </a>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
          <div className="absolute inset-0 cyber-dots opacity-10"></div>
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
              Key Benefits
            </h2>
            <p className="text-indigo-100/80 max-w-3xl mx-auto">
              Our merchant services provide businesses with powerful tools to
              accept, manage, and optimize digital asset payments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Lower Transaction Fees",
                description:
                  "Save up to 70% compared to traditional payment processors with our competitive fee structure",
                icon: <DollarSign className="h-6 w-6" />,
                color: "from-indigo-600 to-blue-500",
              },
              {
                title: "Global Reach",
                description:
                  "Accept payments from customers worldwide without currency conversion fees or international restrictions",
                icon: <Globe className="h-6 w-6" />,
                color: "from-purple-600 to-indigo-600",
              },
              {
                title: "Fast Settlement",
                description:
                  "Receive funds in your preferred currency within 24 hours, or maintain a balance in digital assets",
                icon: <Zap className="h-6 w-6" />,
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

      {/* Payment Processing Section */}
      <section
        id="payment-processing"
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
            <div>
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider">
                Core Features
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
                Payment Processing
              </h2>
              <p className="text-indigo-100/80 mb-8 leading-relaxed">
                Our payment processing system allows businesses to accept
                multiple digital currencies with ease. With robust security
                measures and flexible settlement options, you can focus on
                growing your business while we handle the technical details.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Multiple Currency Support",
                    description:
                      "Accept payments in Bitcoin, Ethereum, USDC, and 30+ other digital assets",
                  },
                  {
                    title: "Flexible Settlement Options",
                    description:
                      "Choose to receive funds in your preferred fiat currency or keep them as digital assets",
                  },
                  {
                    title: "Detailed Transaction Reporting",
                    description:
                      "Access comprehensive analytics and reporting tools for financial management",
                  },
                  {
                    title: "Automated Tax Documentation",
                    description:
                      "Simplify compliance with automated transaction categorization and reporting",
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
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 blur-2xl"></div>
              <div className="relative glass-panel p-8 rounded-xl">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 backdrop-blur-sm">
                    <CreditCard className="h-8 w-8 text-purple-300" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-6 text-center text-indigo-100">
                  Supported Cryptocurrencies
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      name: "Bitcoin (BTC)",
                      icon: "₿",
                      color: "bg-orange-500",
                    },
                    {
                      name: "Ethereum (ETH)",
                      icon: "Ξ",
                      color: "bg-indigo-400",
                    },
                    { name: "USDC", icon: "$", color: "bg-blue-500" },
                    { name: "Solana (SOL)", icon: "◎", color: "bg-purple-500" },
                    { name: "Cardano (ADA)", icon: "₳", color: "bg-blue-600" },
                    {
                      name: "Polygon (MATIC)",
                      icon: "Ⓜ",
                      color: "bg-purple-600",
                    },
                    { name: "Polkadot (DOT)", icon: "●", color: "bg-pink-500" },
                    {
                      name: "Avalanche (AVAX)",
                      icon: "▲",
                      color: "bg-red-500",
                    },
                  ].map((currency, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 rounded-lg bg-indigo-900/30 border border-indigo-500/20"
                    >
                      <div
                        className={`w-8 h-8 rounded-full ${currency.color} flex items-center justify-center text-white font-bold mr-3`}
                      >
                        {currency.icon}
                      </div>
                      <span className="text-indigo-100 text-sm">
                        {currency.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-6">
                  <span className="px-3 py-1 rounded-full bg-indigo-900/40 border border-indigo-500/20 text-indigo-200 text-xs">
                    30+ more currencies supported
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
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
              Enterprise-Grade Security
            </h2>
            <p className="text-indigo-100/80 max-w-3xl mx-auto">
              We implement rigorous security measures to protect your business
              and your customers. Our multi-layered approach ensures
              transactions are processed securely and reliably.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "End-to-End Encryption",
                description:
                  "All data is encrypted in transit and at rest using AES-256 encryption",
                icon: <ShieldCheck className="h-6 w-6" />,
              },
              {
                title: "Fraud Prevention",
                description:
                  "Advanced AI-powered system to detect and prevent fraudulent transactions",
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                ),
              },
              {
                title: "Compliance Standards",
                description:
                  "Adherence to SOC 2, PCI DSS, and GDPR requirements for data handling",
                icon: (
                  <svg
                    width="24"
                    height="24"
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
                ),
              },
              {
                title: "99.99% Uptime",
                description:
                  "Reliable infrastructure with redundant systems for continuous operation",
                icon: (
                  <svg
                    width="24"
                    height="24"
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
                ),
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-xl"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center text-purple-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center text-indigo-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-indigo-200/70 text-center text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Client Success Stories
            </h2>
            <p className="text-indigo-100/80 max-w-3xl mx-auto">
              See how businesses are transforming their payment processes with
              our merchant services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Implementing DAMSA's merchant services increased our conversion rate by 15% and opened our business to global customers we couldn't reach before.",
                author: "Sarah Chen",
                company: "TechNova Solutions",
                image: "/images/team.jpg", // This would be replaced with actual image path
              },
              {
                quote:
                  "The analytics dashboard provides invaluable insights that have helped us optimize our pricing strategy and increase our average order value by 22%.",
                author: "Michael Rodriguez",
                company: "Global Commerce",
                image: "/images/team.jpg", // This would be replaced with actual image path
              },
              {
                quote:
                  "The security features give us peace of mind, and the low transaction fees have saved us thousands compared to traditional payment processors.",
                author: "Jessica Wong",
                company: "Artemis Apparel",
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
                    {/* In a real implementation, would use an actual image: */}
                    {/* <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" /> */}
                  </div>
                  <div>
                    <h4 className="text-indigo-100 font-medium">
                      {testimonial.author}
                    </h4>
                    <p className="text-indigo-200/60 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4  relative z-10">
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
              Get answers to common questions about our merchant services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question:
                  "How quickly can I start accepting digital asset payments?",
                answer:
                  "With our no-code solutions, you can be up and running within 24 hours. Simply create an account, complete the verification process, and integrate a payment button or link on your website. Custom API integrations typically take 3-5 business days to implement.",
              },
              {
                question: "What digital assets do you support?",
                answer:
                  "We currently support over 30 digital assets, including Bitcoin, Ethereum, USDC, Solana, Cardano, Polygon, Polkadot, Avalanche, and many more. Our team continually evaluates and adds support for new assets based on market demand and stability.",
              },
              {
                question: "How do settlements work?",
                answer:
                  "You can choose to have funds settled in your preferred fiat currency (USD, EUR, GBP, etc.) or keep them in the original digital asset. Fiat settlements are processed daily with funds typically appearing in your bank account within 1-2 business days. There is no settlement fee for digital asset settlements.",
              },
              {
                question: "Is there a minimum processing volume requirement?",
                answer:
                  "No, there is no minimum processing volume requirement. Our plans are designed to accommodate businesses of all sizes, from small startups to large enterprises. You only pay for what you process, with no hidden fees or minimums.",
              },
              {
                question: "How do you handle chargebacks?",
                answer:
                  "One of the benefits of digital asset payments is that they are non-reversible, eliminating traditional chargebacks. However, we do offer dispute resolution services for customers and merchants to address any issues that may arise with transactions.",
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
          className="max-w-4xl mx-auto px-4  relative z-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center mb-6">
            <Wallet className="h-6 w-6 text-purple-400 mr-2" />
            <span className="text-indigo-100 font-medium">
              Join 2,500+ businesses accepting digital assets
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
            Ready to Transform Your Payment Processing?
          </h2>

          <p className="text-xl text-indigo-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Start accepting digital asset payments today and unlock new revenue
            streams while reducing processing costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/signup"
              className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/30"
            >
              <span className="relative z-10 flex items-center justify-center">
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>

            <a
              href="/contact"
              className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg bg-transparent border border-indigo-500/30 text-indigo-200 font-medium backdrop-blur-sm hover:border-indigo-400/50 transition-all"
            >
              <span className="relative z-10 flex items-center justify-center">
                Contact Sales
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
