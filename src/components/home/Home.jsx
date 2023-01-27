import React from 'react'
import Header from '../header/Header';
import About from '../about/About';
import Formation from '../formation/Formation';
import Main from '../main/Main'
import Experience from '../experience/Experience';

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Formation />
      <Experience />
    </>
  )
}

export default Home