import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const FormationCard = () => {

  const { id } = useParams()

  const data = useSelector((state)=>state.data) 

  const formation = data.training.find(element => element.id == id)

  const navigate = useNavigate()

  const back = ()=>{
    navigate('/')
  }

  return (
    <>
    {console.log('Formacion: ',formation, 'id: ',id)}
    <h1>{formation.institution}</h1>
    <h2>{formation.title}</h2>
    <h5>Inicio: <span>{formation.initiation}</span></h5>
    <h5>Finalización: <span>{formation.finished}</span></h5>
    <h6>Descripción:</h6>
    <ul>{formation.description.map((item, index)=>{
      return(
          <li key={index}><p>- {item}</p></li>
      )
    })}
    </ul>
    <button onClick={back}>Back</button>
    </>
  )
}

export default FormationCard