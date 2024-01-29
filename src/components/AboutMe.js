import { useState, forwardRef } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import '../css/desktop-css/AboutMe.css'
import YoutubeEmbed from './YoutubeEmbed';
import ProfileImage from './ProfileImage';

const AboutMe = forwardRef(({ },ref) => {
    
    return (
    <div className='about-me-container' ref={ref}>
      
        <section id="about-me">
          <div className='about-me-profile'>
            <ProfileImage/>
          </div>
          <div className='about-me-paragraph'>
            <p>Continuous learning is at the core of my journey through life. Having completed an MSci in Astrophysics at Queen Mary University of London (QMUL), I strived to learn more by continuing into a PhD. This opportunity has taken me to many different countries, meeting a plethora of new people and new ideas, sparking my curiosity and maintaining my ability to never stop learning.</p>

            <p>The curiosity driven life does not have a passion. The excitement and motivation comes from learning and diving deep into the smallest initial interest. Having contributed to scientific knowledge through published papers, which incorporated scientific computing, I attended a Full Stack Software Engineering bootcamp to learn more about the uses of coding outside of academia. During the bootcamp, I have built an invaluable network through collaborations and the experience has grown my interest in how coding can be used to solve every day problems.</p>
          <h1 className='about-me-quote'>"The Curiosity-Driven Life" - Elizabeth Gilbert</h1>
          </div>
        </section>
    </div>
  );
})

export default AboutMe;