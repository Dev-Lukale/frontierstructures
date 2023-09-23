"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";

type ScaleInViewProps = {
  children: ReactNode;
  variants?: {
    initial?: Record<string, any>;
    animate?: Record<string, any>;
    exit?: Record<string, any>;
  };
  duration?: number;
  className?: string;
};

const ScaleInView: React.FC<ScaleInViewProps> = ({
  children,
  className,
  variants = {},
  duration = .5, // Default duration is 0.5 seconds,
  ...rest
}: ScaleInViewProps) => {
  // Merge the provided variants with the default variants
  const mergedVariants = {
    initial: { opacity: 0, scale: 0.2 },
    animate: { opacity: 1, scale: 1, transition: { duration } },
    exit: { opacity: 0, scale: 0, transition: { duration } },
    ...variants,
  };
  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        whileInView="animate"
        // viewport={{ once: true }}
        exit="exit"
        variants={mergedVariants}
        {...rest}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ScaleInView;
