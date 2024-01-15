import '../css/SideNavBar.css'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'

const SideNavBar = () => {
    return(
        <div className='sidebar'>
            <div className='social-container'>
                <div className='social-icon-container'>
                    <SocialIcon className='social-icon' bgColor="black" style={{ height: 80, width: 80, margin: 10 }} url="www.linkedin.com" href="https://www.linkedin.com/in/kevinjunchan"/>
                </div>
                <div className='social-icon-container'>
                    <SocialIcon className='social-icon' bgColor="black" style={{ height: 80, width: 80, margin: 10  }} url="www.github.com" href="https://github.com/Kibiko"/>
                </div>
            </div>
        </div>
    )
}

export default SideNavBar;