import Introduction from "./Introduction";
import '../css/mobile-css/MobileIntroduction.css'
import MobileProfileImage from "./MobileProfileImage";

const MobileIntroduction = () => {
    return (
        <div>
            <div className="mobile-profile-container">
                <MobileProfileImage/>
            </div>
            <div className="mobile-intro-container">  
                    <div class="mobile-first"><div>Kevin Chan</div></div>
                    <div class="mobile-second"><div> an Astrophysicist,</div></div>
                    <div class="mobile-third"><div>a Software Engineer.</div></div>
            </div>
        </div>
    )
}

export default MobileIntroduction;