'use client';

import { useEffect, useRef } from 'react';

export default function ScratchReveal() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;

    // Set canvas size dynamically
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Fill with black overlay
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Auto-reveal effect for mobile
    if (isMobile) {
      let alpha = 1.0; // Opacity starts at 1 (fully black)
      const revealSpeed = 0.005; // Adjust speed for smooth reveal

      const autoReveal = () => {
        if (alpha > 0) {
          alpha -= revealSpeed;
          ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the previous frame
          ctx.globalAlpha = alpha;
          ctx.fillRect(0, 0, canvas.width, canvas.height); // Redraw fading overlay
          requestAnimationFrame(autoReveal);
        }
      };

      requestAnimationFrame(autoReveal);
    }

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

    return () => {
      if (!isMobile) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Video */}
      <video src="/13112746_4096_2160_60fps.mp4" autoPlay loop muted className="absolute w-full h-full object-cover" />

      {/* Scratch Effect Canvas */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full cursor-pointer" />

      {/* Overlay Text (Optional) */}
      <div className="absolute text-white text-4xl font-bold">
        Your Text Here
      </div>
    </div>
  );
}
