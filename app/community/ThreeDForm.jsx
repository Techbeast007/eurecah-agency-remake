"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function ThreeDForm() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const titleChars = titleRef.current.querySelectorAll("span"); // Select spans inside h2
    const form = formRef.current;
    const image = imageRef.current;

    // Set initial states
    gsap.set(titleChars, { opacity: 0, y: 20 });
    gsap.set([form, image], { opacity: 0, y: 50 });

    // Animate each letter of "CONTACT US" separately
    gsap.to(titleChars, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.1, // Stagger animation for letters
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      },
    });

    // Animate image and form separately
    gsap.to(image, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
      },
    });

    gsap.to(form, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2, // Small delay after image
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-6 py-12">
      {/* Animated CONTACT US Title */}
      <h2 ref={titleRef} className="text-3xl font-bold text-center mb-6">
  {"CONTACT US".split("").map((char, index) => (
    <span key={index} className="inline-block opacity-0">
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</h2>


      {/* Form and Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-4 border-black rounded-2xl p-6 shadow-lg">
        {/* Left - Image */}
        <div ref={imageRef} className="opacity-0">
          <img src="/images/3d-showcase.jpg" alt="Showcase" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Right - 3D Form */}
        <div ref={formRef} className="bg-white p-6 rounded-lg shadow-xl opacity-0">
          <h3 className="text-2xl font-bold mb-4">Join the Community</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border p-3 rounded-md" />
            <input type="email" placeholder="Your Email" className="w-full border p-3 rounded-md" />
            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition">Join Now</button>
          </form>
        </div>
      </div>
    </section>
  );
}
