import '../css/IntroductionContainer.css'
import ProfileImage from '../components/ProfileImage';
import Introduction from '../components/Introduction';

const IntroductionContainer = () => {
    return(
        <div className="introduction-container">
            <ProfileImage/>
            <Introduction/>
        </div>
    )
}

export default IntroductionContainer;