import * as React from 'react';
import { Helmet } from 'react-helmet';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../styles/styles.css';

const IndexPage = () => {
  return (
    <div className='container' id='home'>
      <Helmet>
        <meta
          name='description'
          content='This is the portfolio of Luc Marcilly, web developer in Bordeaux, France.'
        />
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.2.0/css/all.css'
        />
      </Helmet>
      <Nav />
      <main className='main'>
        <Header />
        <Skills />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
