import '../css/desktop-css/SideNavBar.css'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'

const SideNavBar = () => {
    return(
        <div className='sidebar'>
            <div className='social-container'>
                <div className='social-icon-container'>
                    <SocialIcon className='social-icon' bgColor="black" style={{ height: 80, width: 80}} url="www.linkedin.com" href="https://www.linkedin.com/in/kevinjunchan" target="_blank" rel="noopener noreferrer"/>
                </div>
                <div className='social-icon-container'>
                    <SocialIcon className='social-icon' bgColor="black" style={{ height: 80, width: 80 }} url="www.github.com" href="https://github.com/Kibiko" target="_blank" rel="noopener noreferrer"/>
                </div>
            </div>
        </div>
    )
}

export default SideNavBar;