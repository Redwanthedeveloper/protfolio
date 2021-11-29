import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar__main'>
          <div className='navbar__left'>
            <h3 className='logo'>Redwan's world</h3>
          </div>
          <div className='navbar__right'>
            <ul>
              <li className='nav__item'>
                <a href='#service'>Services</a>
              </li>
              <li className='nav__item'>
                <a href='#works'>Works</a>
              </li>
              <li className='nav__item'>
                <a href='#contact'>Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
