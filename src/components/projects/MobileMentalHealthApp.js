import './projects-css/MobileMentalHealthApp.css'
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Box from '@mui/material/Box';

const MobileMentalHealthApp = () => {

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
      setOpenModal(true);
    };
  
    const handleCloseModal = () => {
      setOpenModal(false);
    };


    return (
        <div>
            <div className='mobile-mental-container'>
                <img className='mobile-mental-under-image' src="mind_mentor_screen.png"/>
                <div className='mobile-mental-paragraph'>
                    <div className='mobile-paragraphs'>
                        <p><a href="https://www.linkedin.com/posts/kevinjunchan_hack-for-change-2023-winners-activity-7130873832390692864-c38C?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">🎉 Hack for Change 2023 - People's Champion Award Winners! 🎉</a></p>
                        <p>In the hackathon to improve inclusivity and diversity at the workplace, we created a full stack mobile application to provide the first point of contact in supporting mental health. Integrating <a href="https://platform.openai.com/docs/guides/text-generation" target="_blank" rel="noopener noreferrer">OpenAI API </a>and tuning ChatGPT 3.5 Turbo, the application provides a chatbot that offers advice that aligns with the <a href="https://www.nice.org.uk/guidance">National Institute for Health and Care Excellence (NICE)</a> guidelines. External resources are integrated along with a mood calendar and emergency contact numbers.</p>
                        <p>We utilised React Native and Spring Boot for the front end and back end respectively. All messages and information are encrypted in the back end database with the AES-256 algorithm.</p>
                    </div>
                    <div className='mobile-mental-code-links'>
                        <a href="https://github.com/sarahoco014/Mind_Mentor_Frontend" target="_blank" rel="noopener noreferrer">CODE</a>
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
                <Box className="mobile-demo-modal">
                   <video src="mind_mentor_demo.mp4" width="100%" height="100%" controls></video> 
                </Box>
            </Modal> 
        </div>
    )
}

export default MobileMentalHealthApp;