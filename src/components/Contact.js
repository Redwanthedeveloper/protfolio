import React from 'react';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='container'>
        <div className='contact__wrapper'>
          <div
            className='contact__left'
            data-aos='fade-right'
            data-aos-duration='1000'
          >
            <h2 className='contact__title'>Let's Connect</h2>
            <p className='contact__description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus culpa aliquid molestias aliquam! Molestias
              doloremque culpa incidunt voluptates quia suscipit!
            </p>
            <div className='social'>
              {
                // eslint-disable-next-line
                <a href='#'>
                  <svg
                    width='30'
                    height='30'
                    viewBox='0 0 30 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M26.7857 0H3.2143C2.36182 0 1.54425 0.338647 0.941458 0.941443C0.338662 1.54424 1.52588e-05 2.3618 1.52588e-05 3.21429L1.52588e-05 26.7857C1.52588e-05 27.6382 0.338662 28.4558 0.941458 29.0586C1.54425 29.6614 2.36182 30 3.2143 30H12.4051V19.8007H8.1864V15H12.4051V11.3411C12.4051 7.17924 14.8828 4.88036 18.6777 4.88036C20.4951 4.88036 22.3955 5.20446 22.3955 5.20446V9.28929H20.3016C18.2384 9.28929 17.5949 10.5696 17.5949 11.8828V15H22.2007L21.4641 19.8007H17.5949V30H26.7857C27.6382 30 28.4558 29.6614 29.0586 29.0586C29.6614 28.4558 30 27.6382 30 26.7857V3.21429C30 2.3618 29.6614 1.54424 29.0586 0.941443C28.4558 0.338647 27.6382 0 26.7857 0Z'
                      fill='#7364E3'
                    />
                  </svg>
                </a>
              }
              {
                // eslint-disable-next-line
                <a href='#'>
                  <svg
                    width='30'
                    height='30'
                    viewBox='0 0 30 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M27.8572 0H2.13616C0.95759 0 0 0.970982 0 2.16295V27.8371C0 29.029 0.95759 30 2.13616 30H27.8572C29.0357 30 30 29.029 30 27.8371V2.16295C30 0.970982 29.0357 0 27.8572 0ZM9.06697 25.7143H4.62054V11.3973H9.07367V25.7143H9.06697ZM6.84375 9.44196C5.41741 9.44196 4.26563 8.28348 4.26563 6.86384C4.26563 5.4442 5.41741 4.28571 6.84375 4.28571C8.2634 4.28571 9.42188 5.4442 9.42188 6.86384C9.42188 8.29018 8.27009 9.44196 6.84375 9.44196ZM25.7344 25.7143H21.288V18.75C21.288 17.0893 21.2545 14.9531 18.9777 14.9531C16.6607 14.9531 16.3058 16.7612 16.3058 18.6295V25.7143H11.8594V11.3973H16.125V13.3527H16.1853C16.7813 12.2277 18.2344 11.0424 20.3973 11.0424C24.8973 11.0424 25.7344 14.0089 25.7344 17.8661V25.7143Z'
                      fill='#7364E3'
                    />
                  </svg>
                </a>
              }
            </div>
          </div>
          <div
            className='contact__right'
            data-aos='fade-left'
            data-aos-duration='1000'
          >
            <h3 className='contact__right__title'>
              Let’s message me and make something together!
            </h3>
            <form className='contact__form'>
              <input type='text' placeholder='Your Name' />
              <input type='email' placeholder='Your Email' />
              <input type='text' placeholder='Project Details' />
              <button className='contact__btn btn'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
