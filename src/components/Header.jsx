import * as React from 'react';
import '../styles/styles.css';
import '../styles/header.css';

const Header = () => {
  return (
    <header className='section'>
      <div className='header'>
        <h1 className='header__headline'>
          <span className='header__headline--big'>
            <span className='header__headline--number'>I.</span>Hello,
          </span>
          Hello, I'm a web developer* in Bordeaux, France.
        </h1>
        <p className='header__text'>
          a junior <span className='header__text--start'>*</span> web developer,
          looking for opportunities and{' '}
          <span className='header__text--alt'> challenges </span>!
        </p>
      </div>
      <section className='profile'>
        <code>
          const me = &#123; <br />
          <span className='profile--key'>"firstName"</span>:
          <span className='profile--value'>"Luc"</span>,
          <br />
          <span className='profile--key'>"lastName"</span>:
          <span className='profile--value'>"Marcilly"</span>,
          <br />
          <span className='profile--key'>"age"</span>:
          <span className='profile--value'>"30"</span>,
          <br />
          <span className='profile--key'>"location"</span>:
          <span className='profile--value'>"Bordeaux"</span>,
          <br />
          <span className='profile--key'>"description"</span>:
          <span className='profile--value'>"Web developer"</span>,
          <br />
          <span className='profile--key'>"languages"</span>: &#91;
          <span className='profile--value'>"HTML"</span>,
          <span className='profile--value'>"CSS"</span>,
          <span className='profile--value'>"Javascript"</span>
          &#93;
          <br />
          &#125;,
          <br />
          <span className='profile__line'>_</span>
        </code>
      </section>
    </header>
  );
};

export default Header;
