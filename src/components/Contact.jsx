import * as React from 'react';
import '../styles/styles.css';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section className='section' id='contact'>
      <div className='title'>
        <h2 className='title__headline'>
          <span className='title__headline--big'>
            <span className='title__headline--number'>V.</span>contact
          </span>
          - Let's talk -
        </h2>
      </div>
      <p className='text'>
        I'm seeking out opportunities to collaborate with companies / agencies /
        individuals. I want to bring my experience to the table where we can
        work together to solve problems and answer your needs. <br />
        Drop me a line and let see what we can do together.
      </p>
      <a href='mailto:marcillyl@icloud.com' className='contact__mail'>
        Send me an email
      </a>
    </section>
  );
};

export default Contact;
