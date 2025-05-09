"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowUpRight,
  Globe,
  Shield,
} from "lucide-react";
import { FaTelegram } from "react-icons/fa6";
import DAMSALogo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#070d1f] border-t border-indigo-500/10">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] to-[#070d1f]"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-10"></div>

        {/* Glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-900/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 group">
              <DAMSALogo />
            </div>

            <p className="text-indigo-100/60 leading-relaxed">
              Leveraging Digital Asset & Protocols to create a better future for
              everyone.
            </p>

            <div className="flex space-x-5">
              {[
                {
                  icon: <Twitter size={18} />,
                  href: "https://x.com/damsa_jr?s=21",
                  color: "hover:text-indigo-400 hover:border-indigo-400",
                },
                {
                  icon: <Instagram size={18} />,
                  href: "https://www.instagram.com/digitalmerxhant?igsh=YnQ5czRyempia3V5&utm_source=qr",
                  color: "hover:text-purple-400 hover:border-purple-400",
                },
                {
                  icon: <FaTelegram size={18} />,
                  href: "https://t.me/+2348036441014",
                  color: "hover:text-blue-500 hover:border-blue-500",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded-full border border-indigo-500/30 flex items-center justify-center text-indigo-300/80 ${social.color} transition-colors duration-300`}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-indigo-100 font-semibold text-lg mb-6 relative inline-block">
              Quick Links
              <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-indigo-500 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },

                { label: "Contact", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-indigo-200/60 hover:text-purple-300 transition-colors flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 mr-2.5 group-hover:bg-purple-400 transition-colors"></div>
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  className="text-indigo-200/60 hover:text-purple-300 transition-colors flex items-center group"
                  target="_blank"
                  href="https://t.me/+AwRR3CM2LcU1ZjY0"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 mr-2.5 group-hover:bg-purple-400 transition-colors"></div>
                  Join Community
                  <ArrowUpRight
                    size={12}
                    className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-indigo-100 font-semibold text-lg mb-6 relative inline-block">
              Our Services
              <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-indigo-500 to-transparent"></div>
            </h3>
            <ul className="space-y-3">
              {[
                {
                  label: "Portfolio Development",
                  href: "/services/portfolio-investment",
                },
                {
                  label: "Merchant Services",
                  href: "/services/merchant-services",
                },
                {
                  label: "Coaching & Consulting",
                  href: "/services/coaching-consulting",
                },
                { label: "DLT Protocols", href: "/services/dlt-solutions" },
                {
                  label: "Digital Asset Media",
                  href: "/services/media-curation",
                },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-indigo-200/60 hover:text-purple-300 transition-colors flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 mr-2.5 group-hover:bg-purple-400 transition-colors"></div>
                    {service.label}
                    <ArrowUpRight
                      size={12}
                      className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-indigo-100 font-semibold text-lg mb-6 relative inline-block">
              Contact Us
              <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-indigo-500 to-transparent"></div>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-full bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center mr-3 text-indigo-300 group-hover:border-indigo-400 transition-colors">
                  <Mail size={15} />
                </div>
                <div>
                  <p className="text-xs text-indigo-300/50 mb-1">Email Us</p>
                  <a
                    href="mailto:info@damsa.network"
                    className="text-indigo-200/80 hover:text-purple-300 transition-colors"
                  >
                    info@damsa.network
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Section - Partner Logos */}
        <div className="border-t border-indigo-500/10 py-8 mb-8">
          <div className="text-center mb-6">
            <span className="text-xs font-medium text-indigo-300/60 uppercase tracking-wider">
              Affiliate Partners
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            {[
              "Gradient",
              "Teneo",
              "Natix",
              "Silencio",
              "Grass",
              "Denet",
              "Acurast",
              "Nodle",
            ].map((partner, i) => (
              <div key={i} className="text-indigo-100/70 text-sm font-medium">
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-indigo-500/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="flex space-x-3 items-center mr-6">
              <Shield size={16} className="text-indigo-500/60" />
              <span className="text-indigo-200/60 text-sm">
                Secure & Trusted
              </span>
            </div>
            <div className="flex space-x-3 items-center">
              <Globe size={16} className="text-indigo-500/60" />
              <span className="text-indigo-200/60 text-sm">Global Network</span>
            </div>
          </div>

          <p className="text-indigo-300/40 text-sm">
            &copy; {new Date().getFullYear()} DAMSA. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              { label: "Privacy", href: "/privacy-policy" },
              { label: "Terms", href: "/terms" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-indigo-300/50 hover:text-indigo-200 text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
