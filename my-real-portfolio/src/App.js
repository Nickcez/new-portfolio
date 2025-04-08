import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
import Contact from './components/contact/Contact.jsx';
// import Footer from './components/footer/Footer.jsx';
import Projects from './components/projects/Profile.jsx';

const App = () => {
  return (
    <>
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </main>
    </>
  );
}

export default App;
