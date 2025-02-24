'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ScratchReveal({ firstWord = 'OUR', secondWord = 'WORK' }) {
  const canvasRef = useRef(null);
  const headingWrapperRef = useRef(null);
  const headingRef = useRef(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Fill with white overlay (scratchable)


const img = new Image();
img.src = "https://img.freepik.com/free-vector/pastel-gradient-soft-peach-blur-background-vector_53876-175402.jpg?t=st=1740388242~exp=1740391842~hmac=0198ada57ddfe00d3096a1b54e5f39027095c9b938ec151d42c07841a44e7c05&w=996"; // Replace with your image path

img.onload = function () {
  const pattern = ctx.createPattern(img, "repeat"); // "repeat", "no-repeat", "repeat-x", "repeat-y"
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the entire canvas
};

    
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Scratch effect for desktop
    const handleMouseMove = (e) => {
      if (isMobile) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 60, 0, Math.PI * 2);
      ctx.fill();
    };

    if (!isMobile) {
      canvas.addEventListener('mousemove', handleMouseMove);
    }

    // GSAP Letter Animation (Characters Appear One by One)
    gsap.fromTo(
      headingRef.current.querySelectorAll('.letter'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power3.out',
        stagger: 0.08, // Stagger effect for each letter
        delay: 0.3,
      }
    );

    // Animate white box appearance
    gsap.fromTo(
      headingWrapperRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out', delay: 0.2 }
    );

    return () => {
      if (!isMobile) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isMobile]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Video */}
      <video src="/13112746_4096_2160_60fps.mp4" autoPlay loop muted className="absolute w-full h-full object-cover" />

      {/* Scratch Effect Canvas (Only White Overlay) */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full cursor-pointer" />

      {/* White Background Box for Heading */}
      <div
        ref={headingWrapperRef}
        className="absolute bottom-10 left-10 bg-white px-8 py-4"
        style={{ display: 'inline-block' }}
      >
        {/* Animated Heading */}
        <div ref={headingRef} className="flex flex-col leading-none">
          <div className="flex">
            {firstWord.split('').map((char, index) => (
              <span
                key={index}
                className="letter"
                style={{
                  fontSize: '8em',
                  fontWeight: '900',
                  fontFamily: 'SportingGrotesque-Bold',
                  color: 'black',
                  display: 'inline-block',
                }}
              >
                {char}
              </span>
            ))}
          </div>
          <div className="flex">
            {secondWord.split('').map((char, index) => (
              <span
                key={index}
                className="letter"
                style={{
                  fontSize: '8em',
                  fontWeight: '900',
                  fontFamily: 'SportingGrotesque-Bold',
                  color: 'black',
                  display: 'inline-block',
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
