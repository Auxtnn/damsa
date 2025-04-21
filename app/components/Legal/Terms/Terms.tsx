"use client";

import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <section className="min-h-screen bg-[#0A1128] text-indigo-100 px-6 py-16">
      <motion.div
        className="max-w-4xl mx-auto space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-400">
          Terms of Service
        </h1>
        <p className="text-indigo-200 text-lg leading-relaxed">
          These Terms govern your use of our platform. By accessing or using our
          services, you agree to comply with them fully.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-indigo-100">
              1. Acceptance of Terms
            </h2>
            <p className="text-indigo-300/80 mt-2">
              By using DAMSA, you agree to these terms. If you disagree, please
              do not use the platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-100">
              2. Eligibility
            </h2>
            <p className="text-indigo-300/80 mt-2">
              You must be 18 years or older and legally able to enter into a
              contract to use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-100">
              3. User Responsibilities
            </h2>
            <p className="text-indigo-300/80 mt-2">
              You agree to use DAMSA lawfully, respect intellectual property,
              and maintain the security of your account and assets.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-100">
              4. Limitation of Liability
            </h2>
            <p className="text-indigo-300/80 mt-2">
              We are not liable for any damages or losses arising from your use
              of the platform or third-party integrations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-100">
              5. Termination
            </h2>
            <p className="text-indigo-300/80 mt-2">
              We reserve the right to suspend or terminate accounts that violate
              our terms without notice.
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

export default TermsOfService;
