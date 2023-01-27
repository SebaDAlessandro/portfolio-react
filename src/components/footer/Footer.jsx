import React from 'react'
import './footer.css'
import { useSelector } from 'react-redux'


const Footer = () => {

  const data = useSelector((state) => state.data)

  return (
    <footer className='footer_container'>
      <h1 className='footer__title'>{`Desarrollado por ${data.name} - 2023`}</h1>
    </footer>
  )
}

export default Footer