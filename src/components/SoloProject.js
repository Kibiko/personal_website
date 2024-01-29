import { Tabs, Tab } from "react-bootstrap";
import '../css/desktop-css/SoloProject.css'
import Platformer from "./projects/Platformer";
import SimpleList from "./projects/SimpleList";

const SoloProjects = () => {
    return(
        <div className="solo-container">
            <h1 className='solo-title'>Solo Projects</h1>
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