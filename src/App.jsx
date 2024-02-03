
import './app.scss'
import Navbar from "./components/navbar/Navbar.jsx"
import Contacts from './components/contact/contacts.jsx'
import Intro from './components/intro/Intro.jsx'
// import About from './components/about/About.jsx'
import Projects from './components/projects/Projects.jsx'
import Skills from './components/skills/skills.jsx'
import TimeLine from './components/projects/timeline.jsx'
import Slider from './components/sliders/Slider.jsx'

function App() {
  return (
    <>
    <section>
     <Navbar/> 
     <Intro/> 
     </section>
   
    <TimeLine/>
   
    <Projects/>
   
    <Contacts/>


    </>
    
  )
    
  
  
}

export default App
