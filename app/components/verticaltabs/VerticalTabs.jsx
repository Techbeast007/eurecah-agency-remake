'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './verticalTabs.css';

gsap.registerPlugin(ScrollTrigger);

const tabs = [
  {
    id: 1,
    title: 'Innovate',
    heading: 'Creative Vision',
    description: 'Discover groundbreaking ideas that shape the future.',
    image: 'https://tse1.mm.bing.net/th?id=OIP.ue2yDbIy-Adu_bgbGdb7XwHaE7&pid=Api&rs=1&c=1&qlt=95&w=171&h=114',
  },
  {
    id: 2,
    title: 'Explore',
    heading: 'Uncharted Ideas',
    description: 'Venture into unexplored territories of creativity.',
    image: 'https://tse1.mm.bing.net/th?id=OIP.ue2yDbIy-Adu_bgbGdbGdb7XwHaE7&pid=Api&rs=1&c=1&qlt=95&w=171&h=114',
  },
  {
    id: 3,
    title: 'Build',
    heading: 'Turning Ideas into Reality',
    description: 'Transform concepts into tangible solutions.',
    image: 'https://tse1.mm.bing.net/th?id=OIP.ue2yDbIy-Adu_bgbGdb7XwHaE7&pid=Api&rs=1&c=1&qlt=95&w=171&h=114',
  },
  {
    id: 4,
    title: 'Transform',
    heading: 'Shaping the Future',
    description: 'Redefine the way we live and work.',
    image: 'https://tse1.mm.bing.net/th?id=OIP.ue2yDbIy-Adu_bgbGdb7XwHaE7&pid=Api&rs=1&c=1&qlt=95&w=171&h=114',
  },
];

const VerticalTabs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const tabs = containerRef.current.querySelectorAll('.tab');

    if (!isMobile) {
      // ✨ Desktop hover effect
      tabs.forEach((tab) => {
        tab.addEventListener('mouseenter', () => {
          gsap.to(tab, { flex: 1.9, duration: 0.4, ease: 'power2.out' });
          gsap.to(tab.querySelector('.tab-image'), { scale: 1.2, opacity: 1, duration: 0.5, ease: 'power2.out' });
          gsap.to(tab.querySelector('.tab-content'), { opacity: 1, scale: 1.05, duration: 0.5, ease: 'power2.out' });
          gsap.to(tab.querySelector('.tab-description'), { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
        });

        tab.addEventListener('mouseleave', () => {
          gsap.to(tab, { flex: 1, duration: 0.5, ease: 'power2.inOut' });
          gsap.to(tab.querySelector('.tab-image'), { scale: 1, opacity: 0.85, duration: 0.2, ease: 'power2.inOut' });
          gsap.to(tab.querySelector('.tab-content'), { scale: 1, opacity: 1, duration: 0.2, ease: 'power2.inOut' });
          gsap.to(tab.querySelector('.tab-description'), { opacity: 0, y: -10, duration: 0.3, ease: 'power2.inOut' });
        });
      });
    } else {
      // 📱 Mobile scroll effect
      gsap.utils.toArray('.tab').forEach((tab) => {
        gsap.fromTo(
          tab,
          { height: '60vh', opacity: 0.8 },
          {
            height: '100vh',
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: tab,
              start: 'top 80%',
              end: 'top 50%',
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          tab.querySelector('.tab-description'),
          { opacity: 0, y: -10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: tab,
              start: 'top 80%',
              end: 'top 50%',
              scrub: true,
            },
          }
        );
      });
    }

    return () => {
      if (!isMobile) {
        tabs.forEach((tab) => {
          tab.removeEventListener('mouseenter', () => {});
          tab.removeEventListener('mouseleave', () => {});
        });
      } else {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <div className='tabs-container' ref={containerRef}>
      {tabs.map((tab) => (
        <div key={tab.id} className='tab'>
          <div className='tab-content'>
            <p className='tab-heading'>{tab.heading}</p>
            <h1 className='tab-title'>{tab.title}</h1>
            <p className='tab-description'>{tab.description}</p>
            <p className='tab-number'>{tab.id}</p>
          </div>
          <img src={tab.image} alt={tab.title} className='tab-image' />
        </div>
      ))}
    </div>
  );
};

export default VerticalTabs;
