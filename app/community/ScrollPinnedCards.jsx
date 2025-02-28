"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { id: 1, title: "Strategy", desc: "Innovative marketing strategies for brands.", num: "01" },
  { id: 2, title: "Production", desc: "High-quality video production tailored for impact.", num: "02" },
  { id: 3, title: "Collaboration", desc: "Bringing creators and brands together.", num: "03" },
];

export default function ScrollPinnedCards() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const totalWidth = containerRef.current.scrollWidth - window.innerWidth;

      // Pinning the whole section while scrolling
      gsap.to(containerRef.current, {
        x: () => -totalWidth, // Moves the entire container left
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Animating each card appearance
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { scale: 1.5, opacity: 0.5 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out", scrollTrigger: { trigger: card, start: "left center" } }
        );

        // Word-by-word animation for description
        const words = card.querySelectorAll(".animated-word");
        gsap.fromTo(
          words,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power2.out", scrollTrigger: { trigger: card, start: "left center" } }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-gray-100 py-20">
      <div ref={containerRef} className="flex space-x-10 px-10">
        {cards.map((card, index) => (
          <div
          key={card.id}
          ref={(el) => (cardsRef.current[index] = el)}
          className="relative min-w-[80vw] h-[60vh] p-6 border-4 border-black rounded-lg shadow-lg flex flex-col justify-between opacity-0"
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for better readability */}
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
        
          {/* Content */}
          <h2 className="absolute top-6 left-6 text-2xl font-bold text-white z-10">{card.title}</h2>
          <p className="absolute bottom-12 left-6 text-white text-lg z-10">
            {card.desc.split(" ").map((word, i) => (
              <span key={i} className="animated-word inline-block opacity-0">
                {word}{" "}
              </span>
            ))}
          </p>
          <span className="absolute top-6 right-6 text-2xl font-semibold text-white z-10">{card.num}</span>
          <button className="absolute bottom-6 right-6 px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition z-10">
            Know More
          </button>
        </div>
        
        ))}
      </div>
    </section>
  );
}
