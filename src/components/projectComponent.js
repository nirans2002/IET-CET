import React from 'react';
import { GearWideConnected } from 'react-bootstrap-icons';
import '../assets/css/component.css';

function Projects(){
    return(
        <div id="event">
            <div className="container">
                <div className="row row-header align-items-center">
                    <div className="col">
                        <p>Pr<GearWideConnected id="gear"/>jects</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;