import React from 'react'
import './experience.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Experience = () => {

    const data = useSelector((state) => state.data)

  return (
    <section id='experience' className='experience__container'>
        <div className='experience__container-data'>
            <h1 className='experience__title'>Experiencia laboral</h1>
            <div className='experince__dashboard'>
                {data.experience.map((item)=>{
                    return(
                        <div className='experience__card-container' key={item.id}>
                            <h2 className='experience__card-company'>{item.company}</h2>
                            <h3 className='experience__card-position'>{item.position}</h3>
                            <div className='experience__card-dates'>
                                <h4 className='experience__card-key'>- Inicio: <span className='experience__card-initiation'>{item.initiation}</span></h4>
                                <h4 className='experience__card-key'>- Fin: <span className='experience__card-finished'>{item.finished}</span></h4>
                            </div>
                            <div className='experience__card-details'>
                                <h4 className='experience__card-details-title'>Principales funciones:</h4>
                                <ul className='experience__card-details-list'>
                                    {item.description.map((item, index)=>{
                                        return(
                                            <li className='experience__card-item' key={index}><span className="material-symbols-outlined chevron">chevron_right</span>{item}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div>
                                <Link to={`/successDetail/${item.id}`}><p>Logros y puntos destacados</p></Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Experience