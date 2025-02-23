"use client";
import SlidingTextStrip from "../components/SlidingTextStrip";
import ScratchReveal from "../components/scrathable/ScratchReveal"
import {Card, CardHeader, CardFooter, Image, Button} from "@heroui/react";
import CardCarousal from './CardCarousal'
import OurMission from './OurMission'

export default function About() {
  return (
    <>
    
    
        <ScratchReveal firstWord="About" secondWord=""/>


        <OurMission />



      <SlidingTextStrip
        words={["EXPERIENCE", "PASSION", "FILM", "MARKETING", "BRANDING", "PRODUCTION"]}
        direction="right"
      />
      </>



  );
}
