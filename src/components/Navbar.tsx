"use client";

import { useEffect, useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import AnimatedLink from "@/utils/AnimatedLink";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import Link from "next/link";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Resources", href: "/resources" },
  { title: "Team", href: "/team" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  useEffect(() => {
    gsap.fromTo(
      "#navbar",
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        delay: 0.5,
        duration: 0.5,
        ease: "power.out",
      }
    );
  }, []);
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  return (
    <>
      {/*Mobile Menu*/}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={toggleMenu}
            className="origin-top fixed z-[100] top-0 left-0 h-screen text-center w-screen font-semibold bg-primary">
            <FaX className="absolute right-8 top-6 cursor-pointer text-2xl active:scale-x-75" />
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="exit"
              className="flex flex-col h-full justify-center gap-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={mobileLinkVars}
                  className="text-4xl md:text-5xl uppercase">
                  <Link href={link.href}>{link.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/*Desktop Menu*/}
      <div
        id="navbar"
        className="origin-top w-full z-10 fixed bg-primary text-lg font-bold top-6 h-10 flex items-center justify-end md:justify-center">
        <div className="hidden md:flex gap-12">
          {navLinks.map((link) => (
            <AnimatedLink title={link.title} href={link.href} key={link.href} />
          ))}
        </div>
        <FaBars
          className="md:hidden cursor-pointer text-2xl mr-4 active:scale-75"
          onClick={toggleMenu}
        />
      </div>
    </>
  );
}
