import * as React from 'react';
import '../styles/styles.css';
import '../styles/skills.css';

const Skills = () => {
  return (
    <section className='section' id='skills'>
      <div className='title'>
        <h2 className='title__headline'>
          <span className='title__headline--big'>
            <span className='title__headline--number'>II.</span>skills
          </span>
          - Things I've learned -
        </h2>
      </div>
      <p className='text'>
        I've learned different tools to materialize ideas. From backend to
        frontend, I've developped skills using open source technologies. I like
        to keep learning, continue challenging myself and discover new ways to
        solve problems.
      </p>
      <div className='skills'>
        <article className='skills-skill'>
          <i className='fab fa-html5 skills-skill__icon'></i>
          <p className='skills-skill__text'>HTML5</p>
        </article>
        <article className='skills-skill'>
          <i className='fab fa-css3-alt skills-skill__icon'></i>
          <p className='skills-skill__text'>CSS3</p>
        </article>
        <article className='skills-skill'>
          <i className='fab fa-vuejs skills-skill__icon'></i>
          <p className='skills-skill__text'>Vue.js</p>
        </article>
        <article className='skills-skill'>
          <i className='fab fa-angular skills-skill__icon'></i>
          <p className='skills-skill__text'>Angular</p>
        </article>
        <article className='skills-skill'>
          <i className='fab fa-node-js skills-skill__icon'></i>
          <p className='skills-skill__text'>node.js</p>
        </article>
        <article className='skills-skill'>
          <i className='fas fa-server skills-skill__icon skills-skill__icon--alt'></i>
          <p className='skills-skill__text'>MongoDB</p>
        </article>
      </div>
    </section>
  );
};

export default Skills;
