import SideNavBar from "../components/SideNavBar";
import TopNavBar from "../components/TopNavBar";
import '../css/HomepageContainer.css'

const HomepageContainer = () => {

    return (
        <div className="homepage">
            <TopNavBar/>
            <SideNavBar/>
        </div>
    )
}

export default HomepageContainer;