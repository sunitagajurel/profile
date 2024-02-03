import React from 'react'
import './intro.scss'
import CV from '../../assets/cv.pdf'

const Intro = () => {
  const skills = ["HTML","CSS","JavaScript","React","Vue","Django","Nest","SQL","python","Airflow","Kafka","RabbitMQ","Spark","Tableau","AWS"]
  return ( 
  <section> 
  <div className = "container">
      <div className = "image"> 
      <img className = "profile_image"src = "https://avatars.githubusercontent.com/u/18746982?s=400&u=61ce7ee44426b67e21f7f38140e685db57ffc6ef&v=4" ></img>
        <div className='cv__download'> 
            <a href = {CV}download > Download CV </a>
        </div> 
      </div>
       
    <div className="intro__container">
              <h5> Hello I'm</h5>
              <h1> Sunita Gajurel</h1>
              <h5 className="text-light">Passionate Frontend Developer with a keen interest in the dynamic intersection of design and data. </h5> 
              <h5> When I'm not with my Computer I will probably be cooking, crocheting or traveling </h5>
              <h5> I am located in Seattle, Washington!</h5>
              <div className = "skills_container"> 
                  {skills.map(skill => {return (<span className = "skills" key = {skill}> {skill}</span>)})}
              </div>
    </div> 
    </div>
  </section> 

  )        
}

export default Intro