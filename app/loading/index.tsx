"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

const Loading = () => {
  return (
    <main className={styles.main}>
      <motion.img
        src="./Logomark@300x.png" // Ensure this path is correct
        alt="Loading Logo"
        className={styles.logo}
        initial={{ scale: 2, y: 0, opacity: 0.8 }}
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -10, 0],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </main>
  );
};

export default Loading;
