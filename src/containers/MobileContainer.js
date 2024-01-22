import MobileAboutMe from "../components/MobileAboutMe";
import MobileGroupProjects from "../components/MobileGroupProject.js";
import MobileIntroduction from "../components/MobileIntroduction";
import MobileNavBar from "../components/MobileNavBar";
import MobileTechStack from "../components/MobileTechStack.js";

const MobileContainer = () => {
    return(
        <div>
            <MobileNavBar/>
            <MobileIntroduction/>
            <div className="mobile-hr"></div>
            <MobileAboutMe/>
            <div className="mobile-hr"></div>
            <MobileTechStack/>
            <div className="mobile-hr"></div>
            <h1 className='mobile-projects-title'>Projects</h1>
            <MobileGroupProjects/>
        </div>
    )
}

export default MobileContainer;