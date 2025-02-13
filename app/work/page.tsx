"use client" 

import { Divz } from "divz";
import Header from "../components/navbar/header";
import "./styles.css"
import Navbar from "../components/navbar/navbar";

export default function Work() {
  return (<>
    <Navbar/>
    <Divz className="hero" showNavButtons={false} showExpandButton={false} showPlayButton={false} isScrollPageEnabled={true}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <a href="https://xmonks.com"><div>4</div></a>
    </Divz>
    </>
  );
}