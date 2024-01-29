import '../css/desktop-css/SideNavBar.css'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'

const SideNavBar = () => {
    return(
        <div className='sidebar'>
            <img className='name-icon' src='android-chrome-512x512.png'/>
            <a className="animate-cv" href="Kevin_Chan_Resume.pdf" download>CV</a>
            <nav className='social-container'>
                <header className='social-icon-container'>
                    <SocialIcon className='social-icon' bgColor="black" style={{ height: 80, width: 80}} url="www.linkedin.com" href="https://www.linkedin.com/in/kevinjunchan" target="_blank" rel="noopener noreferrer"/>
                </header>
                <header className='social-icon-container'>
                    <SocialIcon className='social-icon' bgColor="black" style={{ height: 80, width: 80 }} url="www.github.com" href="https://github.com/Kibiko" target="_blank" rel="noopener noreferrer"/>
                </header>
            </nav>
        </div>
    )
}

export default SideNavBar;