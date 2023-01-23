import React from 'react'
import './footer.css'
import { useSelector } from 'react-redux'


const Footer = () => {

  const data = useSelector((state) => state.data)

  return (
    <footer className='footer_container'>
      {console.log(data)}
      <h1 className='footer__title'>{`Desarrollado por ${data.name} - 2022`}</h1>
      {/* <p>{`Cel: ${data.contact.celNumber} - GitHub: ${data.contact.github} - LinkedIn: ${data.contact.linkedin}`}</p> */}
    </footer>
  )
}

export default Footer