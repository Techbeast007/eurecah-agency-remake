"use client";

import React, { useEffect, useState } from "react";

const colors = ["#FF5733"];
const fonts = ["default"];

const ChangingText = ({ text }) => {
  const [color, setColor] = useState(colors[0]);
  const [font, setFont] = useState(fonts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(colors[Math.floor(Math.random() * colors.length)]);
      setFont(fonts[Math.floor(Math.random() * fonts.length)]);
    }, 1000); // Change every second

    return () => clearInterval(interval);
  }, []);

  return <span style={{ color, fontFamily: font }}>{text}</span>;
};

export default ChangingText;
