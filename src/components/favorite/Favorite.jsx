import React from 'react'
import './favorite.css'
import IMG2 from '../../assets/av2.png'
import IMG1 from '../../assets/avt1.png'
const data=[
    {
        id: 1,
        image: IMG1,
        title: 'my favorite play foot ball',
        github: "https://github.com",
        demo: 'asdasdasdasdasdas'

    },
    {
        id: 2,
        image: IMG2,
        title: 'my favorite play foot ball',
        github: 'https://github.com',
        demo: 'asdasdasdasdasdas'
    },
    {
        id: 3,
        image: IMG1,
        title: 'my favorite play foot ball',
        github: 'https://github.com',
        demo: 'asdasdasdasdasdas'
    },
    {
        id: 4,
        image: IMG1,
        title: 'my favorite play foot ball',
        github: 'https://github.com',
        demo: 'asdasdasdasdasdas'
    },
    {
        id: 5,
        image: IMG1,
        title: 'my favorite play foot ball',
        github: 'https://github.com',
        demo: 'asdasdasdasdasdas'
    },
    {
        id: 6,
        image: IMG1,
        title: 'my favorite play foot ball',
        github: 'https://github.com',
        demo: 'asdasdasdasdasdas'
    },
]


const Favorite = () => {
  return (
    <section id='favorite'>
        <h5>My Favorite</h5>
        <h2>Fovorite</h2>
        <div className="container favorite__container">
         {
             data.map(({id,image,title,github,demo})=>{
              
                   return(
                    <article key={id} className='favorite__item'>
                    <div className="favorite__item-image">
                        <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="favorite__item-cta">
                        <a href={github} className='btn' target='_blank'>Github</a>
                        <a href={demo} className='btn' target='_blank' >Live Demo</a>
                    </div>
                </article>
                   )
                
             })
         }
            
        </div>
    </section>
  )
}

export default Favorite

