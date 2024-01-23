import './projects-css/MobileSimpleList.css'
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Box from '@mui/material/Box';

const MobileSimpleList = () => {

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
      setOpenModal(true);
    };
  
    const handleCloseModal = () => {
      setOpenModal(false);
    };

    return (
        <div>
            <div className='mobile-simple-container'>
                <img className='mobile-simple-under-image' src="simple-list-screen.png"/>
                <div className='mobile-simple-paragraph'>
                    <div className='mobile-paragraphs'>
                        <p>The motivation for this project came from the frustration of note taking apps that required internet which, at times, resulted in long syncing and loading times of information that was stored in the cloud. I wanted to create an app that was fast and easy to use for the simple purpose of listing anything down. This could be a shopping list, to do list or quick note keeping. Created with <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer">React Native</a>, this app provides simple listing, through adding items that can be checked off or deleted. Items are stored locally on your device using AsyncStorage for quick and easy access.</p>
                        <p>Currently the app is going through internal testing via the Google Play Store as development continues before setting out a closed testing phase.</p>
                    </div>
                    <div className='mobile-simple-code-links'>
                        <a href="https://github.com/Kibiko/todo-list" target="_blank" rel="noopener noreferrer">CODE</a>
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
                <Box className="mobile-simple-demo-modal">
                   <video src="simple-list-demo.mp4" width="300px" height="100%" controls></video> 
                </Box>
            </Modal> 
        </div>
    )
}

export default MobileSimpleList