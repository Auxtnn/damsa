import React from "react";
import {
  TestimonialMain,
  Services,
  PieConcepts,
  Partners,
  // OurMission,
  Hero,
  CTA,
  OurMission,
} from "@/app/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <OurMission />
      <Services />
      <Partners />
      <PieConcepts />
      <TestimonialMain />
      <CTA />
    </main>
  );
}
