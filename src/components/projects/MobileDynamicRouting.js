import './projects-css/MobileDynamicRouting.css'
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Box from '@mui/material/Box';

const MobileDynamicRouting = () => {

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
      setOpenModal(true);
    };
  
    const handleCloseModal = () => {
      setOpenModal(false);
    };

    return (
        <div>
            <div className='mobile-routing-container'>
                <img className='mobile-routing-under-image' src="dynamic-routing-screen.png"/>
                <div className='mobile-routing-paragraph'>
                    <div className='mobile-paragraphs'>
                        <p>With the challenge of improving efficiency of deliveries, we integrated <a href="https://docs.mapbox.com/mapbox-gl-js/api/map/" target="_blank" rel="noopener noreferrer">MapBox GL JS Map API</a> and their <a href="https://docs.mapbox.com/api/navigation/directions/" target="_blank" rel="noopener noreferrer">Directions API </a> to create a full stack dynamic routing application that can generate routes quickly and efficiently based on the order locations. 
                        </p>
                        <p>Future work on this project involves integration of optimisation tools to solve the vehicle routing problem (VRP), which can be extended to include traffic times. Current options include <a href="https://developers.google.com/optimization/routing/vrp" target="_blank" rel="noopener noreferrer">Google OR Tools</a> or <a href="https://docs.mapbox.com/api/navigation/optimization/" target="_blank" rel="noopener noreferrer">MapBox Optimisation v2 </a>with access granted for the public beta. </p>
                        <p>The application is currently in the process of being deployed on <a href="https://render.com/" target="_blank" rel="noopener noreferrer">Render</a>, with the security of the site being top priority.</p>
                    </div>
                    <div className='mobile-routing-code-links'>
                        <a href="https://github.com/cbattenplowright/capstone_frontend/tree/developRouteColours" target="_blank" rel="noopener noreferrer">CODE</a>
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
                <Box className="mobile-routing-demo-modal">
                   <video src="dynamic_routing_demo.mp4" width="100%" height="100%" controls></video> 
                </Box>
            </Modal> 
        </div>
    )
}

export default MobileDynamicRouting