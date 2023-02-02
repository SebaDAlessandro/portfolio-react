import React from 'react'
import { useSelector } from 'react-redux'
import './hobbys.css'

const Hobbys = () => {

    const data = useSelector((state) => state.data)

  return (
    <section id='hobbies' className='hobbies__container'>
        <div className='hobbies__container-data'>
            <h1 className='hobbies__title'>Pasatiempos</h1>
            <div className='hobbies__dashboard'>
                {data.hobbys.map((item, index)=>{
                    return(
                        <div className='hobbies__item-container' key={index}>
                            <img className='hobbies__item-image' src={item.image} alt="skill type" />
                            <h2 className='hobbies__item-title'>{item.hobby}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Hobbys