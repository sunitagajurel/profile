
import './app.scss'
import Navbar from "./components/navbar/Navbar.jsx"
import Contacts from './components/contact/contacts.jsx'
import Intro from './components/intro/Intro.jsx'
// import About from './components/about/About.jsx'
import Projects from './components/projects/Projects.jsx'
import Skills from './components/skills/skills.jsx'
import TimeLine from './components/projects/timeline.jsx'

function App() {
  return (
  <div className= "main">
    <section>
     <Navbar/> 
     <Intro/> 
    </section> 
    <section> 
        <TimeLine/>
    </section>
    <section> <Projects/> </section>
    <section> 
      <Contacts/>
    </section>
  </div> 
  )
    
  
  
}

export default App
