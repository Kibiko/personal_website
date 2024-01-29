import { Tabs, Tab } from "react-bootstrap";
import '../css/mobile-css/MobileGroupProject.css'
import MobileRestaurantRecommender from "./projects/MobileRestaurantRecommender";
import MobileDynamicRouting from "./projects/MobileDynamicRouting";
import MobileMentalHealthApp from "./projects/MobileMentalHealthApp";

const MobileGroupProjects = () => {
    return(
        <div className="mobile-group-container">
            <h1 className='mobile-group-title'>Group Projects</h1>
            <Tabs defaultActiveKey="mental health" className="mobile-tabs">
                <Tab eventKey="mental health" title="AI Mental Health App" className="mobile-tab">
                    <MobileMentalHealthApp/>
                </Tab>
                <Tab eventKey="restaurant" title="Restaurant Recommender" className="mobile-tab">
                    <MobileRestaurantRecommender/>
                </Tab>
                <Tab eventKey="dynamic routing" title="Dynamic Routing" className="mobile-tab">
                    <MobileDynamicRouting/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default MobileGroupProjects;