"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { id: 1, title: "Strategy", desc: "Innovative marketing strategies for brands.", num: "01", image: "/image1.jpg" },
  { id: 2, title: "Production", desc: "High-quality video production tailored for impact.", num: "02", image: "/image2.jpg" },
  { id: 3, title: "Collaboration", desc: "Bringing creators and brands together.", num: "03", image: "/image3.jpg" },
];

export default function ScrollPinnedCards() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const viewportWidth = window.innerWidth;
    const cardWidth = cardsRef.current[0]?.offsetWidth || 0;

    // ✅ Dynamically adjust first card offset for small screens
    const firstCardOffset = viewportWidth < 768 ? (viewportWidth - cardWidth) / 2 + 10 : (viewportWidth - cardWidth) / 2;

    // ✅ Ensuring last card fully enters screen
    const totalWidth = container.scrollWidth;
    const maxScroll = totalWidth - viewportWidth; // Max scroll distance
    const scrollDistance = maxScroll + firstCardOffset;

    gsap.set(container, { x: firstCardOffset });

    gsap.to(container, {
      x: -maxScroll, // ✅ Moves only within bounds
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${scrollDistance}`, // ✅ Stops at exact last card
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen flex items-center justify-center bg-gray-100 py-20 overflow-hidden">
      <div ref={containerRef} className="flex flex-nowrap space-x-6 px-10 w-max">
        {cards.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative min-w-[90vw] sm:min-w-[70vw] md:min-w-[50vw] lg:min-w-[40vw] h-[60vh] p-6 border-4 border-black rounded-lg shadow-lg flex flex-col justify-between bg-cover bg-center"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
            <h2 className="absolute top-6 left-6 text-2xl font-bold text-white z-10">{card.title}</h2>
            <p className="absolute bottom-12 left-6 text-lg text-white z-10">{card.desc}</p>
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
