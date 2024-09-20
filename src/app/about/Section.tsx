// File: app/about/components/Section.tsx
"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right';
}

const Section: React.FC<SectionProps> = ({ children, className = "", direction = "left" }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }}
      className={`py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
