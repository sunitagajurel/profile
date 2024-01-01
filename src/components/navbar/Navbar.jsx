import "./Navbar.scss"
import {motion} from  'framer-motion'
import CV from '../../assets/cv.pdf'


const Navbar = () => {
  return (
    <div className = "navbar"> 
      <div className = "wrapper"> 
          <div className="right-navbar"> 
            <a href = "#about"> About</a>
            <a href = "#projects"> Projects</a>
            <a href = "#contact"> Contacts</a>
          </div> 
        </div>
      </div>
  )
}

export default Navbar