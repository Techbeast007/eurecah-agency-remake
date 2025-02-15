'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const elements = [
  "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/7500/Netflix_Logo_RGB-1024.png",
  "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/7500/Netflix_Logo_RGB-1024.png",
  "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/7500/Netflix_Logo_RGB-1024.png",
  "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/7500/Netflix_Logo_RGB-1024.png",
];

export default function ScrollReveal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  useEffect(() => {
    const handleScroll = (e) => {
      if (!containerRef.current) return;
      const bounding = containerRef.current.getBoundingClientRect();
      if (bounding.top > window.innerHeight * 0.3 || bounding.bottom < window.innerHeight * 0.7) return;

      if (currentIndex === 0 && e.deltaY < 0) return;
      if (currentIndex === elements.length - 1 && e.deltaY > 0) return;

      e.preventDefault(); // Prevents default page scrolling when inside the component
      if (isAnimating) return;
      setIsAnimating(true);

      if (e.deltaY > 0) {
        setCurrentIndex((prev) => (prev < elements.length - 1 ? prev + 1 : prev));
      } else {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }

      setTimeout(() => setIsAnimating(false), 1000);
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      touchEndY.current = e.changedTouches[0].clientY;
      const swipeDistance = touchEndY.current - touchStartY.current;

      if (Math.abs(swipeDistance) > 50) { // Minimum swipe threshold
        if (swipeDistance < 0) {
          // Swipe up (next image)
          setCurrentIndex((prev) => (prev < elements.length - 1 ? prev + 1 : prev));
        } else {
          // Swipe down (previous image)
          setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
        }
      }
    };

    // Attach both wheel and touch events
    containerRef.current.addEventListener('wheel', handleScroll, { passive: false });
    containerRef.current.addEventListener('touchstart', handleTouchStart, { passive: true });
    containerRef.current.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('wheel', handleScroll);
        containerRef.current.removeEventListener('touchstart', handleTouchStart);
        containerRef.current.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [isAnimating, currentIndex]);

  return (
    <div ref={containerRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {elements.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          initial={{ opacity: 0, scale: 0.8, z: -100 }}
          animate={index === currentIndex ? { opacity: 1, scale: 1.1, z: 0 } : { opacity: 0, z: -100 }}
          transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.8 }}
          className="absolute w-auto max-w-full max-h-screen"
        />
      ))}
    </div>
  );
}
