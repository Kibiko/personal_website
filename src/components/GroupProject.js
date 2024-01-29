import { Tabs, Tab } from "react-bootstrap";
import '../css/desktop-css/GroupProject.css'
import YoutubeEmbed from "./YoutubeEmbed";
import RestaurantRecommender from "./projects/RestaurantRecommender";
import DynamicRouting from "./projects/DynamicRouting";
import MentalHealthApp from "./projects/MentalHealthApp";

const GroupProjects = () => {
    return(
        <div className="group-container">
            <h1 className='group-title'>Group Projects</h1>
            <Tabs defaultActiveKey="mental health" className="tabs">
                <Tab eventKey="mental health" title="AI Mental Health App" className="tab">
                    <MentalHealthApp/>
                </Tab>
                <Tab eventKey="restaurant" title="Restaurant Recommender" className="tab">
                    <RestaurantRecommender/>
                </Tab>
                <Tab eventKey="dynamic routing" title="Dynamic Routing" className="tab">
                    <DynamicRouting/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default GroupProjects;