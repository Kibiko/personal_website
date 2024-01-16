import '../css/TopNavBar.css'

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
                <h1> K. CHAN</h1>

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
                    <a href="">Contact</a>
                </nav>
            </div>
        </div>
    )
}

export default TopNavBar;