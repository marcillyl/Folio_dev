import * as React from 'react';
import '../styles/styles.css';
import '../styles/work.css';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='title'>
        <h2 className='title__headline'>
          <span className='title__headline--big'>
            <span className='title__headline--number'>III.</span>work
          </span>
          - Things I've created -
        </h2>
      </div>
      <p className='text'>
        Here are some projects I've worked on. Feel free to check out their
        repositories on Github !
      </p>
      <article className='project'>
        <a href='https://github.com/marcillyl/weTalk'>
          <h3 className='project-headline'>
            <i className='fab fa-github project-headline__icon'></i>
            <span className='project-headline__line'>_</span>weTalk
          </h3>
        </a>
        <div className='project-container'>
          <p className='project__text'>
            weTalk is a simple social network app based on a student project.
            Rebuilt from scratch using MongoDB, it's a sandbox to try out things
            and ideas.
          </p>
          <ul className='project-list'>
            <li>[Vue.js] - the progressive JavaScript framework</li>
            <li>[node.js] - evented I/O for the backend</li>
            <li>[Express] - fast node.js network app framework</li>
            <li>[Mongoose] - the MongoDB framework</li>
          </ul>
          <i className='fas fa-comments project__icon'></i>
        </div>
      </article>
      <article className='project'>
        <a href='https://github.com/marcillyl/vCam'>
          <h3 className='project-headline'>
            <i className='fab fa-github project-headline__icon'></i>
            <span className='project-headline__line'>_</span>vCam
          </h3>
        </a>
        <div className='project-container project-container--alt'>
          <p className='project__text'>
            vCam is a simple e-shop website based on a student project. Browse
            the catalog, add products to your cart and proceed to checkout :
            it's as simple as that !
          </p>
          <ul className='project-list'>
            <li>[Vue.js] - the progressive JavaScript framework</li>
            <li>[node.js] - evented I/O for the backend</li>
            <li>[Express] - fast node.js network app framework</li>
            <li>[Mongoose] - the MongoDB framework</li>
          </ul>
          <i className='fas fa-shopping-cart project__icon'></i>
        </div>
      </article>
      <article className='project'>
        <a href='https://github.com/marcillyl/Remote'>
          <h3 className='project-headline'>
            <i className='fab fa-github project-headline__icon'></i>
            <span className='project-headline__line'>_</span>reMote
            (work-in-progress)
          </h3>
        </a>
        <div className='project-container'>
          <p className='project__text'>
            reMote is a project management tool. Built on Next, it's a sandbox
            to try out things and ideas within a fully featured React
            application.
          </p>
          <ul className='project-list'>
            <li>[Next.js] - the progressive JavaScript framework</li>
            <li>[node.js] - evented I/O for the backend</li>
            <li>[Express] - fast node.js network app framework</li>
            <li>[Mongoose] - the MongoDB framework</li>
          </ul>
          <i className='fas fa-tasks project__icon'></i>
        </div>
      </article>
    </section>
  );
};

export default Work;
