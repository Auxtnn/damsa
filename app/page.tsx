import React from "react";
import {
  TestimonialMain,
  Services,
  PieConcepts,
  Partners,
  // OurMission,
  Hero,
  CTA,
} from "@/app/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      {/* <OurMission /> */}
      <Services />
      <Partners />
      <TestimonialMain />
      <CTA />
      <PieConcepts />
    </main>
  );
}
