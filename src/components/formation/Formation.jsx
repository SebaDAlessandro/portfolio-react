import React, {useState, useEffect} from 'react'
import './formation.css'
import alura from '../../assets/alura.png'
import avalith from '../../assets/Avalith.png'
import henry from '../../assets/henry-student.png'

const Formation = () => {

    const formationArray = [
        {
            entity: 'Programa ONE - Oracle / Alura Latam',
            title: 'FrontEnd Developer',
            image: alura,
            technology:['HTML','CSS','JavaScript'],
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate maiores distinctio rem exercitationem iusto a nisi nostrum facere delectus. Excepturi dignissimos numquam et! Natus aliquam quia aspernatur pariatur aperiam recusandae!'
        },
        {
            entity: 'Skill Factory - Avalith',
            title: 'FrontEnd Developer con React',
            image: avalith,
            technology:['HTML','CSS','JavaScript'],
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate maiores distinctio rem exercitationem iusto a nisi nostrum facere delectus. Excepturi dignissimos numquam et! Natus aliquam quia aspernatur pariatur aperiam recusandae!'
        },
        {
            entity: 'Soy Henry',
            title: 'FrontEnd Developer con React',
            image: henry,
            technology:['HTML','CSS','JavaScript','HTML','CSS','JavaScript','HTML','CSS','JavaScript'],
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate maiores distinctio rem exercitationem iusto a nisi nostrum facere delectus. Excepturi dignissimos numquam et! Natus aliquam quia aspernatur pariatur aperiam recusandae!'
        }
    ]

    const [switchStyle, setSwitchStyle] = useState('card__details front')

    const switchFunction = (index)=>{
        console.log(index)
        if (switchStyle === 'card__details front'){
            setSwitchStyle('card__details back')
        }else{
            setSwitchStyle('card__details front')
        }
    }

    useEffect(() => {

    }, [switchStyle]);

  return (
    <section className='formation__container' id='formation'>
        <h1>Formación</h1>
        <div className='cards__containder'>
        {formationArray.map((item, index) =>{
            return(
                <div className={switchStyle} key={index}>
                    <h1 className='card__entity'/* {switchStyle==='card__details front'?'card__entity':'card__notDisplay'} */>{item.entity}</h1>
                    <h3 className={switchStyle==='card__details front'?'card__title':'card__notDisplay'}>{item.title}</h3>
                    <img src={item.image} alt="entidad" className={switchStyle==='card__details front'?'card__image':'card__notDisplay'}/>
                    <ul className='card__technology'>
                        {item.technology.map((tech, index)=>{
                            return(
                                <li className={switchStyle==='card__details front'?'card__notDisplay':'card__item-list'} key={index}><p>#{tech}</p></li>
                            )
                        })}
                    </ul>
                    <p className={switchStyle==='card__details front'?'card__notDisplay':'card__title'}>{item.details}</p>
                    <button onClick={()=>switchFunction(index)}>click</button>
                </div>
            )
        })}
        </div>
    </section>
  )
}

export default Formation