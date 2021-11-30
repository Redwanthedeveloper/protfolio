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
              <div
                className='font__end box'
                data-aos='fade-up'
                data-aos-duration='1200'
              >
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='laptop-code'
                  class='svg-inline--fa fa-laptop-code fa-w-20'
                  width='100'
                  height='100'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 640 512'
                >
                  <path
                    fill='currentColor'
                    d='M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z'
                  ></path>
                </svg>
                <h3 className='experience__box__title'>Front End Developer</h3>
                {
                  // eslint-disable-next-line
                  <a href='#'>
                    Discover More <img src='/images/right-arrow.svg' alt='' />
                  </a>
                }
              </div>
              <div
                className='back__end box'
                data-aos='fade-up'
                data-aos-duration='1400'
              >
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='server'
                  width='100'
                  height='100'
                  class='svg-inline--fa fa-server fa-w-16'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path
                    fill='currentColor'
                    d='M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z'
                  ></path>
                </svg>
                <h3 className='experience__box__title'>Back End Developer</h3>
                {
                  // eslint-disable-next-line
                  <a href='#'>
                    Discover More <img src='/images/right-arrow.svg' alt='' />
                  </a>
                }
              </div>
              <div
                className='mobile__app box'
                data-aos='fade-up'
                data-aos-duration='1600'
              >
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='mobile-alt'
                  width='100'
                  height='100'
                  class='svg-inline--fa fa-mobile-alt fa-w-10'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 320 512'
                >
                  <path
                    fill='currentColor'
                    d='M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z'
                  ></path>
                </svg>
                <h3 className='experience__box__title'>Mobile App Developer</h3>
                {
                  // eslint-disable-next-line
                  <a href='#'>
                    Discover More <img src='/images/right-arrow.svg' alt='' />
                  </a>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
