import React from 'react'
import './skills.scss'  
import {BsPatchCheckFill } from 'react-icons/bs'
const Skills = () => {
     
    const stacks = [
      {
        "title":"Web Development",
        "Skills": ["HTML","CSS","JavaScript","React","Vue","Django","Nest"]

      } ,
      {
        "title":"Data Engineering",
        "Skills": ["SQL","python","Airflow","Kafka","RabbitMQ","Spark","Tableau","AWS"]
      },
      {
        "title":"Soft Skills",
        "Skills": ["Problem Solving","Analytical Thinking","Presentation Skills"]
      }
    ]

  return (
    <section id = "skills"> 
        <h2> Skills I come with </h2>
        <div className ='container'>
        {stacks.map((skill) =>{
          return (
            <div key = 'jj'>
            <div className = "skills__container" key= {skill.title}> 
             {skill.title}:
            </div>
             <div className= "skills"> 
              {skill['Skills'].map((stack) => {
                return(
                  <h5 key = {stack}>{stack}</h5>
                )
              })}
             </div>
            </div>
          )
        })}
      
        </div>
       
    </section>
  )
}

export default Skills