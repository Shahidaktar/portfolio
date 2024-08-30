"use client";

import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { achievements } from "@/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const variants = {
  initial: {
    x: -200,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      id="achieve"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
      whileInView={{
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          staggerChildren: 0.1,
        },
      }}
    >
      <motion.span
        variants={variants}
        className="heading font-poppins flex items-center rounded-lg justify-center border border-cyan-500 text-cyan-500 p-4 mt-2 w-fit mx-auto"
      >
        Achievements
      </motion.span>
      <motion.div
        variants={variants}
        className="h-[25rem] rounded-md flex flex-col antialiased bg-white  items-center justify-center relative overflow-hidden"
      >
        <InfiniteMovingCards
          items={achievements}
          direction="right"
          speed="slow"
        />
      </motion.div>
    </motion.div>
  );
};

export default Achievements;
