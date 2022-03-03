import * as React from 'react';
import '../styles/nav.css';

const Nav = () => {
  return (
    <nav className='nav'>
      <a href='#home' className='nav__link'>
        Hello
      </a>
      <a href='#skills' className='nav__link'>
        Skills
      </a>
      <a href='#work' className='nav__link'>
        Work
      </a>
      <a href='#about' className='nav__link'>
        About
      </a>
      <a href='#contact' className='nav__link'>
        Contact
      </a>
    </nav>
  );
};

export default Nav;
