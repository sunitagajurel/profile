
import './About.scss'

const About = () => {

    return(
    // <section id = "about" className= "container"> 
    <>

<h5> Get to Know</h5>
    <h2> About Me</h2>
    <div className = "about__container"> 
        <div className="about__me">
           <img src="" alt="new imag here" />
        </div>
        <div className="about__content">
             <div className ="about__cards">
                 <article className = "about__card"> 
                    {/* <FaAward className = "about__icon"/> */}
                    <h5> Experience</h5>
                    <small> 3+ years of experience</small>
                 </article>

                 <article className = "about__card"> 
                    {/* <VscFolderLibrary   className = "about__icon"/> */}
                    <h5> Projects</h5>
                    <small> 3 complete Project</small>
                 </article>
             </div>
             <p> some texts about me</p>
             <a href ="#contact" className ='btn btn-primary'> Let's Connect</a>
        </div>

    </div>
    </>
    ) 

}

export default About