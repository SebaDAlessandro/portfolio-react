import React from 'react'
import './formation.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Formation = () => {

    const data = useSelector((state) => state.data)

    const navigate = useNavigate()

    const formationDetails = (id) => {
        navigate(process.env.PUBLIC_URL + `/FormationDetail/${id}`);
    }

    return (
    <section className='formation__container' id='formation'>
        <h1 className='formation__title'>Formación</h1>
        <div className='cards__containder'>
        {data.training.map((item) =>{
            return(
                <div className='card__details' key={item.id}>
                    <img src={item.image} alt="entidad" className='card__image'/>
                    <h1 className='card__institution'>{item.institution}</h1>
                    <h3 className='card__title'>{item.title}</h3>
                    <p className='card__status'>{item.status}</p>
                    <button onClick={()=>formationDetails(item.id)}>Detalles</button>
                </div>
            )
        })}
        </div>
    </section>
  )
}

export default Formation