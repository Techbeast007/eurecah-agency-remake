import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import "./serviceslider.css"

const services = [
  {
    id: 1,
    title: "Video Production",
    subtitle: "High-quality films",
    description: "Crafting cinematic experiences for brands and travel stories.",
    image: "https://wallpapercave.com/wp/wp4539336.png",
  },
  {
    id: 2,
    title: "Digital Marketing",
    subtitle: "Grow your audience",
    description: "Tailored marketing strategies for digital platforms.",
    image: "https://wallpapercave.com/wp/wp4539336.png",
  },
  {
    id: 3,
    title: "Brand Films",
    subtitle: "Visual storytelling",
    description: "Creating branded content to communicate your brand message.",
    image: "https://wallpapercave.com/wp/wp4539336.png",
  },
];

const ServiceSlider = () => {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis();
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.service-card[data-index="${current}"] .animated-text`,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
        }
      );

      gsap.fromTo(
        `.service-card[data-index="${current}"]`,
        { scale: 0.8 },
        {
          scale: 1,
          duration: 1,
          ease: "power3.out",
        }
      );
    }, sliderRef);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, [current]);

  const changeSlide = (next) => {
    const newIndex = next ? (current === services.length - 1 ? 0 : current + 1) : (current === 0 ? services.length - 1 : current - 1);
    
    gsap.to(`.service-card[data-index="${current}"]`, {
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: () => {
        setCurrent(newIndex);
        gsap.fromTo(
          `.service-card[data-index="${newIndex}"]`,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" }
        );
      },
    });
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden" ref={sliderRef}>
      <button onClick={() => changeSlide(false)} className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all z-10">⬅️</button>
      <div className="relative w-3/4 h-3/4 flex items-center justify-center">
        {services.map((service, index) => (
          <div
            key={service.id}
            data-index={index}
            className={`absolute w-full h-full service-card flex items-center justify-center bg-cover bg-center rounded-xl shadow-lg overflow-hidden ${
              index === current ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="absolute title top-10 left-10 text-white text-4xl font-bold animated-text">{service.title}</div>
            <div className="absolute numbers top-10 right-10 text-white text-xl opacity-80 animated-text">0{service.id}</div>
            <div className="absolute subtitle bottom-20 left-10 text-white text-2xl font-semibold animated-text">{service.subtitle}</div>
            <div className="absolute description bottom-10 left-10 text-white text-lg max-w-md animated-text">{service.description}</div>
            <button className="absolute bottom-10 right-10 bg-white text-black px-6 py-2 rounded-lg hover:bg-black hover:text-white transition-all animated-text">
              Learn More
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => changeSlide(true)} className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-black text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all z-10">➡️</button>
    </div>
  );
};

export default ServiceSlider;
