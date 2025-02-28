"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const clientLogos = [
  "/logos/client1.png",
  "/logos/client2.png",
  "/logos/client3.png",
  "/logos/client4.png",
  "/logos/client1.png",
  "/logos/client2.png",
  "/logos/client3.png",
  "/logos/client4.png",
  "/logos/client1.png",
  "/logos/client2.png",
  "/logos/client3.png",
  "/logos/client4.png",
  "/logos/client1.png",
  "/logos/client2.png",
  "/logos/client3.png",
  "/logos/client4.png",
  "/logos/client1.png",
  "/logos/client2.png",
  "/logos/client3.png",
  "/logos/client4.png",
];

export default function ClientsStrip() {
  const stripRef = useRef(null);

  useEffect(() => {
    const strip = stripRef.current;
    
    gsap.to(strip, {
      x: "-50%", // Moves the entire strip left by 100% of its width
      duration: 10, 
      ease: "linear",
      repeat: -1,
      onRepeat: () => {
        gsap.set(strip, { x: "0%" }); // Resets position after each cycle
      },
    });
  }, []);

  return (
    <section className="relative py-6 border-t-4 border-b-4 border-black overflow-hidden">
      <div className="w-full flex overflow-hidden">
        {/* Two identical divs to create a seamless loop */}
        <div ref={stripRef} className="flex space-x-12 w-max">
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <img key={index} src={logo} alt="Client Logo" className="h-16" />
          ))}
        </div>
      </div>
    </section>
  );
}
