import React from 'react'
import './skills.scss'  
import {BsPatchCheckFill } from 'react-icons/bs'
const Skills = () => {
    const skills = ["HTML","CSS","JAVASRIPT","WEB DEVELOPMET","BACKEND DEVELOPMET","BACKEND DEVELOPMET","AWS","GIT","LINUX","DISTRIBUTED SYSTEMS","Serverless Computing","Virtualisation"]

  return (
    <section id = "skills" className = "container"> 
        <h5> What Skills I have</h5>

        <div className = "skills__container"> 
               {skills.map((item,id) =>
                {
                return( 
                    <div className = "skills" key = {id}>
                        {item}
                    </div>)})}
        </div>

    </section>
  )
}

export default Skills