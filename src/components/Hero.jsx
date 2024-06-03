import React from 'react';
import Navbar from './Navbar';
import './Hero.css';

function Hero() {
  return (
    <div className='hero'>
      <Navbar />
      <div className='hero-elements'>
      <div className='hero-text'>
        <img src='src/assets/textbubble.png' />
        <h1>Web Developer</h1>
      </div>
      <div className='hero-name' >
          <img src='src/assets/name.png' alt='Sarah Carlat name text' />
          </div>
      <div className='hero-icon'>
        <img src='src/assets/icon.png' alt='Icon' />
        </div>
        <div className='hero-bg'>
          <img src='src/assets/gradient.png' alt='Gradient' />
      </div>
      </div>
      </div>
  )
}

export default Hero;

