"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";
import { IconType } from "react-icons";

interface SponsorItemProps {
  icons: IconType[];
  baseVelocity?: number;
}

export default function SponsorItem({
  icons,
  baseVelocity = 2,
}: SponsorItemProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex gap-8 overflow-hidden">
      <motion.div className="flex gap-8" style={{ x }}>
        {icons.map((IconComponent, index) => (
          <IconComponent
            className="h-12 w-12 hover:text-primary cursor-pointer"
            key={index}
          />
        ))}
        {/* Duplicate icons for seamless looping */}
        {icons.map((IconComponent, index) => (
          <IconComponent
            className="h-12 w-12 hover:text-primary cursor-pointer"
            key={`duplicate-${index}`}
          />
        ))}
        {icons.map((IconComponent, index) => (
          <IconComponent
            className="h-12 w-12 hover:text-primary cursor-pointer"
            key={`duplicate-${index}`}
          />
        ))}
        {icons.map((IconComponent, index) => (
          <IconComponent
            className="h-12 w-12 hover:text-primary cursor-pointer"
            key={index}
          />
        ))}
        {icons.map((IconComponent, index) => (
          <IconComponent
            className="h-12 w-12 hover:text-primary cursor-pointer"
            key={`duplicate-${index}`}
          />
        ))}
        {icons.map((IconComponent, index) => (
          <IconComponent
            className="h-12 w-12 hover:text-primary cursor-pointer"
            key={`duplicate-${index}`}
          />
        ))}
      </motion.div>
    </div>
  );
}
