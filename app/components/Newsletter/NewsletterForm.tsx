"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: "",
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!email) {
      setSubmitStatus({
        success: false,
        error: true,
        message: "Please enter your email address",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: false, error: false, message: "" });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          error: false,
          message: "Thank you for subscribing to our newsletter!",
        });
        setEmail("");
      } else {
        throw new Error(data.message || "Failed to subscribe to newsletter");
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      setSubmitStatus({
        success: false,
        error: true,
        message:
          error.message ||
          "There was an error processing your subscription. Please try again.",
      });
    } finally {
      setIsSubmitting(false);

      // Auto-clear success/error message after 5 seconds
      if (submitStatus.success || submitStatus.error) {
        setTimeout(() => {
          setSubmitStatus({ success: false, error: false, message: "" });
        }, 5000);
      }
    }
  };

  return (
    <div className=" relative">
      {submitStatus.success && (
        <div className="mb-6 p-4 rounded-lg text-white bg-green-500 bg-opacity-90">
          {submitStatus.message}
        </div>
      )}
      {submitStatus.error && (
        <div className="mb-6 p-4 rounded-lg text-white bg-red-500 bg-opacity-90">
          {submitStatus.message}
        </div>
      )}
      <form className="max-w-md mx-auto mb-10" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow py-4 px-6 rounded-lg bg-indigo-900/20 border border-indigo-500/30 text-white placeholder:text-indigo-300/40 focus:outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center whitespace-nowrap py-4 px-6 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-purple-500/20 transition-all"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
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
                Processing...
              </>
            ) : (
              "Subscribe"
            )}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
