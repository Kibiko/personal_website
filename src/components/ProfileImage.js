import Carousel from 'react-bootstrap/Carousel';
import '../css/desktop-css/ProfileImage.css'

const ProfileImage = () => {
    
    return(
        <div className='profile-images'>
            <img src={'profile2.jpeg'} alt="" className={"profile-image"}/>
        </div>
      
    )
}

export default ProfileImage;