import React from 'react'
import './formation.css'
import { useSelector } from 'react-redux'

const Formation = () => {

    const data = useSelector((state) => state.data)

    const formationDetails = (id)=>{
        console.log('soy el ID: ', id)
    }
    
    return (
    <section className='formation__container' id='formation'>
        <h1 className='formation__title'>Formación</h1>
        <div className='cards__containder'>
        {data.training.map((item) =>{
            return(
                <div className='card__details' key={data.id}>
                    <img src={item.image} alt="entidad" className='card__image'/>
                    <h1 className='card__institution'>{item.institution}</h1>
                    <h3 className='card__title'>{item.title}</h3>
                    <p className='card__status'>{item.status}</p>
                    <button onClick={()=>formationDetails(item.id)}>click</button>
                </div>
            )
        })}
        </div>
    </section>
  )
}

export default Formation