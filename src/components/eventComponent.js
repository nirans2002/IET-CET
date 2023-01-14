import React from 'react';
import '../assets/css/component.css';
import Workshops from './eventcomponents/workshopComponent';
import Competitions from './eventcomponents/competitionComponent';
import Seminars from './eventcomponents/seminarComponent';

function Event(){
    return(
        <div id="event">
            <div className="container" id="event-heading">
                <div className="row row-header align-items-center">
                    <div className="col" id="event-E">
                        <p>E</p>
                    </div>
                    <div className="col" id="event-vent">
                        <p>vents</p>
                    </div>
                </div>
            </div>
            <Workshops />
            <Competitions />
            <Seminars />
        </div>
    )
}

export default Event;