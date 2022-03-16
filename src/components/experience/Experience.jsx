import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
        <h5>What Skill I Have</h5>
        <h2>My Experience</h2>
        <div className="container experience__container">
            <div className="experience__frontend">
                <h3>Frontend Development</h3> 
                 <div className="experience__content">
                    <article className='experience-detail'>
                        <BsPatchCheckFill className='experience__detail-icon'/>
                        <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Experience</small>
                        </div>
                    </article>

                    <article className='experience-detail'>
                        <BsPatchCheckFill className='experience__detail-icon'/>
                        <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Experience</small>
                        </div>
                    </article>

                    <article className='experience-detail'>
                        <BsPatchCheckFill className='experience__detail-icon'/>
                        <div>
                            <h4>BOOTSTRAP</h4>
                            <small className='text-light'>Experience</small>                    
                        </div>
                    </article>

                    <article className='experience-detail'>
                        <BsPatchCheckFill className='experience__detail-icon'/>
                        <div>
                            <h4>TAILWIN</h4>
                            <small className='text-light'>Experience</small>
                        </div>
                    </article>
                    <article className='experience-detail'>
                        <BsPatchCheckFill className='experience__detail-icon'/>
                        <div>
                            <h4>JAVASCRIPT</h4>
                            <small className='text-light'>Experience</small>
                        </div>
                    </article>
                    <article className='experience-detail'>
                        <BsPatchCheckFill className='experience__detail-icon'/>
                        <div>
                            <h4>REACJS</h4>
                            <small className='text-light'>Experience</small>
                        </div>
                    </article>
                </div>            
            </div>
            <div className="experience__backend">
            <h3>Backend Development</h3>     
            <div className="experience__content">
            <article className='experience-detail'>
                        <BsPatchCheckFill className='experience__detail-icon'/>
                        <div>
                            <h4>C#</h4>
                            <small className='text-light'>Experience</small>
                        </div>
                    </article>

                    <article className='experience-detail'>
                        <BsPatchCheckFill className='experience__detail-icon'/>
                        <div>
                            <h4>PHP</h4>
                            <small className='text-light'>Experience</small>
                        </div>
                    </article>

                    <article className='experience-detail'>
                        <BsPatchCheckFill className='experience__detail-icon'/>
                        <div>
                            <h4>MySql</h4>
                            <small className='text-light'>Experience</small>                    
                        </div>
                    </article>

                    <article className='experience-detail'>
                        <BsPatchCheckFill className='experience__detail-icon'/>
                        <div>
                            <h4>Git</h4>
                            <small className='text-light'>Experience</small>
                        </div>
                    </article>
                    <article className='experience-detail'>
                        <BsPatchCheckFill className='experience__detail-icon'/>
                        <div>
                            <h4>Python</h4>
                            <small className='text-light'>Experience</small>
                        </div>
                    </article>
                    <article className='experience-detail'>
                        <BsPatchCheckFill className='experience__detail-icon'/>
                        <div>
                            <h4>Java</h4>
                            <small className='text-light'>Experience</small>
                        </div>
                    </article>     
            </div>  
            </div>
        </div>
    </section>
  )
}

export default Experience