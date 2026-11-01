import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  value: string;
  className?: string;
  duration?: number;
}

/** Extracts the leading numeric portion of a string like "5,260" or "+129%" and animates it. */
const parseValue = (raw: string) => {
  const match = raw.match(/-?\d[\d,]*(\.\d+)?/);
  if (!match) return null;
  return {
    prefix: raw.slice(0, match.index),
    number: match[0].replace(/,/g, ""),
    suffix: raw.slice((match.index ?? 0) + match[0].length),
    decimals: match[0].includes(".") ? match[0].split(".")[1].length : 0,
    grouped: match[0].includes(","),
  };
};

const CountUp = ({ value, className, duration = 1.6 }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState("0");
  const parts = parseValue(value);

  useEffect(() => {
    if (!parts || !inView) {
      if (!parts) setDisplay(value);
      return;
    }
    if (shouldReduceMotion) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(parts.number);
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        const formatted = parts.grouped
          ? Math.round(latest).toLocaleString("en-US")
          : latest.toFixed(parts.decimals);
        setDisplay(formatted);
      },
    });
    return () => controls.stop();
  }, [inView, parts, shouldReduceMotion, duration, value]);

  if (!parts) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {parts.prefix}
      {display}
      {parts.suffix}
    </span>
  );
};

export default CountUp;
