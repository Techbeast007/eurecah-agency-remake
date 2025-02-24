"use client";
import SlidingTextStrip from "../components/SlidingTextStrip";
import ScratchReveal from "../components/scrathable/ScratchReveal"
import {Card, CardHeader, CardFooter, Image, Button} from "@heroui/react";
import CardCarousal from './CardCarousal'
import OurMission from './OurMission'
import Navbar from '../components/navbar/navbar'
import ProfileName from  '../components/profilenames/ProfileName'
import FluidCursor from '../components/FluidCursor'

export default function About() {
  return (
    <>
    <div w-screen>
    <Navbar/>
    
    
        <ScratchReveal firstWord="About" secondWord=""/>


        <OurMission />



      <SlidingTextStrip
        words={["EXPERIENCE", "PASSION", "FILM", "MARKETING", "BRANDING", "PRODUCTION"]}
        direction="right"
      />

      <ProfileName/>
      <FluidCursor/>
      </div>
      </>



  );
}
