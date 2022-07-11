import React from 'react';
import { NavbarTypes } from '../@types/ComponentTypes';
import NavbarPhoto from '../assets/image-avatar.jpg';
import { ReactComponent as LogoImg } from '../assets/logo.svg';
import { ReactComponent as SunImg } from '../assets/icon-sun.svg';
import { ReactComponent as MoonImg } from '../assets/icon-moon.svg';

const Navbar: React.FC<NavbarTypes> = ({ handleMode, lightMode }) => {
  return (
    <div className='navbar'>
      <div className='logo__background--1'>
        <div className='logo__background--2' />
        <LogoImg style={{ zIndex: '30' }} />
      </div>

      <div className='navbar__bottom'>
        {/* switching light and dark mode of invoice app */}
        <button className='light-dark__mode' onClick={handleMode}>
          {lightMode ? <SunImg /> : <MoonImg />}
        </button>

        <div className='navbar__line'></div>
        <div className='navbar__img'>
          <img
            src={NavbarPhoto}
            style={{ width: '50px', height: '50px', borderRadius: '50%' }}
            alt={NavbarPhoto}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
