import { Tabs, Tab } from "react-bootstrap";
import '../css/mobile-css/MobileSoloProject.css'
import Platformer from "./projects/MobilePlatformer";
import SimpleList from "./projects/MobileSimpleList";

const MobileSoloProjects = () => {
    return(
        <div className="mobile-solo-container">
            <h1 className='mobile-solo-title'>Solo Projects</h1>
            <Tabs defaultActiveKey="platformer" className="tabs">
                <Tab eventKey="platformer" title="2D Platformer" className="mobile-tab">
                    <Platformer/>
                </Tab>
                <Tab eventKey="simple-list" title="Simple List" className="mobile-tab">
                    <SimpleList/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default MobileSoloProjects;