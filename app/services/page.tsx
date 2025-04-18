"use client";

import React from "react";
import { ServicesCTA, ServicesHero, ServicesMain } from "@/app/components";

export default function ServicesPage() {
  return (
    <main className="bg-[#0A1128]">
      <ServicesHero />
      <ServicesMain />
      <ServicesCTA />
    </main>
  );
}
