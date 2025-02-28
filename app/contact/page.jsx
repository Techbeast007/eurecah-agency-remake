"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import FluidCursor from "../components/FluidCursor";
import Navbar from "../components/navbar/navbar";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function Contact() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const formRef = useRef(null);
  const cursorRef = useRef(null);
  const blobRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // 1️⃣ Split Reveal Animation for left & right sections
    gsap.fromTo(
      leftRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
    );
    gsap.fromTo(
      rightRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.3 }
    );

    // 2️⃣ Character-by-character "CONTACT US" animation
    gsap.fromTo(
      titleRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: "power2.out", delay: 0.5 }
    );

    // 3️⃣ Floating Blob Animation (Morphing Effect)
    gsap.to(blobRef.current, {
      scale: 1.2,
      x: "random(-20,20)",
      y: "random(-20,20)",
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut"
    });

    // 4️⃣ Form fields stagger animation on scroll
    gsap.fromTo(
      formRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        }
      }
    );

    // 5️⃣ Magnetic Cursor Effect
    document.addEventListener("mousemove", (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out"
      });
    });

    return () => document.removeEventListener("mousemove", () => {});
  }, []);

  return (
    <><Navbar/>
    <FluidCursor/>
    <section className="relative container mx-auto px-6 py-12">
      {/* Magnetic Cursor */}
      <div ref={cursorRef} className="absolute w-6 h-6 bg-black rounded-full pointer-events-none mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Title Animation */}
      <h2 ref={titleRef} className="text-4xl font-bold text-center mb-6">
        {"CONTACT US".split("").map((char, index) => (
          <span key={index} className="inline-block opacity-0">{char === " " ? "\u00A0" : char}</span>
        ))}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left - Contact Details */}
        <div ref={leftRef} className="p-6 border-4 border-black rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-2">📧 Email: contact@company.com</p>
          <p className="mb-2">📞 Phone: +123 456 789</p>
          <p>📍 Location: 123 Street, City</p>
        </div>

        {/* Right - Contact Form */}
        <div ref={rightRef} className="relative p-6 border-4 border-black rounded-2xl overflow-hidden">
          {/* Floating Blob Background */}
          <div ref={blobRef} className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-3xl"></div>

          <form ref={formRef} className="relative space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border p-3 rounded-md bg-white" />
            <input type="email" placeholder="Your Email" className="w-full border p-3 rounded-md bg-white" />
            <textarea placeholder="Your Message" className="w-full border p-3 rounded-md bg-white"></textarea>
            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition">Send Message</button>
          </form>
        </div>
      </div>
    </section></>
  );
}
