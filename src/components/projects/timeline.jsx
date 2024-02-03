import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const timeline = () => {
  return (
    <section  style={{"margin-top":10}}> 
     <h2> MY TECH JOURNEY</h2> 
    <div className = "container"> 
    <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Nov/2023- present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            
        >
            <h3 className="vertical-timeline-element-title">full stack developer</h3>
            <h4 className="vertical-timeline-element-subtitle">The Trops</h4>
            <p>
              Vue Js, Nest Js, TypeScript, Design Patterns 
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Sept/2022 - Dec/2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            
        >
            <h3 className="vertical-timeline-element-title">MSCSS student</h3>
            <h4 className="vertical-timeline-element-subtitle">UW Tacoma</h4>
            <p>
            Distributed System, Cloud Computing, Advanced Algorithm, Big Data
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date="Jan/2020- August/2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Cotiviti Inc</h4>
            <h4 className="vertical-timeline-element-subtitle">Kathmandu,Nepal</h4>
            <p>
            Frontend ,Backbone js , Backend Python , Quality Assurance , SQL
            </p>
        </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    date="Sept/2015 - Dec/2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Trainee Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Truemark pvt ltd</h4>
    <h4 className="vertical-timeline-element-subtitle">Kathmandu,Nepal</h4>
    <p>
      User Experience, Web Development, Android Development
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    date="2015 - 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelors in Computer Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">Kathmandu Nepal</h4>
    <p>
      C, C++, Operating System, Networking,Object Oriented Design,Python,DBMS 
    </p>
  </VerticalTimelineElement>
  </VerticalTimeline>
  </div>
  </section>
  )
}

export default timeline

