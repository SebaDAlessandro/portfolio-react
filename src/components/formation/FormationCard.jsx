import React from 'react'
import './formationCard.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const FormationCard = () => {

  const { id } = useParams()

  const data = useSelector((state)=>state.data) 

  // eslint-disable-next-line
  const formation = data.training.find(element => element.id == id)

  const navigate = useNavigate()

  const back = ()=>{
    navigate('/')
  }

  return (
    <section className='formationCard__container'>
      <div className='formationCard__header'>
        <h1 className='formationCard__institucion'>{formation.institution}</h1>
        <hr className='formationCard__hr'/>
        <h3 className='formationCard__title'>{formation.title}</h3>
      </div>
      <div className='formationCard__dates-container'>
        <h5 className='formationCard__dates-key'>Inicio: <p className='formationCard__dates-initiation'>{formation.initiation}</p></h5>
        <h5 className='formationCard__dates-key'>Finalización: <p className='formationCard__dates-finished'>{formation.finished}</p></h5>
        <h5 className='formationCard__dates-key'>Duración: <p className='formationCard__dates-period'>{formation.period}</p></h5>
      </div>
      <div className='formationCard__description-container'>
        <h3 className='formationCard__description-title'>Temario:</h3>
        <ul>{formation.subjects.map((item, index)=>{
          return(
              <li key={index}><p className='formationCard__description-item'>- {item}</p></li>
          )
        })}
        </ul>
        <h3 className='formationCard__description-title'>Detalles:</h3>
        <p className='formationCard__description-description'>{formation.description}</p>
      </div>
      <button className='formationCard__button' onClick={back}>Back</button>
    </section>
  )
}

export default FormationCard