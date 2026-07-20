import { Box } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const directionVariants = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export default function RevealAnimation({
  children,

  // Animation trigger
  trigger = "inView", // "inView" | "mount"
  once = true,
  amount = 0.2,

  // Timing
  delay = 0,
  duration = 0.6,
  ease = [0.22, 1, 0.36, 1],

  // Optional animation controls
  fade = true,
  slide = false,
  direction = "up",
  distance = 40,

  scale = false,
  initialScale = 0.92,

  rotate = false,
  initialRotate = 4,

  blur = false,
  initialBlur = 8,

  // Optional hover/tap animation
  hover = false,
  hoverScale = 1.02,
  hoverY = -4,

  tap = false,
  tapScale = 0.98,

  // Layout/styling
  component = "div",
  sx = {},
  ...rest
}) {
  const selectedDirection =
    directionVariants[direction] || directionVariants.up;

  const initialX = slide
    ? selectedDirection.x === 0
      ? 0
      : selectedDirection.x > 0
        ? distance
        : -distance
    : 0;

  const initialY = slide
    ? selectedDirection.y === 0
      ? 0
      : selectedDirection.y > 0
        ? distance
        : -distance
    : 0;

  const initialState = {
    opacity: fade ? 0 : 1,
    x: initialX,
    y: initialY,
    scale: scale ? initialScale : 1,
    rotate: rotate ? initialRotate : 0,
    filter: blur ? `blur(${initialBlur}px)` : "blur(0px)",
  };

  const visibleState = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
  };

  const transition = {
    delay,
    duration,
    ease,
  };

  const hoverAnimation = hover
    ? {
        scale: hoverScale,
        y: hoverY,
      }
    : undefined;

  const tapAnimation = tap
    ? {
        scale: tapScale,
      }
    : undefined;

  return (
    <MotionBox
      component={component}
      initial={initialState}
      animate={trigger === "mount" ? visibleState : undefined}
      whileInView={trigger === "inView" ? visibleState : undefined}
      viewport={
        trigger === "inView"
          ? {
              once,
              amount,
            }
          : undefined
      }
      transition={transition}
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
      sx={{
        willChange: "transform, opacity, filter",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </MotionBox>
  );
}