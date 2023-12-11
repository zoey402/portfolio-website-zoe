import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import Projects from './Projects';
import Experiences from './Experiences';
import Contact from './Contact';


function App() {

  const [page, setPage] = useState('Home');

  return (
    <>
      <a href="#main-content" className="skiplink">Skip to main content</a>
      <Header setPage={setPage} />
      { page === 'Home' && <Home/>}
      { page === 'Projects' && <Projects/>}
      { page === 'Experiences' && <Experiences/>}
      { page === 'Contact' && <Contact/>}
      <Footer/>
    </>
  );
}

export default App;
