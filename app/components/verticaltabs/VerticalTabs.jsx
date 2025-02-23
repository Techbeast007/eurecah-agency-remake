'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './verticalTabs.css';

const tabs = [
  { id: 1, title: 'Innovate', heading: 'Creative Vision', image: 'https://tse1.mm.bing.net/th?id=OIP.ue2yDbIy-Adu_bgbGdb7XwHaE7&pid=Api&rs=1&c=1&qlt=95&w=171&h=114' },
  { id: 2, title: 'Explore', heading: 'Uncharted Ideas', image: 'https://tse1.mm.bing.net/th?id=OIP.ue2yDbIy-Adu_bgbGdbGdb7XwHaE7&pid=Api&rs=1&c=1&qlt=95&w=171&h=114' },
  { id: 3, title: 'Build', heading: 'Turning Ideas into Reality', image: 'https://tse1.mm.bing.net/th?id=OIP.ue2yDbIy-Adu_bgbGdb7XwHaE7&pid=Api&rs=1&c=1&qlt=95&w=171&h=114' },
  { id: 4, title: 'Transform', heading: 'Shaping the Future', image: 'https://tse1.mm.bing.net/th?id=OIP.ue2yDbIy-Adu_bgbGdb7XwHaE7&pid=Api&rs=1&c=1&qlt=95&w=171&h=114' },
];

const VerticalTabs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const tabs = containerRef.current.querySelectorAll('.tab');

    tabs.forEach((tab) => {
      tab.addEventListener('mouseenter', () => {
        gsap.to(tab, { flex: 1.9, duration: 0.4, ease: 'power2.out' }); // Faster expansion
        gsap.to(tab.querySelector('.tab-image'), { scale: 1.2, opacity: 1, duration: 0.5, ease: 'power2.out' });
        gsap.to(tab.querySelector('.tab-content'), { opacity: 1, scale: 1.05, duration: 0.5, ease: 'power2.out' });
      });

      tab.addEventListener('mouseleave', () => {
        gsap.to(tab, { flex: 1, duration: 0.5, ease: 'power2.inOut' }); // Faster shrinkage
        gsap.to(tab.querySelector('.tab-image'), { scale: 1, opacity: 0.85, duration: 0.2, ease: 'power2.inOut' });
        gsap.to(tab.querySelector('.tab-content'), { scale: 1, opacity: 1, duration: 0.2, ease: 'power2.inOut' });
      });
    });

    return () => {
      tabs.forEach((tab) => {
        tab.removeEventListener('mouseenter', () => {});
        tab.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div className='tabs-container' ref={containerRef}>
      {tabs.map((tab) => (
        <div key={tab.id} className='tab'>
          <div className='tab-content'>
            <p className='tab-heading'>{tab.heading}</p>
            <h1 className='tab-title'>{tab.title}</h1>
            <p className='tab-number'>{tab.id}</p>
          </div>
          <img src={tab.image} alt={tab.title} className='tab-image' />
        </div>
      ))}
    </div>
  );
};

export default VerticalTabs;
