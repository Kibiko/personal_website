import SideNavBar from "../components/SideNavBar";
import TopNavBar from "../components/TopNavBar";
import '../css/HomepageContainer.css'
import IntroductionContainer from "./IntroductionContainer";

const HomepageContainer = () => {

    return (
        <div className="homepage">
            <TopNavBar/>
            <SideNavBar/>
            <IntroductionContainer/>
        </div>
    )
}

export default HomepageContainer;