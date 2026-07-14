import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import {
  animate,
  useInView,
  useReducedMotion,
} from "framer-motion";

export default function AnimatedCounter({
  value = 0,
  duration = 2,
  delay = 0,
  once = true,
  locale = "en-IN",
  decimals = 0,
  startValue = 0,
  start = true,
  sx = {},
}) {
  const counterRef = useRef(null);

  const isInView = useInView(counterRef, {
    once,
    amount: 0.5,
  });

  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(startValue);
  const hasAnimatedRef = useRef(false);

  const numericValue =
    typeof value === "number"
      ? value
      : Number(String(value).replace(/,/g, ""));

  useEffect(() => {
    if (!start || !isInView) return;
    if (!Number.isFinite(numericValue)) return;
    if (once && hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;

    if (prefersReducedMotion) {
      setDisplayValue(numericValue);
      return;
    }

    setDisplayValue(startValue);

    const controls = animate(startValue, numericValue, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],

      onUpdate(latest) {
        setDisplayValue(latest);
      },
    });

    return () => controls.stop();
  }, [
    start,
    isInView,
    numericValue,
    startValue,
    duration,
    delay,
    once,
    prefersReducedMotion,
  ]);

  const formattedValue = new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(displayValue);

  return (
    <Box
      ref={counterRef}
      component="span"
      sx={{
        display: "inline-block",
        fontVariantNumeric: "tabular-nums",
        ...sx,
      }}
    >
      {formattedValue}
    </Box>
  );
}