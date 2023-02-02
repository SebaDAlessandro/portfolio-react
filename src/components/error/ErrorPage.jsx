import React from 'react'
import './errorPage.css'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

    const navigate = useNavigate()

    const volverFc = ()=>{
        navigate('/')
    }

  return (
    <section className='errorPage__container'>
        <div className='errorPage__container-data'>
            <h1 className='errorPage__title'>404 error</h1>
            <h3 className='errorPage__info'>Esta página no existe</h3>
            <h3 className='errorPage__info'>Por favor, <span className='errorPage__info-back'>regrese al menú principal</span></h3>
            <button className='errorPage__button' onClick={volverFc}>Volver</button>
        </div>
    </section>
  )
}

export default ErrorPage