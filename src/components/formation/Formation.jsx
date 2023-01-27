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
        <div className='formation__card-containder'>
        {data.training.map((item) =>{
            return(
                <div className={item.id % 2 === 0 ?'formation__card-details peers':'formation__card-details odd'} key={item.id}>
                    <img src={item.image} alt="entidad" className='formation__card-image'/>
                    <h2 className='formation__card-institution'>{item.institution}</h2>
                    <h3 className='formation__card-title'>{item.title}</h3>
                    <p className={item.status === 'FINALIZADO'?'formation__card-status finished':(item.status==='INCOMPLETO'?'formation__card-status abandoned':'formation__card-status pause')}>{item.status}</p>
                    <button className='formation__card-button' onClick={()=>formationDetails(item.id)}>Detalle</button>
                </div>
            )
        })}
        </div>
    </section>
  )
}

export default Formation