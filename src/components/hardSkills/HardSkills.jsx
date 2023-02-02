import React from 'react'
import { useSelector } from 'react-redux'
import './hardSkills.css'

const HardSkills = () => {

    const data = useSelector((state) => state.data)

  return (
    <section id='hardSkills' className='hardSkills__container'>
        <div className='hardSkills__container-data'>
            <h1 className='hardSkills__title'>Habilidades Técnicas</h1>
            <div className='hardSkills__dashboard'>
                {data.technicalSkills.map((item, index)=>{
                    return(
                        <div className='hardSkills__item-container' key={index}>
                            <img className='hardSkills__item-image' src={item.image} alt="skill type" />
                            <h2 className='hardSkills__item-title'>{item.skill}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default HardSkills