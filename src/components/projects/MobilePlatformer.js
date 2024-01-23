import './projects-css/MobilePlatformer.css'
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Box from '@mui/material/Box';

const MobilePlatformer = () => {

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
      setOpenModal(true);
    };
  
    const handleCloseModal = () => {
      setOpenModal(false);
    };

    return (
        <div>
            <div className='mobile-platformer-container'>
                <img className='mobile-platformer-under-image' src="platformer-screen.png"/>
                <div className='mobile-platformer-paragraph'>
                    <div className='mobile-paragraphs'>
                        <p>As my first solo project, having learnt Object Oriented Programming in Java from a bootcamp, I decided to dive deep into the programming model by creating my own 2D platformer game from a basic framework. The algorithms for the physics and logic in the game are all written by myself as I combine my mathematical and problem solving skills from academia into game design. Features of this game and progress are detailed in the README, following the code link below. As for the tools, the framework I use is <a href="https://libgdx.com/" target="_blank" rel="noopener noreferrer">LibGDX</a> where the build tool is <a href="https://gradle.org/" target="_blank" rel="noopener noreferrer">Gradle</a>.</p>
                        <p>Future plans for this project is adding more features including enemies, bigger maps and animations. Once this has been achieved, deployment onto <a href="https://itch.io/" target="_blank" rel="noopener noreferrer">itch.io</a> would provide a good opportunity for community testing.</p>
                    </div>
                    <div className='mobile-platformer-code-links'>
                        <a href="https://github.com/Kibiko/platformer" target="_blank" rel="noopener noreferrer">CODE</a>
                        <button className="mobile-demo-button" onClick={handleOpenModal}>DEMO</button>
                    </div>
                </div>
            </div>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box className="mobile-platformer-demo-modal">
                   <video src="platformer-demo.mp4" width="100%" height="100%" controls></video> 
                </Box>
            </Modal> 
        </div>
    )
}

export default MobilePlatformer