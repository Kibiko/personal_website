import { useState, forwardRef } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import '../css/AboutMe.css'

const AboutMe = forwardRef(({ },ref) => {

    const [open, setOpen] = useState(false);
    const [buttonText, setButtonText] = useState("About Me");
    
    return (
    <div className='about-me-container' ref={ref}>
      <button
        className='button'
        onClick={() => {
            setOpen(!open)
            if(open == true){
                setButtonText("About Me")
            } else {
                setButtonText("Are you curious?")
            }}}
        aria-controls="about-me"
        aria-expanded={open}
      >
        {buttonText}
      </button>
      <h1 className='about-me-title'>The Curiosity-Driven Life - Elizabeth Gilbert </h1>
      <Collapse in={open}>
        <div id="about-me">
          <div className='about-me-paragraph'>
            <p>Continuous learning is at the core of my journey through life. Having completed an MSci in Astrophysics at Queen Mary University of London (QMUL), I strived to learn more by continuing into a PhD. This opportunity has taken me to many different countries, meeting a plethora of new people and new ideas, sparking my curiosity and maintaining my ability to never stop learning.</p>

            <p>The curiosity driven life does not have a passion. The excitement and motivation comes from learning and diving deep into the smallest initial interest. Having contributed to scientific knowledge through published papers, which incorporated scientific computing, I attended a Full Stack Software Engineering bootcamp to learn more about the uses of coding outside of academia. During the bootcamp, I have built an invaluable network through collaborations and the experience has grown my interest in how coding can be used to solve every day problems.</p>

            <p className="about-me-end">My goal for the forseeable future is to learn more about how my skills can be adapted to industry and to make an impact, adding value and contributing to solutions which interest me. The growth mindset never ends as the journey through life has limitless opportunities.</p>
          </div>
        </div>
      </Collapse>
    </div>
  );
})

export default AboutMe;