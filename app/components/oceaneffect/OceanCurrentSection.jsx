'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const OceanCurrentSection = () => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.to(imagesRef.current, {
      motionPath: {
        path: [
          { x: -400, y: 0, z: 300 },
          { x: 400, y: -200, z: 250 },
          { x: -400, y: -400, z: 200 },
          { x: 400, y: -600, z: 150 },
          { x: -400, y: -800, z: 100 },
        ],
        curviness: 3,
        autoRotate: false,
      },
      scale: 1.2, // Ensure the whole stack moves together
      rotationY: '+=0', // Prevent upside-down flipping
      filter: 'blur(0px) brightness(1.2) contrast(1.1)',
      duration: 5,
      stagger: 0.2,
      ease: 'power2.inOut',
    });

    imagesRef.current.forEach((image, index) => {
      gsap.to(image, {
        scrollTrigger: {
          trigger: image,
          start: 'center center',
          end: '+=100%',
          scrub: true,
        },
        scale: 2.5, // Zoom in when centered
        duration: 1.5,
        ease: 'power2.inOut',
      });
      gsap.to(image, {
        scrollTrigger: {
          trigger: image,
          start: 'center center',
          end: '+=100%',
          scrub: true,
        },
        scale: 1, // Zoom out after moving out of focus
        duration: 1.5,
        ease: 'power2.inOut',
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[50vh] overflow-hidden bg-white flex flex-col items-center justify-center">
      <div className="flex flex-col gap-8">
        {[...Array(7)].map((_, index) => (
          <Image
            key={index}
            ref={(el) => imagesRef.current[index] = el}
            src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/7500/Netflix_Logo_RGB-1024.png"
            alt={`Netflix Logo ${index + 1}`}
            className="rounded-lg shadow-lg w-[150px] h-[75px]"
          />
        ))}
      </div>
    </div>
  );
};

export default OceanCurrentSection;
