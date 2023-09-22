'use client'

// components/AnimationWrapper.tsx
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

// Define the props for your AnimationWrapper component
interface StaggeredAnimationProps extends HTMLMotionProps<"div"> {
  children?: ReactNode[];
  staggerDelay?: number;
}

const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({
  children,
  staggerDelay = 0.2, // Default stagger delay in seconds
  ...rest
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      {...rest}
    >
      {children?.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: index * staggerDelay }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredAnimation;
