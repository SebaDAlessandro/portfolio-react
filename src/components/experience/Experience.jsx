import React from 'react'
import './experience.css'
import { useSelector } from 'react-redux'

const Experience = () => {

    const data = useSelector((state) => state.data)

  return (
    <section id='experience' className='experience__container'>
        {console.log(data)}
        <h1 className='experience__title'>Experiencias laborales destacadas</h1>
        {data.experience.map((item)=>{
            return(
                <div className='experience__card-container'>
                    <h2 className='experience__card-company'>{item.company}</h2>
                    <h3 className='experience__card-position'>{item.position}</h3>
                    <div className='experience__card-dates'>
                        <h4 className='experience__card-key'>Inicio: <p className='experience__card-initiation'>{item.initiation}</p></h4>
                        <h4 className='experience__card-key'>Fin: <p className='experience__card-finished'>{item.finished}</p></h4>
                    </div>
                    <div className='experience__card-details'>
                        <h4>Principales funciones:</h4>
                        <ul className='experience__card-details-list'>
                            {item.description.map((item)=>{
                                return(
                                    <li className='experience__card-item'><span class="material-symbols-outlined chevron">chevron_right</span>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        })}
    </section>
  )
}

export default Experience