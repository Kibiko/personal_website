import '../css/desktop-css/TopNavBar.css'

const TopNavBar = ({scrollToAboutMe, scrollToTechStack, scrollToProjects}) => {

    const handleAboutClick = (event) => {
        event.preventDefault();  // Prevent the default anchor link behavior
        scrollToAboutMe();
    };

    const handleTechClick = (event) => {
        event.preventDefault();  
        scrollToTechStack();
    };

    const handleProjectsClick = (event) => {
        event.preventDefault();  
        scrollToProjects();
    };
      
    return(
        <div className="custom-navbar">
            <div className="name-cv">
                <img src='android-chrome-512x512.png'/>

                <nav className="">
                    <a className="animate-cv" href="Kevin_Chan_Resume.pdf" download>CV</a>
                </nav>
            </div>
            <div className="links">
                <nav>
                    <a href="about-me" onClick={handleAboutClick}>About</a>
                </nav>
                <nav >
                    <a href="tech-stack" onClick={handleTechClick}>Tech Stack</a>
                </nav>
                <nav >
                    <a href="projects" onClick={handleProjectsClick}>Projects</a>
                </nav>
                <nav >
                    <a href="javascript:void(0);" className='contacts'>Contact
                    <span className="tooltiptext">
                        <ul>
                            <li>kevinjunchan@gmail.com</li>
                            <li>+447850018719</li>
                        </ul>
                    </span>
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default TopNavBar;