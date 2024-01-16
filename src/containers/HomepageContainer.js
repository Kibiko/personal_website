import { useRef } from "react";
import AboutMe from "../components/AboutMe";
import SideNavBar from "../components/SideNavBar";
import TechStack from "../components/TechStack";
import TopNavBar from "../components/TopNavBar";
import '../css/HomepageContainer.css'
import IntroductionContainer from "./IntroductionContainer";

const HomepageContainer = () => {

    const aboutMeRef = useRef();

    const scrollToAboutMe = () => {
        if (aboutMeRef.current) {
            aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="homepage">
            <TopNavBar scrollToAboutMe={scrollToAboutMe}/>
            <SideNavBar/>
            <div className="main-body">
                <IntroductionContainer/>
                <div className="custom-hr"></div>
                <AboutMe ref={aboutMeRef}/>
                <div className="custom-hr"></div>
                <TechStack/>
            </div>
        </div>
    )
}

export default HomepageContainer;