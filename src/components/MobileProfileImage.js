import Carousel from 'react-bootstrap/Carousel';
import '../css/mobile-css/MobileProfileImage.css'

const MobileProfileImage = () => {
    
    return(
        <div className='mobile-profile-images'>
            <img src={'profile2.jpeg'} alt="" className={"mobile-profile-image"}/>
        </div>
      
    )
}

export default MobileProfileImage;