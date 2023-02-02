import React from 'react'
import './projects.css'
import { useSelector } from 'react-redux'
import { BsGithub } from 'react-icons/bs';
import { TbScreenShare } from 'react-icons/tb';


const Projects = () => {

    const data = useSelector(state => state.data)

  return (
    <section id='projects' className='projects__container'>
        <div className='projects__container-data'>
            <h1 className='projects__title'>Proyectos</h1>
            <div className='projects__dashboard'>
                {data.projects.map((item)=>{
                    return(
                        <div key={item.id} className='projects__item-container'>
                            <h2 className='projects__item-title'>{item.title}</h2>
                            <img src={item.image} alt="project item" className='projects__item-image'/>
                            <p className='projects__item-description-key'><span className='projects__item-description-value'>{item.description}</span></p>
                            <p className='projects__item-technologies-key'>Tecnologías: <span className='projects__item-technologies-value'>{item.technologies}</span></p>
                            <div className='projects__item-access'>
                                <a href={item.repositorio} className='projects__item-access-repo' target='_blank' rel='noreferrer'><BsGithub /></a>
                                <a href={item.demo} className='projects__item-access-demo' target='_blank' rel='noreferrer'><TbScreenShare /></a>
                            </div>
                            <hr className='projects__item-hr'/>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Projects