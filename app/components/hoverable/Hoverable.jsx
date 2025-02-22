'use client';

import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import './hoverable.css';

const awards = [
  { name: 'Best Cinematography', type: 'Film', project: 'Wanderlust Documentary', label: '2023 International Film Festival' },
  { name: 'Top Ad Campaign', type: 'Advertising', project: 'Brand X Commercial', label: 'Marketing Excellence Awards 2022' },
  { name: 'Best Travel Film', type: 'Film', project: 'Journey Through The Wild', label: 'Global Travel Media Awards 2021' },
  { name: 'Creative Excellence', type: 'Digital Content', project: 'Social Impact Series', label: 'Content Creators Summit 2020' },
];

const imagesLink = [
  'https://tse1.mm.bing.net/th?id=OIP.FsNERROyX1AQl9KeVTyczwHaEo&pid=Api',
  'https://tse1.mm.bing.net/th?id=OIP.FsNERROyX1AQl9KeVTyczwHaEo&pid=Api',
  'https://tse1.mm.bing.net/th?id=OIP.FsNERROyX1AQl9KeVTyczwHaEo&pid=Api',
  'https://tse1.mm.bing.net/th?id=OIP.FsNERROyX1AQl9KeVTyczwHaEo&pid=Api',
];

const POSITIONS = {
  BOTTOM: 0,
  MIDDLE: -80,
  TOP: -160,
};

const Hoverable = () => {
  const previewRef = useRef(null);
  const [activeAward, setActiveAward] = useState(null);

  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis({ smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const handleMouseEnter = (e, index) => {
    setActiveAward(index);

    // Move the text upwards smoothly
    const wrapper = e.currentTarget.querySelector('.award-wrapper');
    gsap.to(wrapper, { y: POSITIONS.MIDDLE, duration: 0.5, ease: 'power3.out' });

    // Create and animate the image
    const img = document.createElement('img');
    img.src = imagesLink[index];
    img.className = 'imgd';
    img.style.position = 'absolute';
    img.style.opacity = '0';
    img.style.transform = 'scale(0.9) translateY(10px)'; // Start slightly smaller & lower

    previewRef.current.appendChild(img);

    gsap.to(img, {
      opacity: 1,
      scale: 1,
      y: 0, // Float into position
      duration: 0.6,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = (e) => {
    setActiveAward(null);

    // Move text back down
    const wrapper = e.currentTarget.querySelector('.award-wrapper');
    gsap.to(wrapper, { y: POSITIONS.BOTTOM, duration: 0.5, ease: 'power3.out' });

    // Fade out & remove the image
    const lastImage = previewRef.current.lastChild;
    if (lastImage) {
      gsap.to(lastImage, {
        opacity: 0,
        scale: 0.9, // Shrink slightly as it fades
        y: 10, // Move down smoothly
        duration: 0.5,
        ease: 'power3.out',
        onComplete: () => lastImage.remove(),
      });
    }
  };

  return (
    <>
      <section className='intro sectiond'>
        <h1 className='h1s'>MORE WORK</h1>
      </section>

      <section className="awards sectiond">
    <p className="ps">Recognition</p>
    <div className="awards-list">
      {awards.map((award, index) => (
        <div
          key={index}
          className="award"
          onMouseEnter={(e) => handleMouseEnter(e, index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="award-wrapper">
            <div className="award-name">
              <h1>{award.name}</h1>
              <h1>{award.type}</h1>
            </div>
            <div className="award-project">
              <h1>{award.project}</h1>
              <h1>{award.label}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>


      {/* Image Preview Container */}
      <div className='awards-preview' ref={previewRef}></div>
    </>
  );
};

export default Hoverable;
