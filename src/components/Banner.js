import React from 'react';
import Navbar from './Navbar';
const Banner = () => {
  return (
    <div className='hero__area'>
      <Navbar />
      <div className='hero__main'>
        <div className='dot1 '></div>
        <div className='dot2 '></div>
        <div className='container'>
          <div className='hero__wrapper'>
            <div className='hero__left ' data-aos="fade-right" data-aos-duration="1000">
              <h1 className='title'>Redwanul Haque</h1>
              <p className='intro'>
                Full stack Javascript web developer based in Bogura, Bangladesh.
              </p>
              {
                // eslint-disable-next-line
              <a href='#' className='hire__me__btn btn'>
                Hire Me
              </a>
              }
            </div>
            
            <img
              src='/images/redwan.png'
              alt='Redwan'
              className=''
              data-aos="fade-left" data-aos-duration="1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
