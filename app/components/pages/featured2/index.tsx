"use client";
import React from "react";
import { motion, useSpring } from "framer-motion";
import styles from "./styles.module.scss";
import Image from "next/image";

import image1 from "@/public/assets/asset 19.png";
import image2 from "@/public/assets/asset 20.jpeg";
import image3 from "@/public/assets/asset 21.jpeg";
import image4 from "@/public/assets/asset 22.gif";
import image5 from "@/public/assets/asset 23.png";
import image6 from "@/public/assets/asset 24.jpeg";

const content = [
  { title: "Travel & Tourism", image: image1 },
  { title: "Advertising & Branding", image: image2 },
  { title: "Entertainment & Events", image: image3 },
  { title: "E-commerce & Retail", image: image4 },
  { title: "Education & Institutions", image: image5 },
  { title: "Startups & Tech", image: image6 },
];

const Featured2 = () => {
  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.2,
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const mouseMove = (e:any) => {
    const { clientX, clientY } = e;
    const targetX = clientX - window.innerWidth * 0.125;
    const targetY = clientY - window.innerHeight * 0.4;
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  return (
    <main className={styles.main}>
      <div className="h-full w-screen">
        {content.map((item, index) => (
          <motion.div
  key={index}
  initial={{ opacity: 0, y: 50, rotate: 90 }} // Start with rotation
  animate={{ opacity: 1, y: 0, rotate: 0 }}  // Roll in while moving up
  transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
>

            <hr className="w-[90%] mx-auto opacity-40" />
            <div
              className="w-[90%] h-[30vh] mx-auto flex items-center justify-center relative"
              onMouseMove={mouseMove}
            >
              <div className="h-1/2 overflow-hidden">
                <motion.div>
                  <motion.p >{item.title}</motion.p>
                  <motion.p  className="translate-y-1/2 hidden md:flex">
                    {item.title}
                  </motion.p>
                </motion.div>
              </div>

              <motion.div
                className="absolute w-full"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.div
                  className="bg-sky-400 lg:w-[250px] lg:h-[350px] rotate-12"
                  style={{ x: mousePosition.x, y: mousePosition.y }}
                >
                  <Image
                    src={item.image}
                    alt="image"
                    className="object-cover object-center lg:h-[350px] lg:w-[250px]"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Featured2;
