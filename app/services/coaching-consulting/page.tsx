"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  GraduationCap,
  BrainCircuit,
  ArrowRight,
  CheckCircle,
  Calendar,
  FileText,
  Video,
  PersonStanding,
  Building,
  BadgeCheck,
} from "lucide-react";

export default function CoachingConsultingPage() {
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
            Educational Services
          </motion.div>

          <motion.h1
            className="text-4xl space-x-3 sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient-primary">Coaching &</span>

            <span className="text-white">Consulting</span>
          </motion.h1>

          <motion.p
            className="text-xl text-indigo-100/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Navigate the complex digital asset landscape with confidence through
            our personalized advisory services and educational programs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a
              href="#individual-coaching"
              className="px-6 py-2 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-indigo-200 hover:bg-indigo-900/50 hover:border-indigo-400/50 transition-all"
            >
              Individual Coaching
            </a>
            <a
              href="#corporate-training"
              className="px-6 py-2 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-indigo-200 hover:bg-indigo-900/50 hover:border-indigo-400/50 transition-all"
            >
              Corporate Training
            </a>
            <a
              href="#educational-resources"
              className="px-6 py-2 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-indigo-200 hover:bg-indigo-900/50 hover:border-indigo-400/50 transition-all"
            >
              Educational Resources
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

        <div className=" mx-auto px-4 lg:w-11/12 container relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
              Why Choose Our Coaching Services
            </h2>
            <p className="text-indigo-100/80 max-w-3xl mx-auto">
              Our expert coaching and consulting programs provide the knowledge,
              strategies, and support you need to navigate the digital asset
              ecosystem with confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Guidance",
                description:
                  "Learn from seasoned professionals with years of experience in digital assets and blockchain technology",
                icon: <GraduationCap className="h-6 w-6" />,
                color: "from-indigo-600 to-blue-500",
              },
              {
                title: "Personalized Approach",
                description:
                  "Tailored coaching sessions and curriculum designed to meet your specific goals and knowledge level",
                icon: <PersonStanding className="h-6 w-6" />,
                color: "from-purple-600 to-indigo-600",
              },
              {
                title: "Practical Applications",
                description:
                  "Learn actionable strategies and techniques that you can implement immediately for real-world results",
                icon: <BrainCircuit className="h-6 w-6" />,
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

      {/* Individual Coaching Section */}
      <section
        id="individual-coaching"
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
                Personal Development
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
                Individual Coaching
              </h2>
              <p className="text-indigo-100/80 mb-8 leading-relaxed">
                Our one-on-one coaching sessions are designed to provide
                personalized guidance tailored to your specific goals,
                experience level, and learning style. Whether you're a complete
                beginner or an experienced investor, our expert coaches will
                help you navigate the digital asset landscape with confidence.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Customized Learning Path",
                    description:
                      "A personalized curriculum designed specifically for your goals and knowledge level",
                  },
                  {
                    title: "Private 1-on-1 Sessions",
                    description:
                      "Direct access to expert coaches for personalized guidance and feedback",
                  },
                  {
                    title: "Flexible Scheduling",
                    description:
                      "Book sessions at times that fit your schedule, with both virtual and in-person options",
                  },
                  {
                    title: "Ongoing Support",
                    description:
                      "Access to resources and support between sessions to ensure continuous progress",
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
                    Schedule a Free Consultation
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
                    <BookOpen className="h-8 w-8 text-purple-300" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-6 text-center text-indigo-100">
                  Coaching Programs
                </h3>

                <div className="space-y-6">
                  {/* Free Course Card */}
                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-purple-500/10 to-transparent"></div>
                    <div className="absolute -right-1 -top-1">
                      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-bold px-3 py-1 transform rotate-0 translate-x-2 -translate-y-0">
                        FREE
                      </div>
                    </div>
                    <h4 className="text-indigo-100 font-medium mb-2">
                      Introduction to Digital Assets
                    </h4>
                    <p className="text-indigo-200/60 text-sm mb-3">
                      Essential concepts, blockchain basics, and basic wallet
                      setup
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-indigo-300/70 text-sm">
                          2 Weeks
                        </span>
                        <div className="flex items-center text-xs text-indigo-200/50 mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>4 Sessions</span>
                        </div>
                      </div>
                      <span className="text-green-400 font-medium">FREE</span>
                    </div>
                  </div>
                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-purple-500/10 to-transparent"></div>
                    <h4 className="text-indigo-100 font-medium mb-2">
                      Beginner Package
                    </h4>
                    <p className="text-indigo-200/60 text-sm mb-3">
                      Fundamentals of digital assets, investment basics, and
                      market understanding
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-indigo-300/70 text-sm">
                          4 Weeks
                        </span>
                        <div className="flex items-center text-xs text-indigo-200/50 mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>8 Sessions</span>
                        </div>
                      </div>
                      <span className="text-purple-300 font-medium">$150</span>
                    </div>
                  </div>

                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-purple-500/10 to-transparent"></div>
                    <div className="absolute -right-1 -top-1">
                      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 transform rotate-0 translate-x-2 -translate-y-0">
                        POPULAR
                      </div>
                    </div>
                    <h4 className="text-indigo-100 font-medium mb-2">
                      Advanced Strategy
                    </h4>
                    <p className="text-indigo-200/60 text-sm mb-3">
                      Technical analysis, portfolio optimization, DeFi
                      strategies
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-indigo-300/70 text-sm">
                          8 Weeks
                        </span>
                        <div className="flex items-center text-xs text-indigo-200/50 mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>16 Sessions</span>
                        </div>
                      </div>
                      <span className="text-purple-300 font-medium">$650</span>
                    </div>
                  </div>

                  <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-lg p-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-purple-500/10 to-transparent"></div>
                    <h4 className="text-indigo-100 font-medium mb-2">
                      Mastery Program
                    </h4>
                    <p className="text-indigo-200/60 text-sm mb-3">
                      Advanced trading, market analysis, and wealth preservation
                      strategies
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-indigo-300/70 text-sm">
                          12 Weeks
                        </span>
                        <div className="flex items-center text-xs text-indigo-200/50 mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>24 Sessions</span>
                        </div>
                      </div>
                      <span className="text-purple-300 font-medium">
                        $1,250
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <span className="px-3 py-1 rounded-full bg-indigo-900/40 border border-indigo-500/20 text-indigo-200 text-xs">
                    All packages include learning materials and certification
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Training Section */}
      <section
        id="corporate-training"
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
                    <Building className="h-8 w-8 text-purple-300" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-6 text-center text-indigo-100">
                  Training Solutions
                </h3>

                <div className="space-y-6">
                  <div className="p-4 rounded-lg border border-indigo-500/20 bg-indigo-900/20">
                    <div className="flex items-start">
                      <div className="p-2 rounded-md bg-indigo-900/50 mr-4 flex-shrink-0">
                        <Users className="h-5 w-5 text-indigo-300" />
                      </div>
                      <div>
                        <h4 className="text-indigo-100 font-medium mb-1">
                          Team Workshops
                        </h4>
                        <p className="text-indigo-200/60 text-sm">
                          Interactive sessions for teams of 5-20 people focusing
                          on practical applications
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-indigo-500/20 bg-indigo-900/20">
                    <div className="flex items-start">
                      <div className="p-2 rounded-md bg-indigo-900/50 mr-4 flex-shrink-0">
                        <FileText className="h-5 w-5 text-indigo-300" />
                      </div>
                      <div>
                        <h4 className="text-indigo-100 font-medium mb-1">
                          Custom Curriculum
                        </h4>
                        <p className="text-indigo-200/60 text-sm">
                          Tailored educational content aligned with your
                          organization's goals and industry
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-indigo-500/20 bg-indigo-900/20">
                    <div className="flex items-start">
                      <div className="p-2 rounded-md bg-indigo-900/50 mr-4 flex-shrink-0">
                        <Video className="h-5 w-5 text-indigo-300" />
                      </div>
                      <div>
                        <h4 className="text-indigo-100 font-medium mb-1">
                          Webinar Series
                        </h4>
                        <p className="text-indigo-200/60 text-sm">
                          Live and on-demand webinars for remote teams and
                          flexible learning schedules
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-indigo-500/20 bg-indigo-900/20">
                    <div className="flex items-start">
                      <div className="p-2 rounded-md bg-indigo-900/50 mr-4 flex-shrink-0">
                        <BadgeCheck className="h-5 w-5 text-indigo-300" />
                      </div>
                      <div>
                        <h4 className="text-indigo-100 font-medium mb-1">
                          Certification Program
                        </h4>
                        <p className="text-indigo-200/60 text-sm">
                          Company-wide certification programs with assessment
                          and progress tracking
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <span className="block text-indigo-300 mb-2">
                    Starting from
                  </span>
                  <span className="text-3xl font-bold text-gradient-primary">
                    $1,500
                  </span>
                  <span className="block text-indigo-200/60 text-sm mt-1">
                    Customized to your team size and needs
                  </span>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-wider">
                Organizational Development
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
                Corporate Training
              </h2>
              <p className="text-indigo-100/80 mb-8 leading-relaxed">
                Empower your team with the knowledge and skills needed to
                navigate the digital asset landscape. Our corporate training
                programs are customized to your organization's specific needs,
                industry context, and strategic objectives.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Customized Curriculum",
                    description:
                      "Training materials tailored to your industry, team's knowledge level, and business objectives",
                  },
                  {
                    title: "Flexible Delivery Options",
                    description:
                      "In-person workshops, virtual training sessions, or hybrid approaches to fit your team's schedule",
                  },
                  {
                    title: "Practical Application",
                    description:
                      "Hands-on exercises and real-world scenarios relevant to your business challenges",
                  },
                  {
                    title: "Progress Tracking",
                    description:
                      "Detailed assessments and progress reports to measure knowledge acquisition and ROI",
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
                    Request Corporate Training Info
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section
        id="educational-resources"
        className="relative py-12 overflow-hidden"
      >
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
              Educational Resources
            </h2>
            <p className="text-indigo-100/80 max-w-3xl mx-auto">
              Access a wealth of knowledge through our comprehensive library of
              educational resources, designed to help you build a solid
              foundation in digital assets and blockchain technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Asset Foundations",
                description:
                  "Comprehensive guide to understanding blockchain technology, cryptocurrencies, and the digital asset ecosystem",
                format: "Course",
                duration: "4 hours",
                level: "Beginner",
                image: "/resources/foundations.jpg", // This would be replaced with actual image path
              },
              {
                title: "Investment Strategy Masterclass",
                description:
                  "Learn proven strategies for building and managing a diversified digital asset portfolio",
                format: "Video Series",
                duration: "6 hours",
                level: "Intermediate",
                image: "/resources/investment.jpg", // This would be replaced with actual image path
              },
              {
                title: "DeFi Deep Dive",
                description:
                  "Explore the world of decentralized finance and learn how to leverage DeFi protocols for yield generation",
                format: "Workshop",
                duration: "8 hours",
                level: "Advanced",
                image: "/resources/defi.jpg", // This would be replaced with actual image path
              },
              {
                title: "NFT Essentials",
                description:
                  "Understanding non-fungible tokens and their applications in art, gaming, and beyond",
                format: "Guide",
                duration: "3 hours",
                level: "Beginner",
                image: "/resources/nft.jpg", // This would be replaced with actual image path
              },
              {
                title: "Technical Analysis Fundamentals",
                description:
                  "Master the basics of reading charts and identifying patterns for digital asset trading",
                format: "Course",
                duration: "5 hours",
                level: "Intermediate",
                image: "/resources/technical.jpg", // This would be replaced with actual image path
              },
              {
                title: "Regulatory Landscape",
                description:
                  "Navigate the evolving regulatory environment surrounding digital assets across major jurisdictions",
                format: "Whitepaper",
                duration: "2 hours",
                level: "All Levels",
                image: "/resources/regulatory.jpg", // This would be replaced with actual image path
              },
            ].map((resource, index) => (
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
                      <BookOpen className="h-8 w-8" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex justify-between">
                    <span className="px-2 py-1 rounded-md bg-indigo-900/70 backdrop-blur-sm border border-indigo-500/30 text-indigo-200 text-xs">
                      {resource.format}
                    </span>
                    <span className="px-2 py-1 rounded-md bg-indigo-900/70 backdrop-blur-sm border border-indigo-500/30 text-indigo-200 text-xs">
                      {resource.level}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-indigo-100 mb-2 group-hover:text-purple-300 transition-colors">
                    {resource.title}
                  </h3>

                  <p className="text-indigo-200/70 text-sm mb-4">
                    {resource.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-indigo-300/70 text-xs">
                      <svg
                        className="h-4 w-4 mr-1"
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
                          d="M12 6V12L16 14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{resource.duration}</span>
                    </div>

                    <a
                      href="https://t.me/+2348036441014"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-300 hover:text-purple-300 text-sm font-medium inline-flex items-center transition-colors"
                    >
                      Access Resource
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="#"
              className="inline-flex items-center text-indigo-300 hover:text-purple-300 font-medium transition-colors"
            >
              View All Educational Resources
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-12 overflow-hidden">
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
              Success Stories
            </h2>
            <p className="text-indigo-100/80 max-w-3xl mx-auto">
              See how our coaching and consulting services have helped
              individuals and organizations achieve their digital asset goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The personalized coaching program completely transformed my understanding of digital assets. Within months, I was confidently managing my own portfolio and seeing consistent returns.",
                author: "James Wilson",
                role: "Individual Investor",
                image: "/images/team.jpg", // This would be replaced with actual image path
              },
              {
                quote:
                  "DAMSA's corporate training gave our financial advisory team the edge we needed in the digital asset space. Their customized curriculum addressed exactly what we needed to serve our clients better.",
                author: "Sophia Chen",
                role: "Director of Training, Global Wealth Partners",
                image: "/images/team.jpg", // This would be replaced with actual image path
              },
              {
                quote:
                  "The educational resources provided by DAMSA are comprehensive yet easy to understand. They've been invaluable in helping me navigate the complex world of DeFi and yield generation.",
                author: "Marcus Johnson",
                role: "Entrepreneur",
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

      {/* FAQ Section */}
      <section className="relative pb-20 pt-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1128] z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>
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
              Get answers to common questions about our coaching and consulting
              services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question:
                  "What experience level is required for your coaching programs?",
                answer:
                  "Our coaching programs are designed for all experience levels, from complete beginners to advanced practitioners. We tailor our approach to meet you where you are and help you progress at a comfortable pace. Each program begins with an assessment to understand your current knowledge and goals.",
              },
              {
                question: "How are the coaching sessions conducted?",
                answer:
                  "We offer both virtual and in-person coaching sessions, depending on your preference and location. Virtual sessions are conducted via secure video conferencing platforms, while in-person sessions can be arranged at our offices or a location of your choice in select cities.",
              },
              {
                question:
                  "What is the typical duration of a corporate training program?",
                answer:
                  "Corporate training programs typically range from one-day intensive workshops to comprehensive 8-week courses. The duration depends on your organization's goals, the depth of knowledge required, and the availability of your team. We customize each program to fit your specific needs and schedule.",
              },
              {
                question: "Do you offer group coaching discounts?",
                answer:
                  "Yes, we offer discounted rates for group coaching sessions. Groups of 3-5 individuals can receive a 15% discount, while groups of 6 or more receive a 25% discount. Group coaching can be a cost-effective way to learn while benefiting from diverse perspectives and collaborative problem-solving.",
              },
              {
                question:
                  "Is there a certification upon completion of the coaching programs?",
                answer:
                  "Yes, all participants who complete our structured coaching programs receive a DAMSA certification, which demonstrates their proficiency in digital asset management. Our certifications are recognized in the industry and can be a valuable addition to your professional credentials.",
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
            <GraduationCap className="h-6 w-6 text-purple-400 mr-2" />
            <span className="text-indigo-100 font-medium">
              Join 2,000+ satisfied clients
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient-primary">
            Ready to Master Digital Assets?
          </h2>

          <p className="text-xl text-indigo-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards building your expertise and confidence
            in the digital asset space. Schedule a consultation to discuss your
            goals and find the right program for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/30"
            >
              <span className="relative z-10 flex items-center justify-center">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>

            <a
              href="https://t.me/+2348036441014"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg bg-transparent border border-indigo-500/30 text-indigo-200 font-medium backdrop-blur-sm hover:border-indigo-400/50 transition-all"
            >
              <span className="relative z-10 flex items-center justify-center">
                Get Free Course
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
