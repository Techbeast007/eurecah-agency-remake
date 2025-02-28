"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  { id: 1, title: "Project A", desc: "A stunning travel film.", img: "/images/project1.jpg" },
  { id: 2, title: "Project B", desc: "A brand campaign ad.", img: "/images/project2.jpg" },
  { id: 3, title: "Project C", desc: "A documentary snippet.", img: "/images/project3.jpg" },
  // Add more items as needed
];

export default function MasonryGrid() {
  const gridRef = useRef(null);

  useEffect(() => {
    const items = gridRef.current.children;

    gsap.fromTo(
      items,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%", // Triggers animation when 80% of the viewport height is reached
          toggleActions: "play none none reset", // Replays animation when it enters viewport again
        },
      }
    );
  }, []);

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Community Work</h2>
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="relative bg-cover bg-center h-72 rounded-lg shadow-lg opacity-0"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-4 rounded">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
