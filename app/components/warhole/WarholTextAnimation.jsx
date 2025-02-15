'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WarholTextAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'];

    gsap.fromTo(
      textRef?.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        color: gsap.utils.wrap(colors),
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center h-[50vh] bg-white">
      <div ref={textRef} className="text-6xl font-bold uppercase text-white">
        {[...'WARHOL'].map((letter, index) => (
          <span key={index} className="inline-block mx-2">
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WarholTextAnimation;
