"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Rocket } from "lucide-react";

// Define NavItem type
type NavItem = {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
};

// Navigation items
const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    subItems: [
      { label: "Portfolio Investment", href: "/services/portfolio-investment" },
      { label: "Merchant Services", href: "/services/merchant-services" },
      { label: "Coaching & Consulting", href: "/services/coaching-consulting" },
      { label: "DLT Solutions", href: "/services/dlt-solutions" },
      { label: "Media Curation", href: "/services/media-curation" },
    ],
  },
  { label: "Join Community", href: "#" },

  { label: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dropdown menu
  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A1128]/90 backdrop-blur-md py-3 shadow-lg shadow-indigo-900/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              className="relative w-10 h-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]"></div>
              <div className="absolute inset-0 bg-[#0A1128]/30 rounded-full border border-indigo-500/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-xl font-bold relative text-white flex">
                  <span>D</span>
                  <motion.span
                    className="text-purple-300"
                    animate={{
                      rotate: [0, 45, 45, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                    style={{
                      display: "inline-block",
                      transformOrigin: "center",
                    }}
                  >
                    A
                  </motion.span>
                </div>
              </div>
            </motion.div>
            <span className="text-white font-bold text-xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-purple-200">
              DAMSA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors ${
                        pathname === item.href
                          ? "text-purple-300 bg-indigo-900/20"
                          : "text-indigo-200/80 hover:text-white hover:bg-indigo-900/10"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`ml-1.5 transition-transform duration-200 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-1 w-60 backdrop-blur-xl bg-[#0A1128]/90 border border-indigo-500/20 rounded-lg shadow-xl shadow-purple-900/10 overflow-hidden z-20"
                        >
                          <div className="py-1">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className={`block px-4 py-2.5 text-sm ${
                                  pathname === subItem.href
                                    ? "text-purple-300 bg-indigo-900/30"
                                    : "text-indigo-200/70 hover:bg-indigo-900/20 hover:text-white"
                                } transition-colors duration-200`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      pathname === item.href
                        ? "text-purple-300 bg-indigo-900/20"
                        : "text-indigo-200/80 hover:text-white hover:bg-indigo-900/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="inline-flex items-center px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
            >
              Get Started
              <Rocket className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg border border-indigo-500/20 bg-indigo-900/10 backdrop-blur-sm text-indigo-200 hover:text-white hover:bg-indigo-900/20 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A1128]/95 backdrop-blur-md border-t border-indigo-500/10 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium flex justify-between items-center ${
                          pathname === item.href
                            ? "text-purple-300 bg-indigo-900/20"
                            : "text-indigo-200/80 hover:text-white hover:bg-indigo-900/10"
                        } transition-colors duration-200`}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transform transition-transform duration-300 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-1 ml-3 pl-3 border-l border-indigo-500/20 space-y-1"
                          >
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                                  pathname === subItem.href
                                    ? "text-purple-300 bg-indigo-900/20"
                                    : "text-indigo-200/70 hover:text-white hover:bg-indigo-900/10"
                                } transition-colors duration-200`}
                                onClick={closeMobileMenu}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                        pathname === item.href
                          ? "text-purple-300 bg-indigo-900/20"
                          : "text-indigo-200/80 hover:text-white hover:bg-indigo-900/10"
                      } transition-colors duration-200`}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-2">
                <a
                  href="/contact"
                  className="w-full block text-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
                  onClick={closeMobileMenu}
                >
                  Get Started
                  <Rocket className="ml-2 h-4 w-4 inline-block" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
