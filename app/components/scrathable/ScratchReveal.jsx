'use client';

import { useEffect, useRef } from 'react';

export default function ScratchReveal() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;

    // Set canvas size to match its display size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Load the cover image
    const img = new Image();
    img.src = 'https://wallpapers.com/images/high/anime-naruto-and-other-shonen-characters-nqmhmvxtch8af20f.webp'; // Replace with your image URL

    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Draw the image as the scratch-off layer
    };

    // Scratch-off function
    const scratch = (x, y) => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2); // Reduce brush size for mobile precision
      ctx.fill();
    };

    // Mouse scratch event
    const handleMouseMove = (e) => {
      if (e.buttons !== 1) return; // Only scratch when mouse is clicked
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      scratch(x, y);
    };

    // Mobile touch scratch event
    const handleTouchMove = (e) => {
      e.preventDefault(); // Prevent scrolling while scratching
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0]; // Get the first touch point
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      scratch(x, y);
    };

    // Add event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background video */}
      <video src="/13112746_4096_2160_60fps.mp4" autoPlay loop muted className="absolute w-full h-full object-cover" />

      {/* Scratch-off Canvas */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full cursor-pointer touch-none" />

      {/* Revealed text under canvas */}
      <div className="absolute text-white text-4xl font-bold">
        Your Text Here
      </div>
    </div>
  );
}
