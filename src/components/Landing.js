import React from 'react';
import AboutUs from './AboutUs';
import Hero from './Hero';
import Testimonial from './Testimonial';

function Landing() {
  return (
    <div className='landing row-a'>
      <Hero/>
      <AboutUs/>
      <Testimonial/>
      <div className="backgroundGrad"></div>
    </div>
  )
}

export default Landing
