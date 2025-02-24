import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./ourmission.css";

export default function OurMission() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mission-container", // The section that triggers animation
        start: "top 80%", // Start animation when 80% of the section is in view
        toggleActions: "play none none none", // Play once, no reset
      }
    });

    // ✅ Ensure `.left` is hidden at start
    gsap.set(".right", { width: "100%" }); // Right section fully stretched at start
    gsap.set(".ml12", { opacity: 0 });
    gsap.set(".images div", { opacity: 0, y: 20 });

    // ✅ Show "OUR MISSION" first
    tl.to(".ml12", { opacity: 1, duration: 1, ease: "power3.out" });

    // ✅ Ensure `.left` becomes visible before animating

    // ✅ Slide in `.left`
    tl.to(".left", {
      x: "0%",
      opacity: 1,
      duration: 1.8,  // ⬆ Slightly longer for smooth motion
      ease: "expo.out", // ⬆ More natural easing
      onComplete: () => {
        document.querySelector(".left").style.transform = "none"; // ✅ Remove translateX after anim
      }
    }, "+=0.3"); // ⬇ Reduce delay for better flow

    // ✅ Shrink `.right`
    tl.to(".right", {
      width: "50%",
      duration: 1.8,  // ⬆ Sync duration with `.left`
      ease: "expo.out",
    }, "-=1.5"); // ⬆ Overlap more to make it seamless

    // ✅ Reveal images
    tl.to(".images div", {
      opacity: 1,
      y: 0,
      duration: 1.2, // ⬆ Slightly longer for fluid reveal
      ease: "power3.out",
      stagger: 0.25, // ⬇ Faster stagger for smooth sequence
    }, "-=1");

  }, []);

  return (
    <div className="mission-container">
      <div className="left">
        <h2>Our Vision</h2>
        <p>Better than BrandBetter than BrandBetter than BrandBetter than<br/> BrandBetter than BrandBetter than BrandBetter than BrandBetter than BrandBetter than Brand</p>
        <p>Description neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription needed</p>
        <a href="#" className="btn">Contact Us</a>
      </div>
      <div className="right">
        <div className="images">
          <div className="img img1"></div>
          <div className="img img2"></div>
          <div className="img img3"></div>
          <div className="img img4"></div>
        </div>
        <p>Better than BrandBetter than BrandBetter than BrandBetter than<br/> BrandBetter than BrandBetter than BrandBetter than BrandBetter than BrandBetter than Brand</p>
        <p>Description neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription neededDescription needed</p>
        <h1 className="ml12">OUR MISSION</h1>
      </div>
    </div>
  );
}
