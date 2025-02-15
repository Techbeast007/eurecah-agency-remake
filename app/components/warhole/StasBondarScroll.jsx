'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const StasBondarEffect = () => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2, // Slower merging effect
      },
    });

    imagesRef.current.forEach((image, index) => {
      gsap.to(image, {
        x: gsap.utils.random(-containerWidth / 2, containerWidth / 2), // Spread images across full width
        y: gsap.utils.random(-containerHeight / 2, containerHeight / 2), // Spread across full height
        scale: () => gsap.utils.random(0.8, 1.4), // Subtle scaling
        duration: 3, // Slower transition
        ease: 'power2.out',
        scrollTrigger: {
          trigger: image,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[100vh] overflow-hidden bg-white flex flex-wrap items-center justify-center">
      {[...Array(18)].map((_, index) => (
        <img
          key={index}
          ref={(el) => (imagesRef.current[index] = el)}
          src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/7500/Netflix_Logo_RGB-1024.png"
          alt={`Netflix Logo ${index + 1}`}
          className="absolute w-[120px] h-[120px] opacity-1 transition-transform hover:scale-125 hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.5)] hover:animate-ripple"
        />
      ))}
      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-ripple {
          animation: ripple 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default StasBondarEffect;
