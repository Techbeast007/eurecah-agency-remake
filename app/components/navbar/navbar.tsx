"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Logo from "../logo/logo";
import styles from "./styles.module.scss";
import Header from "./header";
import PrimaryBtn from "../primary-btn";
import Link from "next/link";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle Navigation
  const toggleNav = () => {
    setIsActive(!isActive);
  };

  // Track Scroll Position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change background after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<nav
  className={`fixed top-0 left-0 w-full h-[14vh] z-50 p-2 transition-all duration-300 ${
    isScrolled ? "bg-white" : "bg-transparent"
  }`}
>

      <div className="w-[95%] m-auto p-4 flex justify-between items-center h-[10vh]">
        <div className="logo">
          <Link href={"/"}>
          <Logo />
            
          </Link>
      
        </div>

        <div className="nav-right flex items-center justify-between gap-x-4">
          <div className="hidden md:flex">
            <PrimaryBtn />
          </div>

          <div>
            <button className={styles.button} onClick={toggleNav}>
              <div
                className={`${styles.burger} ${
                  isActive ? styles.burgerActive : ""
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && <Header toggleNav={toggleNav} />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
