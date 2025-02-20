"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardFooter, Image, Button } from "@heroui/react";

gsap.registerPlugin(ScrollTrigger);

export default function CardCarousel() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 150, rotate: 360, scale: 0 },
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.3, // Each card animates one after another
        scrollTrigger: {
          trigger: ".card-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const cards = [
    { id: 1, text: "Available soon.", img: "https://heroui.com/images/hero-card.jpeg" },
    { id: 2, text: "Coming next week.", img: "https://heroui.com/images/hero-card.jpeg" },
    { id: 3, text: "Launching soon.", img: "https://heroui.com/images/hero-card.jpeg" },
    { id: 4, text: "New Arrival!", img: "https://heroui.com/images/hero-card.jpeg" },
    { id: 5, text: "Don't Miss Out!", img: "https://heroui.com/images/hero-card.jpeg" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-20">
      <h2 className="text-3xl font-bold mb-10">GSAP Sequential Rotation</h2>
      <div className="card-container flex gap-10 flex-wrap justify-center">
        {cards.map((card, index) => (
          <div key={card.id} ref={(el) => (cardsRef.current[index] = el)} className="w-[220px]">
            <Card isFooterBlurred className="border-none w-full h-[270px]" radius="lg">
              <Image alt="Card Image" className="object-cover h-[200px] w-full" src={card.img} />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">{card.text}</p>
                <Button className="text-tiny text-white bg-black/20" color="default" radius="lg" size="sm" variant="flat">
                  Notify
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
