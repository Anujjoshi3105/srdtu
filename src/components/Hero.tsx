"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Hero() {
  useEffect(() => {
    gsap.fromTo(
      "#hero-heading",
      { y: 100, opacity: 0.2 },
      { y: 0, opacity: 1, duration: 1, ease: "bounce.out" }
    );

    gsap.fromTo(
      "#hero-subheading",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, delay: 1, duration: 0.5, ease: "power4.out" }
    );

    gsap.fromTo(
      "#hero-link",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 1, duration: 0.5, ease: "power4.out" }
    );
  }, []);

  return (
    <section
      id="hero"
      className="section hero flex flex-col justify-center items-center h-screen w-full text-center">
      <div className="translate-y-24">
        {/* Animated Heading */}
        <h1
          id="hero-heading"
          className="relative lg:text-[17vh] sm:text-[16vw] text-[12vw] md:leading-[12vh] leading-[10vw] font-extrabold text-nowrap">
          <span className="absolute inset-1 opacity-10">SR-DTU</span>
          SR-DTU
        </h1>

        {/* Animated Subheading */}
        <h3 id="hero-subheading" className="text-primary text-2xl my-4">
          Elevating Innovation through Robotics and Drones!
        </h3>

        {/* Animated Link */}
        <div id="hero-link" className="mt-10">
          <Link
            href="/"
            passHref
            className="relative inline-block group focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-1 translate-y-1 bg-primary group-hover:bg-white group-hover:translate-y-0.5 group-hover:translate-x-0.5 "></span>
            <span className="relative block px-8 py-3 bg-background font-bold group-hover:bg-teal-700 text-sm group-hover:text-white border border-primary">
              Join Now
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
