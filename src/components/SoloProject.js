import { Tabs, Tab } from "react-bootstrap";
import '../css/SoloProject.css'
import YoutubeEmbed from "./YoutubeEmbed";
import RestaurantRecommender from "./projects/RestaurantRecommender";
import DynamicRouting from "./projects/DynamicRouting";
import MentalHealthApp from "./projects/MentalHealthApp";
import Platformer from "./projects/Platformer";
import SimpleList from "./projects/SimpleList";

const SoloProjects = () => {
    return(
        <div className="solo-container">
            <h1 className='solo-title'>Solo</h1>
            <Tabs defaultActiveKey="platformer" className="tabs">
                <Tab eventKey="platformer" title="2D Platformer" className="tab">
                    <Platformer/>
                </Tab>
                <Tab eventKey="simple-list" title="Simple List" className="tab">
                    <SimpleList/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default SoloProjects;