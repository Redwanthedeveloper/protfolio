import React from 'react';

const Experience = () => {
  return (
    <div className='experience'>
      <div className='container'>
        <div className='experience__wrapper'>
          <div className='left__experience'>
            <h1 className='experience__year'>1.5+</h1>
            <h3 className='desc'>Years Experience Working</h3>
          </div>
          <div className='right__experience'>
            <h3 className='experience__title'>
              Front-end and Back-end web developer, specialized in React.js and
              Node.js
            </h3>
            <div className='experience__right__wrapper'>
              <div className='font__end box'>
                <h3 className='experience__box__title'>Front End Developer</h3>
                <a href='#'>
                  Discover More <img src='/images/right-arrow.svg' alt='' />
                </a>
              </div>
              <div className='back__end box'>
                <h3 className='experience__box__title'>Back End Developer</h3>
                <a href='#'>
                  Discover More <img src='/images/right-arrow.svg' alt='' />
                </a>
              </div>
              <div className='mobile__app box '>
                <h3 className='experience__box__title'>Mobile App Developer</h3>
                <a href='#'>
                  Discover More <img src='/images/right-arrow.svg' alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
