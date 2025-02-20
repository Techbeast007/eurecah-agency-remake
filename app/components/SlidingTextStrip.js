"use client";
import { motion } from "framer-motion";

export default function SlidingTextStrip({ words, direction = "left" }) {
  return (
    <div className="relative w-full h-32 bg-white text-black overflow-hidden flex items-center border-y-4 border-black">
      <motion.div
        initial={{ x: direction === "left" ? "100%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "100%" }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }} // Slower speed
        className="flex whitespace-nowrap text-[6rem] font-bold leading-none"
      >
        {words.map((word, index) => (
          <span key={index} className="mx-16">
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
