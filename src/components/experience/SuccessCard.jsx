import React from 'react'
import './successCard.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Accordion from 'react-bootstrap/Accordion';
import GoToTop from '../GoToTop';

const SuccessCard = () => {

  const navigate = useNavigate()

  const { id } = useParams()

  const data = useSelector((state)=>state.data)

    // eslint-disable-next-line
  const experience = data.experience.find(element => element.id == id)

  const back = ()=>{
    navigate('/')
  }

  return (
    <section className='successCard__container'>
      <div className='successCard__container-data'>
        <h1 className='successCard__company'>{experience.company}</h1>
        {experience.success.map((item, index)=>{
          return(
            <div key={index}>
            <Accordion defaultActiveKey={toString(index)}>
            <Accordion.Item eventKey={index}>
              <Accordion.Header>Logro destacado Nro {index+1}</Accordion.Header>
              <Accordion.Body>
                {item}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </div>
          )
        })}
        <button className='successCard__button' onClick={back}>Volver</button>
      </div>
      <GoToTop />
    </section>
  )
}

export default SuccessCard