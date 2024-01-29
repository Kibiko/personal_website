import { useRef } from "react";
import AboutMe from "../components/AboutMe";
import SideNavBar from "../components/SideNavBar";
import TechStack from "../components/TechStack";
import TopNavBar from "../components/TopNavBar";
import '../css/desktop-css/HomepageContainer.css'
import IntroductionContainer from "./IntroductionContainer";
import GroupProjects from "../components/GroupProject";
import SoloProjects from "../components/SoloProject";

const HomepageContainer = () => {

    const aboutMeRef = useRef();
    const techStackRef = useRef();

    const scrollToAboutMe = () => {
        if (aboutMeRef.current) {
            aboutMeRef.current.scrollIntoView({ behavior: 'smooth', block: "center"});
        }
    };

    const scrollToTechStack = () => {
        if (techStackRef.current) {
            techStackRef.current.scrollIntoView({ behavior: 'smooth', block: "center" });
        }
    };

    const scrollToProjects = () => {
        const projects = document.querySelector('.projects-title')
        projects.scrollIntoView({ behavior: 'smooth'});
    };

    return (
        <div className="homepage">
            <SideNavBar/>
            <TopNavBar scrollToAboutMe={scrollToAboutMe} scrollToTechStack={scrollToTechStack} scrollToProjects={scrollToProjects}/>
            <main className="main-body">
                <IntroductionContainer/>
                <AboutMe ref={aboutMeRef}/>
                <div className="custom-hr"></div>
                <TechStack ref={techStackRef}/>
                {/* <div className="custom-hr"></div> */}
                <h1 className='projects-title'>Projects</h1>
                <GroupProjects/>
                <SoloProjects/>
            </main>
        </div>
    )
}

export default HomepageContainer;