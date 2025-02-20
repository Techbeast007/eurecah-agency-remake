import React from 'react'

import styles from './styles.module.scss';
import PrimaryBtn from '../primary-btn';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className='flex justify-center flex-col items-center h-[95%]'>
          <div>
            <p className='text-[#ffffff7a] uppercase text-lg'>[want to chat?]</p>
          </div>
          <div className='my-2 z-50'>
            <PrimaryBtn />
          </div>
          
          <Image src="/Logo@300x.png" width="500" height="500" alt="RealityBox Logo" style={{margin:"90px"}}/>
      </div>

      <div id="contact" className='flex items-center p-4 h-[5%]'>
        <p>
          <span >© 2024 RealityBox. All rights reserved.</span>
        </p>
      </div>
    </div>  
      
  )
}

export default Footer
