"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

// Dynamically import PageLoader with no SSR
const PageLoader = dynamic(() => import("./PageLoader"), {
  ssr: false,
  loading: () => null,
});

export const ClientLayoutWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // No need to set loading to true here as we're initializing with true
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        // Only render the header, footer, and content when loading is complete
        <div
          className="flex flex-col min-h-screen"
          style={{
            opacity: isLoading ? 0 : 1,
            transition: "opacity 500ms ease-in-out",
          }}
        >
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ClientLayoutWrapper;
