import React/*, { useEffect, useState }*/ from 'react'
import './about.css'
import desk from '../../assets/desk.png'
import { useSelector } from 'react-redux'

const About = () => {

  const data = useSelector((state) => state.data)

  return (
    <>
    <section className='about__container' id='about'>
      <div className='about__container-data'>
        <div className='about__image-container'>
          <img src={desk} alt="desk" className='about__image'/>
        </div>
        <div className='about__details-container'>
          <h1 className='about__title'>Sobre Mí</h1>
          <p>{data.about}</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About