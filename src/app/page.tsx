"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Sponsor from "@/components/Sponsor/Sponsor";
import Team from "@/components/Team/Team";
import { init } from "@/components/Drone";

export default function Home() {
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div
        id="drone"
        className="fixed -z-[100] bg-transparent opacity-80"></div>
      <Hero />
      <About />
      <Team />
      <Sponsor />
    </>
  );
}
