import React from 'react'
import Header from '../header/Header';
import About from '../about/About';
import Formation from '../formation/Formation';
import Main from '../main/Main'
import Experience from '../experience/Experience';
import HardSkills from '../hardSkills/HardSkills';
import Hobbys from '../hobbys/Hobbys';
import Projects from '../projects/Projects';

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Formation />
      <HardSkills />
      <Experience />
      <Hobbys />
      <Projects />
    </>
  )
}

export default Home