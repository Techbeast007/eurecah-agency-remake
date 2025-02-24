"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const FluidCursor = () => {
  const cursor = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursor.current, {
        x: e.clientX - 50, // Offset by half of cursor size
        y: e.clientY - 50,
        duration: 0.3, // Smooth delay effect
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursor}
      className="fixed top-0 left-0 bg-white rounded-full pointer-events-none mix-blend-difference z-[60]"
      style={{
        width: "100px", // Cursor Size
        height: "100px",
      }}
    ></div>
  );
};

export default FluidCursor;
