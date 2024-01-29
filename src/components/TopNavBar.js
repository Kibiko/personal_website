import '../css/desktop-css/TopNavBar.css'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import React from 'react';

const TopNavBar = ({scrollToAboutMe, scrollToTechStack, scrollToProjects}) => {

    const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: theme.palette.common.white,
          color: 'rgba(0, 0, 0, 0.87)',
          boxShadow: theme.shadows[1],
          fontSize: 11,
        },
    }));

    const [open, setOpen] = React.useState(false);

    const delay = async (ms) => {
        return new Promise((resolve) => 
            setTimeout(resolve, ms));
    };

    const handleTooltipOpen = async () => {
        setOpen(true);
        navigator.clipboard.writeText("kevinjunchan@gmail.com")
        await delay(4000);
        setOpen(false);
    };

    const handleAboutClick = (event) => {
        event.preventDefault();  // Prevent the default anchor link behavior
        scrollToAboutMe();
    };

    const handleTechClick = (event) => {
        event.preventDefault();  
        scrollToTechStack();
    };

    const handleProjectsClick = (event) => {
        event.preventDefault();  
        scrollToProjects();
    };
      
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
      setOpenModal(true);
      setOpen(false);
    };
  
    const handleCloseModal = () => {
      setOpenModal(false);
    };

    return(
        <div className="custom-navbar">
            <div className="name-cv">
            </div>
            <div className="links">
                <nav>
                    <a href="about-me" onClick={handleAboutClick}>About</a>
                </nav>
                <nav >
                    <a href="tech-stack" onClick={handleTechClick}>Tech Stack</a>
                </nav>
                <nav >
                    <a href="projects" onClick={handleProjectsClick}>Projects</a>
                </nav>
                <nav >
                    <a href="javascript:void(0);" onClick={handleOpenModal} className='contacts'>Contact</a>
                </nav>
                <Modal
                open={openModal}
                onClose={handleCloseModal}
                >
                <Box className="contacts-modal">
                    <div className='contacts-list'>
                        <p><FaEnvelope/>
                        <LightTooltip
                                className="copy-tooltip"
                                PopperProps={{
                                disablePortal: true,
                                }}
                                open={open}
                                disableFocusListener
                                disableHoverListener
                                disableTouchListener
                                title="copied!"
                                placement="right-start"
                        >
                            <a href="javascript:void(0);" onClick={handleTooltipOpen}> kevinjunchan@gmail.com</a>
                        </LightTooltip>
                       </p>
                        <p><FaPhone/> +447850018719</p>
                    </div>
                </Box>
            </Modal> 
            </div>
        </div>
    )
}

export default TopNavBar;