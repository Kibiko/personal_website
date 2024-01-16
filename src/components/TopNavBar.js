import '../css/TopNavBar.css'

const TopNavBar = ({scrollToAboutMe}) => {

    const handleAboutClick = (event) => {
        event.preventDefault();  // Prevent the default anchor link behavior
        scrollToAboutMe();
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
                    <a href="#" onClick={handleAboutClick}>ABOUT</a>
                </nav>
                <nav >
                    <a href="">TECH STACK</a>
                </nav>
                <nav >
                    <a href="">PROJECTS</a>
                </nav>
                <nav >
                    <a href="">CONTACT</a>
                </nav>
            </div>
        </div>
    )
}

export default TopNavBar;