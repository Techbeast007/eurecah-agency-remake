import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./ourmission.css";

export default function OurMission() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Detect screen width
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mission-container",
          start: "top 80%",
          toggleActions: "play none none none",
        }
      });

      gsap.set(".right", { width: "100%" });
      gsap.set(".ml12", { opacity: 0 });
      gsap.set(".images div", { opacity: 0, y: 20 });

      tl.to(".ml12", { opacity: 1, duration: 1, ease: "power3.out" });

      tl.to(".left", {
        x: "0%",
        opacity: 1,
        duration: 1.8,
        ease: "expo.out",
        onComplete: () => {
          document.querySelector(".left").style.transform = "none";
        }
      }, "+=0.3");

      tl.to(".right", {
        width: "50%",
        duration: 1.8,
        ease: "expo.out",
      }, "-=1.5");

      tl.to(".images div", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.25,
      }, "-=1");
    } else {
      // On mobile: Instantly show everything
      gsap.set([".left", ".right", ".ml12", ".images div"], { opacity: 1, x: 0, y: 0 });
    }

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
