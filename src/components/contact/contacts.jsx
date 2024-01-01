
// import Socials from './Socials.jsx';
import './contact.scss'
import React, { useRef } from 'react';
import {MdEmail} from 'react-icons/md'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_nwzx24c","template_niy2ta6",form.current,"z2uYXT9UtQXFm4lxo")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className= "container" id = "contact">
      <h2> Connect With Me </h2>
      <div className = "contact__container">
        <div className ="contact__options">
          <article className ="contact__option">
            <MdEmail className = "contact__option-icon"/>  
            <h4> Email</h4>
            <h5> sunita.gajurel10@gmail.com</h5>
            <a href ="mailto:sunita.gajurel10@gmail.com" target = "_blank "> send a mail</a>
          </article>

    
            
            {/* <h4> Linkdein </h4> */}
            <a href ="https://www.linkedin.com/in/sunitagajurel/" target = "_blank "> <BsLinkedin className = "contact__option-icon"/>  </a>
          

         
            
            <a href ="https://github.com/sunitagajurel"  target = "_blank "><BsGithub className = "contact__option-icon"/>  </a> 
     
          </div>
          <div className ="contact_form"> 
            <form ref={form} onSubmit={sendEmail} > 
            <input type = "text" name ='name' placeholder ="Your Full Name" required /> 
            <input type ="email" name= "email" placeholder ='Your Email' required /> 
            <textarea name ="message" rows ="7" placeholder ="your message" required> </textarea>
            <button type ="submit" className ="btn btn-primary">Send Message </button>
            </form>
          </div>
          

      </div>
    </div>
    
  )
}

export default Contacts