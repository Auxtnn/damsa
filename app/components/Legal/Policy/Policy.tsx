"use client";

import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-[#0A1128] text-indigo-100 px-6 py-16">
      <motion.div
        className="max-w-4xl mx-auto space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-300">
          Privacy Policy
        </h1>
        <p className="text-indigo-200 text-lg leading-relaxed">
          Your privacy is important to us. This policy outlines how we collect,
          use, and protect your information when you use our services.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-indigo-100">
              1. Information We Collect
            </h2>
            <p className="text-indigo-300/80 mt-2">
              We may collect personal data such as your name, email, wallet
              address, and usage data to provide better services and secure
              transactions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-100">
              2. How We Use Information
            </h2>
            <p className="text-indigo-300/80 mt-2">
              Information is used to personalize your experience, provide
              support, and ensure platform integrity. We do not sell or share
              your data without consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-100">
              3. Data Protection
            </h2>
            <p className="text-indigo-300/80 mt-2">
              We implement industry-standard security measures to protect your
              data from unauthorized access, disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-100">
              4. Third-Party Services
            </h2>
            <p className="text-indigo-300/80 mt-2">
              We may use trusted third-party services for analytics and
              blockchain integration. Their use of your data is governed by
              their privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-100">
              5. Updates to This Policy
            </h2>
            <p className="text-indigo-300/80 mt-2">
              We may update this Privacy Policy periodically. We encourage you
              to review it regularly.
            </p>
          </div>
        </div>

        <p className="text-sm text-indigo-400/70 pt-10 text-center">
          Last updated: April 21, 2025
        </p>
      </motion.div>
    </section>
  );
};

export default PrivacyPolicy;
