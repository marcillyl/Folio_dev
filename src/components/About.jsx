import * as React from 'react';
import '../styles/styles.css';
import '../styles/about.css';

const About = () => {
  return (
    <section className='section' id='about'>
      <div className='title'>
        <h2 className='title__headline'>
          <span className='title__headline--big'>
            <span className='title__headline--number'>IV.</span>about
          </span>
          - Things I've studied -
        </h2>
      </div>
      <p className='text'>
        I've followed different paths that led me to wed development. These
        steps are all bricks that built the person I am. Take music production
        for instance : collaboration, listening and dedication are all skills
        that I now apply to web development.
      </p>
      <ul className='about-list'>
        <i className='fas fa-user-graduate about-list__icon'></i>
        <li className='about-list__text'>Web developer</li>
        <p className='about-list__location'>Bordeaux, France</p>
        <div className='about-list__square'></div>
        <li className='about-list__text'>Music production</li>
        <p className='about-list__location'>Montréal, Canada</p>
        <div className='about-list__square'></div>
        <li className='about-list__text'>English degree</li>
        <p className='about-list__location'>Bordeaux, France</p>
      </ul>
    </section>
  );
};

export default About;
