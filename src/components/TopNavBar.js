import '../css/TopNavBar.css'

const TopNavBar = () => {
      
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
                    <a href="">ABOUT</a>
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