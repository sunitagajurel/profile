import React from 'react'
import './intro.scss'
import CV from '../../assets/cv.pdf'

const Intro = () => {
  const skills = ["HTML","CSS","JAVASRIPT","WEB DEVELOPMET","BACKEND DEVELOPMET","CLOUD COMPUTING","AWS","GIT","LINUX","DISTRIBUTED SYSTEMS","SERVERLESS COMPUTING","VIRTUALISATION"]
  return ( 
  <div className = "container">
    <div className="intro__container">
              <h5> Hello I'm</h5>
              <h1> Sunita Gajurel</h1>
              <h5 className="text-light"> Full stack developer</h5>
              <h5> With following skills</h5>
            </div>

            <div className = "skills__container"> 
               {skills.map((item,id) =>
                {
                return( 
                    <div className = "skills" key = {id}>
                        {item}
                    </div>)})}

        </div>
        <div className='cv__download'> 
            <a href = {CV}download > Download CV </a>
        </div>   
  </div>
          
      )
}

export default Intro