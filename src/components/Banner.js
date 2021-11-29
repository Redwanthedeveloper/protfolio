import React from 'react';
import Navbar from './Navbar';
const Banner = () => {
  return (
    <div className='hero__area'>
      <Navbar />
      <div className='hero__main '>
        <div className='dot1 animate__animated animate__flipInX animate__fast'></div>
        <div className='dot2 animate__animated animate__flipInX animate__fast'></div>
        <div className='container'>
          <div className='hero__wrapper'>
            <div className='hero__left animate__animated animate__backInLeft animate__slow'>
              <h1 className='title'>Redwanul Haque</h1>
              <p className='intro'>
                Full stack Javascript web developer based in Bogura, Bangladesh.
              </p>
              <a href='#' className='hire__me__btn'>
                Hire Me
              </a>
            </div>

            <img
              src='/images/redwan.png'
              alt='Redwan'
              className='animate__animated animate__backInRight animate__slow'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
