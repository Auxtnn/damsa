import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import "./globals.css";
import { ClientLayoutWrapper } from "@/app/components/LayoutWrapper";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DAMSA - Digital Asset & Protocol Consulting",
  description:
    "Revolutionizing how the world interacts with Digital Assets by curating media & providing mastery on digital assets and decentralized ledger technology (DLT) solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${font.className} text-gray-100 min-h-screen flex flex-col`}
      >
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
