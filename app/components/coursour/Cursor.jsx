"use client";

import { useEffect, useState, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = [
    "hsl(0, 100%, 50%)",
    "hsl(60, 100%, 50%)",
    "hsl(120, 100%, 50%)",
    "hsl(180, 100%, 50%)",
    "hsl(240, 100%, 50%)",
  ];

  useEffect(() => {
    let timeout;

    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 12}px`; // Adjust to center the cursor
        cursorRef.current.style.top = `${e.clientY - 12}px`; // Adjust to center the cursor
      }
    };

    const changeColor = () => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    // Change color every 1.5 seconds (to match the pulsate animation duration)
    const colorInterval = setInterval(changeColor, 1500);

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(colorInterval); // Clean up interval
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      {/* Pulsating dot with color change */}
      <div
        ref={cursorRef}
        className="fixed rounded-full pointer-events-none z-[9999] transition-all ease-in-out"
        style={{
          width: "24px",  // Default size for the pulsating dot
          height: "24px", // Default size for the pulsating dot
          transitionDuration: "150ms", // Smooth transition on click
          animation: "pulsate 1.5s ease-in-out infinite", // Pulsating animation
          backgroundColor: colors[colorIndex], // Use the color from the array
        }}
      />
      <style jsx>{`
        @keyframes pulsate {
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.2);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
