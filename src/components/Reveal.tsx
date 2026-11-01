import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in seconds */
  delay?: number;
  /** Vertical offset before the element animates in (px) */
  y?: number;
  className?: string;
  /** Direction of the entrance: up (default), left, right, or none */
  from?: "up" | "left" | "right" | "none";
  once?: boolean;
}

const offsets = {
  up: { y: 32, x: 0 },
  left: { y: 0, x: -40 },
  right: { y: 0, x: 40 },
  none: { y: 0, x: 0 },
};

const Reveal = ({ children, delay = 0, className, from = "up", once = true }: RevealProps) => {
  const shouldReduceMotion = useReducedMotion();
  const offset = offsets[from];

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
