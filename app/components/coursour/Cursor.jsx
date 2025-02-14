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
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const changeColor = () => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    // Faster color change every 1 second
    const colorInterval = setInterval(changeColor, 1000);

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(colorInterval);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed rounded-full pointer-events-none z-[9999]"
      style={{
        width: "16px", 
        height: "16px", 
        backgroundColor: colors[colorIndex],
        transition: "background-color 200ms ease-in-out",
      }}
    />
  );
}
