"use client";
import { useState } from "react";
import { AnimationProps, motion } from "framer-motion";
import Link from "next/link";

export default function AnimatedLink({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const topAnimation = {
    rest: {
      y: 0,
    },
    hover: {
      y: -30,
      transition: {
        duration: 0.3,
        ease: [0.6, 0.01, 0.05, 0.95],
        type: "tween",
      },
    },
  };

  const bottomAnimation = {
    rest: {
      y: 0,
    },
    hover: {
      y: -40,
      transition: {
        duration: 0.3,
        ease: [0.6, 0.01, 0.05, 0.95],
        type: "tween",
      },
    },
  };

  const titleAnimation = {
    rest: {
      transition: {
        staggerChildren: 0.02,
      },
    },
    hover: {
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const AnimatedWord = ({
    title,
    animation,
    isHovered,
  }: {
    title: string;
    animation: AnimationProps["variants"];
    isHovered: boolean;
  }) => {
    return (
      <motion.span
        variants={titleAnimation}
        initial="rest"
        animate={isHovered ? "hover" : "rest"}
        className="whitespace-nowrap relative">
        {title.split("").map((char, index) =>
          char === " " ? (
            <span key={index}>&nbsp;</span>
          ) : (
            <motion.span
              variants={animation}
              key={index}
              className="relative inline-block whitespace-nowrap">
              {char}
            </motion.span>
          )
        )}
      </motion.span>
    );
  };

  return (
    <Link href={href} passHref>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={isHovered ? "hover" : "rest"}
        initial="rest"
        className="relative overflow-hidden cursor-pointer">
        <AnimatedWord
          title={title}
          animation={topAnimation}
          isHovered={isHovered}
        />
        <div className="absolute top-10">
          <AnimatedWord
            title={title}
            animation={bottomAnimation}
            isHovered={isHovered}
          />
        </div>
      </motion.div>
    </Link>
  );
}
