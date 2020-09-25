import React from 'react';
import '../assets/css/component.css';

function EventInfo(){
    return(
    <div className="event-info">
        <div className="col-12" id="event-info-container">
            <div className="row">
                <div className="col" id="event-info-heading">
                    <h4>Finding the Enemy</h4>
                </div>
            </div>
            <div className="row" id="event-info-section">
                <div className="col-md-4" id="event-img-container">
                    <img src={require('../assets/img/event.jpg')} alt='Expedition' />
                </div>
                <div className="col-md-8 " id="event-info-info">
                    <p>
                    The 57th Expedition Outside the Walls (第57回壁外調査 Dai 57 Kai Hekigai Chōsa?) was a mission undertaken by the Survey Corps to plot a course from Karanes District to Shiganshina District. The expedition was sabotaged by the Female Titan and subsequently considered a failure. 
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}
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
            <div className="container" id="event-content">
                <div className="row">
                    <div className="col" id="event-subheading">
                        <h2>Upcoming Events
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-hourglass-top" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2 14.5a.5.5 0 0 0 .5.5h11a.5.5 0 1 0 0-1h-1v-1a4.5 4.5 0 0 0-2.557-4.06c-.29-.139-.443-.377-.443-.59v-.7c0-.213.154-.451.443-.59A4.5 4.5 0 0 0 12.5 3V2h1a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1h1v1a4.5 4.5 0 0 0 2.557 4.06c.29.139.443.377.443.59v.7c0 .213-.154.451-.443.59A4.5 4.5 0 0 0 3.5 13v1h-1a.5.5 0 0 0-.5.5zm2.5-.5v-1a3.5 3.5 0 0 1 1.989-3.158c.533-.256 1.011-.79 1.011-1.491v-.702s.18.101.5.101.5-.1.5-.1v.7c0 .701.478 1.236 1.011 1.492A3.5 3.5 0 0 1 11.5 13v1h-7z"/>
                        </svg>
                        </h2> 
                    </div>
                </div>
                <div className="row">
                    <EventInfo />
                    <EventInfo />
                </div>
            </div>
            <div className="container" id="event-content">
                <div className="row">
                    <div className="col" id="event-subheading">
                        <h2>Ongoing Events
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-hourglass-split" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0c0 .701.478 1.236 1.011 1.492A3.5 3.5 0 0 1 11.5 13s-.866-1.299-3-1.48V8.35z"/>
                        </svg>
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <EventInfo />
                    <EventInfo />
                </div>
            </div>
            <div className="container" id="event-content">
                <div className="row">
                    <div className="col" id="event-subheading">
                        <h2>Completed Events
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-hourglass-bottom" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z"/>
                        </svg>
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <EventInfo />
                    <EventInfo />
                </div>
            </div>
        </div>
    )
}

export default Event;