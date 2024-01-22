import '../css/mobile-css/MobileNavBar.css'
import '../css/mobile-css/MobileContainer.css'
import { useState } from 'react';
import { FaBars,FaDownload } from "react-icons/fa";
import { Collapse } from 'react-bootstrap';

const MobileNavBar = () => {

    const [open, setOpen] = useState(false);

    return(
        <div>
            <div className="mobile-nav">
                <button
                    className='mobile-nav-button'
                    onClick= {() => {setOpen(!open)}}
                    aria-controls="about-me"
                    aria-expanded={open}
                >
                    <FaBars />
                </button>
            </div>
            <Collapse in={open}>
                <div className='mobile-dropdown'>
                    <a className="mobile-cv" href="Kevin_Chan_Resume.pdf" download><FaDownload/> CV</a>
                    <div className="mobile-dropdown-hr"></div>
                    <p>kevinjunchan@gmail.com</p>
                    <div className="mobile-dropdown-hr"></div>
                    <p>+447850018719</p>
                    <div className="mobile-dropdown-hr"></div>
                </div>  
                
            </Collapse> 
        </div>
    )
}

export default MobileNavBar;