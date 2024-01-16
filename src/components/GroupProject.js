import { Tabs, Tab } from "react-bootstrap";
import '../css/GroupProject.css'
import YoutubeEmbed from "./YoutubeEmbed";
import RestaurantRecommender from "./projects/RestaurantRecommender";

const GroupProjects = () => {
    return(
        <div className="group-container">
            <h1 className='group-title'>Group</h1>
            <Tabs defaultActiveKey="restaurant" className="tabs">
                <Tab eventKey="restaurant" title="Restaurant Recommender" className="tab">
                    <RestaurantRecommender/>
                </Tab>
                <Tab eventKey="dynamic routing" title="Dynamic Routing" className="tab">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="mental health" title="AI Mental Health App" className="tab">
                    Tab content for Contact
                </Tab>
            </Tabs>
        </div>
    )
}

export default GroupProjects;