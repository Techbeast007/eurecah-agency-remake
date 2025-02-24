"use client";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./profilename.css";

const ProfileName = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".profile-container", // Start animation when this section enters viewport
          start: "top 80%", // Trigger when the top of the section is 80% into the viewport
          end: "bottom top", // Animation stops when the bottom leaves the viewport
          toggleActions: "play none none reverse", // Play animation forward, reverse on scroll up
        },
      });

      tl.from(".intro > div", {
        duration: 1.5,
        opacity: 0,
        y: -100,
        ease: "Power4.out",
        stagger: { amount: 0.3 },
      });

      tl.from(".hr", {
        duration: 1.5,
        width: 0,
        ease: "Power4.out",
      }, "-=1.2");

      tl.from(".reveal div", {
        duration: 1.5,
        y: 200,
        ease: "Power4.out",
        stagger: { amount: 0.8 },
      }, "-=1.5");

      tl.from(".nav-item", {
        duration: 1.5,
        opacity: 0,
        y: 100,
        ease: "Power4.out",
        stagger: { amount: 0.8 },
      }, "-=1.5");
    });

    return () => ctx.revert(); // Cleanup animations when component unmounts
  }, []);

  return (
    <div className="profile-container">
      <div className="containers w-screen">
        <div className="row">
          <div className="reveal">
            <div className="h1 primary">C<span>o</span>n<span>s</span><span>t</span>ance</div>
          </div>
          <div className="reveal">
            <div className="h1 primary"><span>Sou</span>vi<span>lle</span></div>
          </div>
        </div>
        <div className="hr"></div>
        <div className="row intro">
          <div className="p">important</div>
          <div className="p">Team mate</div>
          <div className="p">team3</div>
          <div className="p">team4</div>
        </div>
        <div className="white-space"></div>
        <div className="row">
          <div className="nav-item about">
            <div>About</div>
            <div className="id">01</div>
          </div>
          <div className="reveal">
            <div className="h1 secondary">French</div>
          </div>
          <div className="nav-item projects">
            <div>Project</div>
            <div className="id">02</div>
          </div>
        </div>
        <div className="hr"></div>
        <div className="row">
          <div className="reveal">
            <div className="h1 secondary">Important</div>
          </div>
          <div className="reveal">
            <div className="h1 secondary">Team4 &nbsp; &nbsp;</div>
          </div>
        </div>
        <div className="hr"></div>
        <div className="row">
          <div className="reveal">
            <div className="h1 secondary">Based</div>
          </div>
          <div className="nav-item contact">
            <div>Contact</div>
            <div className="id">03</div>
          </div>
          <div className="reveal">
            <div className="h1 secondary">India</div>
          </div>
        </div>
        <div className="hr"></div>
      </div>
    </div>
  );
};

export default ProfileName;
