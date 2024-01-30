import React from 'react'
import './Projects.scss'

const Projects = () => {

    const data =[{
        id:1,
        image: "https://github.com/sunitagajurel/profile/blob/main/src/assets/images/kafka.png?raw=true",
        title:"Performance comparision of Messaging services",
        github: "",
        description: ""
      },
      {
      id:2,
        image: "https://github.com/sunitagajurel/profile/blob/main/src/assets/images/library.jpg?raw=true",
        title:"Library Management System",
        github: "",
        description: ""
      },
      {
          id:3,
          image: "https://github.com/sunitagajurel/profile/blob/main/src/assets/images/office.jpg?raw=true",
          title:"Employee Monitoring and Attendance System",
          github: "",
          description: ""
        },
        {
        id:4,
          image:"https://github.com/sunitagajurel/profile/blob/main/src/assets/images/house_price.jpg?raw=true",
          title:"House Price Prediction",
          github: "",
          description:"",
        },

      ]  
  return (
    <div className = "container" id = "projects">
    <h2> MY RECENT PROJECTS</h2>
      <div className = "portfolio__container"> 
      {
        data.map(({id,image,title,github,description}) => {
          return(
            <article key = {id} className ="portfolio__item"> 
          <div className="portfolio__item-image">
            <img src ={image} alt = {title}/> 

            <div className = "project__title">
                <h4 > {title}</h4>
            </div>
           
            <div className="portfollio__tem-cta">
              <a href = {github}  target = '_blank'>view source code</a>
            </div>
          </div>
        </article>

          )
          
        })
      }
      </div>
          
    </div>
   
  )
}

export default Projects
