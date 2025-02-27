"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/navbar/navbar";
import ScratchReveal from "../components/scrathable/ScratchReveal";
import ServicePage from "../components/servicespage/ServicePage"
import FluidCursorCanvas from "../components/FluidCursor";
import ServiceSlider from './ServiceSlider'


const services = [
  {
    title: "Video Production",
    description: "High-quality video production for ads, films, and marketing.",
    image: "/images/video-production.jpg",
  },
  {
    title: "Digital Marketing",
    description: "Boost your brand with SEO, social media, and PPC advertising.",
    image: "/images/digital-marketing.jpg",
  },
  {
    title: "Documentary Filmmaking",
    description: "Capture real stories with stunning documentary production.",
    image: "/images/documentary.jpg",
  },
];

const Services = () => {
  return (
    <>
<Navbar/>
<ScratchReveal firstWord="Our" secondWord="Services"/>
<FluidCursorCanvas/>
<ServiceSlider/>

    </>
  );
};

export default Services;
