import React from 'react';
import './Home.css';
import Skills from './components/Skills';
import About from './components/About';
import FAQs from './components/FAQs';



function Home () {

  return (

    <main id="main-content">
      <About/>
      <Skills />
      <FAQs />
    </main>

  );
}

export default Home;