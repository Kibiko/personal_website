import { useState, forwardRef } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import '../css/mobile-css/MobileAboutMe.css'

const MobileAboutMe = forwardRef(({ },ref) => {

    const [open, setOpen] = useState(false);
    const [buttonText, setButtonText] = useState("About Me");
    
    return (
    <div className='mobile-about-me-container' ref={ref}>
      <h1 className='mobile-about-me-title'>"The Curiosity-Driven Life" - Elizabeth Gilbert  </h1>
      <button
        onClick={() => {
            setOpen(!open)
            if(open == true){
                setButtonText("About Me")
            } else {
                setButtonText("Are you curiosity driven?")
            }}}
        aria-controls="mobile-about-me"
        aria-expanded={open}
      >
        {buttonText}
      </button>
      <Collapse in={open}>
        <section id="mobile-about-me">
          <div className='mobile-about-me-paragraph'>
            <p>Continuous learning is at the core of my journey through life. Having completed an MSci in Astrophysics at Queen Mary University of London (QMUL), I strived to learn more by continuing into a PhD. This opportunity has taken me to many different countries, meeting a plethora of new people and new ideas, sparking my curiosity and maintaining my ability to never stop learning.</p>

            <p>The curiosity driven life does not have a passion. The excitement and motivation comes from learning and diving deep into the smallest initial interest. Having contributed to scientific knowledge through published papers, which incorporated scientific computing, I attended a Full Stack Software Engineering bootcamp to learn more about the uses of coding outside of academia. During the bootcamp, I have built an invaluable network through collaborations and the experience has grown my interest in how coding can be used to solve every day problems.</p>
            
          </div>
        </section>
      </Collapse>
    </div>
  );
})

export default MobileAboutMe;