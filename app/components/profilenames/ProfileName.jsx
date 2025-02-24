"use client";
import React from "react";
import { motion } from "framer-motion";
import "./profilename.css"

const ProfileName = () => {
  return (
    <>
    <div className="containers  w-screen">
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
          <div className="h1 secondary">
            French
          </div>
          <div className="nav-item projects">
            <div>Project</div>
            <div className="id">02</div>
          </div>

        </div>
      </div>
      <div className="hr"></div>
          <div className="row">
            <div className="reveal">
              <div className="h1 secondary">Important</div>
            </div>
            <div className="reveal">
              <div className="h1 secondary">
                Team4 &nbsp; &nbsp;
              </div>
            </div>
          

          </div>
      <div className="hr"></div>
      <div className="row">
              <div className="reveal">
                <div className="h1 secondary">
                  Based
                </div>
              </div>
              <div className="nav-item contact">
                <div>Contact</div>
                <div className="id">03</div>
              </div>
              <div className="reveal">
                <div className="h1 secondary">
                  India
                </div>
              </div>
             
            </div>
            <div className="hr"></div>
    </div>
    </>
  );
};

export default ProfileName;
