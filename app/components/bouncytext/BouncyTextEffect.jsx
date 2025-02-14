'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const text = "Experience the future of design with smooth animations and dynamic interactions.";

export default function BouncyTextEffect() {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Re-trigger animation every time it enters view
      },
      { threshold: 0.5 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <div className="relative h-[100vh] flex items-center justify-center bg-black px-10">
      <motion.p
        ref={textRef}
        className="text-5xl font-bold leading-snug text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mx-2 cursor-pointer"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 14, delay: index * 0.05 }}
            whileHover={{
              color: "#ffcc00",
              transition: { duration: 0.3, ease: "easeInOut" }, // Smooth color change
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
}
