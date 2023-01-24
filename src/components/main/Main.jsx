import React from 'react'
import './main.css'
import Typewriter from 'typewriter-effect';
import { useSelector } from 'react-redux'


const Main = () => {

    const data = useSelector((state) => state.data)

  return (
    <section className='main__container' id='inicio'>

        <div className='main__titel-container'>
            <div className='main__title'>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter
                        .typeString(`Hola, mi nombre es <span class="main__title-name">${data.name}</span>`)
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString('Bienvenido a mi porfolio')
                        .pauseFor(2500)
                        .deleteAll()
                        .start();
                    }}
                />
            </div>
            <div className='main__photo-container'>
                <img src={data.personalImage} alt='Who I am' className='main__photo'/>
            </div>
        </div>

        <div className='main__details-container'>
            <p className='main__title-description'>Soy <span className='underline'>Analista Sr</span>, <span className='underline'>FrontEnd Developer</span>, un apasionado por la tecnología, el deporte al aire libre y padre de familia.</p>
                    
            <ul className='main__list-container'>
                <li className='main__list-item'><span className="material-symbols-outlined arrow">arrow_outward</span>LinkedIn</li>
                <li className='main__list-item'><span className="material-symbols-outlined arrow">arrow_outward</span>GitHub</li>
                <li className='main__list-item'><span className="material-symbols-outlined arrow">arrow_outward</span>Curriculum</li>
            </ul>
        </div>
    </section>
  )
}

export default Main