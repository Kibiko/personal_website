import Carousel from 'react-bootstrap/Carousel';
import '../css/ProfileImage.css'

const ProfileImage = () => {
    
    return(
        <div className='profile-images'>
            <Carousel fade interval={4000} wrap={false}>
                    <Carousel.Item>
                        <img src={'profile5.png'} alt="" className={"profile-image"}/>
                        <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={'profile3.png'} alt="" className={"profile-image"}/>
                        <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={'profile2.jpeg'} alt="" className={"profile-image"}/>
                        <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>   
                    <Carousel.Item>
                    <img src={'profile6.jpeg'} alt="" className={"profile-image"}/>
                        <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>        
            </Carousel>
        </div>
      
    )
}

export default ProfileImage;