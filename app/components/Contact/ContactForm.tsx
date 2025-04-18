"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  User,
  Mail,
  Phone,
  MessageSquare,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null,
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, error: null });

    // Simulate form submission with timeout
    setTimeout(() => {
      setFormStatus({ submitted: true, submitting: false, error: null });
      // Reset form after submission (optional)
      // setFormState({ name: "", email: "", phone: "", subject: "", message: "", service: "" });
    }, 1500);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#0A1128] z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#1A1A40]/70 to-[#0A1128] opacity-80"></div>

        {/* Subtle pattern */}
        <div className="absolute inset-0 cyber-dots opacity-10"></div>

        {/* Animated gradient */}
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-900/10 blur-3xl"
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="lg:w-11/12 container  mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-panel rounded-2xl p-8 sm:p-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gradient-primary">
              Send Us a Message
            </h2>

            <p className="text-indigo-100/70 mb-8">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>

            {formStatus.submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-100">
                  Message Sent Successfully!
                </h3>
                <p className="text-indigo-200/60 mb-6">
                  Thank you for reaching out. We'll be in touch with you
                  shortly.
                </p>
                <button
                  onClick={() =>
                    setFormStatus({
                      submitted: false,
                      submitting: false,
                      error: null,
                    })
                  }
                  className="text-indigo-300 hover:text-indigo-100 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="relative">
                    <label className="text-sm font-medium text-indigo-200 mb-1 block">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-indigo-900/20 border border-indigo-500/30 text-indigo-100 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 pl-10"
                        placeholder="John Doe"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400">
                        <User size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <label className="text-sm font-medium text-indigo-200 mb-1 block">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-indigo-900/20 border border-indigo-500/30 text-indigo-100 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 pl-10"
                        placeholder="your@email.com"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400">
                        <Mail size={16} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone field */}
                  <div className="relative">
                    <label className="text-sm font-medium text-indigo-200 mb-1 block">
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full bg-indigo-900/20 border border-indigo-500/30 text-indigo-100 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 pl-10"
                        placeholder="+1 (123) 456-7890"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400">
                        <Phone size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Service dropdown */}
                  <div className="relative">
                    <label className="text-sm font-medium text-indigo-200 mb-1 block">
                      Service Interest
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full bg-indigo-900/20  border border-indigo-500/30 text-indigo-100 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 appearance-none pl-10"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option className="text-black" value="portfolio">
                          Portfolio Investment
                        </option>
                        <option className="text-black" value="merchant">
                          Merchant Services
                        </option>
                        <option className="text-black" value="coaching">
                          Coaching & Consulting
                        </option>
                        <option className="text-black" value="dlt">
                          DLT Solutions
                        </option>
                        <option className="text-black" value="media">
                          Media Curation
                        </option>
                      </select>
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400">
                        <BriefcaseBusiness size={16} />
                      </div>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-400 pointer-events-none">
                        <svg
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subject field */}
                <div className="relative">
                  <label className="text-sm font-medium text-indigo-200 mb-1 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-indigo-900/20 border border-indigo-500/30 text-indigo-100 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500"
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Message field */}
                <div className="relative">
                  <label className="text-sm font-medium text-indigo-200 mb-1 block">
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-indigo-900/20 border border-indigo-500/30 text-indigo-100 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 pl-10"
                      placeholder="Tell us about your project or questions..."
                    ></textarea>
                    <div className="absolute left-3 top-6 text-indigo-400">
                      <MessageSquare size={16} />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className="group relative w-full inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/30 disabled:opacity-70"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {formStatus.submitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right Column - Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            {/* FAQ Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gradient-secondary">
                Frequently Asked Questions
              </h3>

              <div className="space-y-6">
                {[
                  {
                    question: "How quickly can I start investing?",
                    answer:
                      "Once you complete our onboarding process, you can start investing in digital assets within 24-48 hours. Our team will guide you through each step.",
                  },
                  {
                    question: "What is the minimum investment?",
                    answer:
                      "Our entry-level portfolios start at $1,000, but we work with clients at all levels. We'll create a customized strategy based on your resources.",
                  },
                  {
                    question: "How do you ensure security?",
                    answer:
                      "We implement industry-leading security practices including multi-signature wallets, cold storage solutions, and regular security audits to protect your assets.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="glass-panel p-6 rounded-xl">
                    <h4 className="text-lg font-semibold mb-3 text-indigo-100">
                      {faq.question}
                    </h4>
                    <p className="text-indigo-200/60">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-panel p-8 rounded-xl relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-indigo-500/20">
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

              <p className="text-indigo-100/90 mb-6 leading-relaxed italic text-lg relative">
                "Working with DAMSA transformed my understanding of digital
                assets. Their team provided clear guidance and helped me build a
                portfolio that generates consistent returns."
              </p>

              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-70"></div>
                  <div className="w-full h-full flex items-center justify-center text-white font-medium">
                    M
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-indigo-100">
                    Michael Roberts
                  </h4>
                  <p className="text-sm text-indigo-300/60">
                    Client since 2022
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section - Office Hours */}
        <motion.div
          className="mt-16 glass-panel p-8 rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-block mb-4">
            <Sparkles className="h-6 w-6 text-indigo-400" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-indigo-100">
            Office Hours
          </h3>
          <p className="text-indigo-200/70 max-w-2xl mx-auto">
            Our team is available Monday through Friday, 9:00 AM - 6:00 PM EST.
            Weekend consultations available by appointment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
