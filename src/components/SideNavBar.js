import '../css/SideNavBar.css'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'

const SideNavBar = () => {
    return(
        <div className='sidebar'>
            <div className='social-container'>
                <SocialIcon url="www.linkedin.com" href="https://www.linkedin.com/in/kevinjunchan/"/>
                <SocialIcon url="www.github.com"/>
            </div>
        </div>
    )
}

export default SideNavBar;