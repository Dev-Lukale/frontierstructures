"use client";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type ScaleInViewProps = {
  children: ReactNode;
  variants?: {
    initial?: Record<string, any>;
    animate?: Record<string, any>;
    exit?: Record<string, any>;
  };
  duration?: number;
};

const ScaleInView: React.FC<ScaleInViewProps> = ({
  children,
  variants = {},
  duration = 0.6, // Default duration is 0.5 seconds,
  ...rest
}: ScaleInViewProps) => {
  // Merge the provided variants with the default variants
  const mergedVariants = {
    initial: { opacity: 0, scale: 0, x: -100 },
    animate: { opacity: 1, scale: 1, x: 0, transition: { duration } },
    exit: { opacity: 0, scale: 0, x: -100, transition: { duration } },
    ...variants,
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      exit="exit"
      variants={mergedVariants}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default ScaleInView;
