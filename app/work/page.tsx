"use client" 

import { Divz } from "divz";
import Header from "../components/navbar/header";
import "./styles.css"
import Navbar from "../components/navbar/navbar";
import LogoCarousal from '../components/logocrousal/LogoCarousel'
import Image from "next/image";
import ScrollReveal from "../components/scrollable/ScrollReveal"
import BouncyTextEffect from "../components/bouncytext/BouncyTextEffect"
import ScratchReveal from '../components/scrathable/ScratchReveal'
import Cursor from "../components/coursour/Cursor"

export default function Work() {
  return (<>
    <Navbar/>
    <Cursor />
    <ScrollReveal/>

    <LogoCarousal/>
    <BouncyTextEffect/>
    <ScratchReveal/>



    </>
  );
}