import React, { useState } from 'react';
import '../assets/css/component.css';
import anime from 'animejs';

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
                <div className="col-md-8" id="event-info-info">
                    <p>
                    The 57th Expedition Outside the Walls (第57回壁外調査 Dai 57 Kai Hekigai Chōsa?) was a mission undertaken by the Survey Corps to plot a course from Karanes District to Shiganshina District. The expedition was sabotaged by the Female Titan and subsequently considered a failure. 
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

function Competitions(){
    return(
        <div className="container" id="event-content">
                <div className="row" id="event-subheading">
                    <div className="col-12">
                        <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-trophy" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/>
                        </svg>
                    </div>
                    <div className="col-12">
                        <h2>Competitions</h2>
                    </div>
                </div>
                <div className="row">
                    <EventInfo />
                    <EventInfo />
                </div>
        </div>
    )
}
function Worskshops()
{
    return(
        <div className="container" id="event-content">
            <div className="row" id="event-subheading">
                <div className="col-12">
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-tools" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M0 1l1-1 3.081 2.2a1 1 0 0 1 .419.815v.07a1 1 0 0 0 .293.708L10.5 9.5l.914-.305a1 1 0 0 1 1.023.242l3.356 3.356a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 1-1.414 0l-3.356-3.356a1 1 0 0 1-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 0 0-.707-.293h-.071a1 1 0 0 1-.814-.419L0 1zm11.354 9.646a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708-.708l-3-3z"/>
                    <path fill-rule="evenodd" d="M15.898 2.223a3.003 3.003 0 0 1-3.679 3.674L5.878 12.15a3 3 0 1 1-2.027-2.027l6.252-6.341A3 3 0 0 1 13.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
                </svg>
                </div>
                <div className="col-12">
                    <h2>Worskshops</h2>
                </div>
            </div>
            <div className="row">
                <EventInfo />
                <EventInfo />
            </div>
        </div>
    )
}

function Seminars(){
    return(
        <div className="container" id="event-content">
                <div className="row" id="event-subheading">
                    <div className="col-12">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-newspaper" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
                        <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
                    </svg>
                    </div>
                    <div className="col-12">
                        <h2>Seminars</h2>
                    </div>
                </div>
                <div className="row">
                    <EventInfo />
                    <EventInfo />
                </div>
        </div> 
    )
}

function EventManager({currDisp})
{
    if(currDisp === 0)
        return(<Competitions />);
    if(currDisp === 1)
        return(<Worskshops />);
    return(<Seminars />);
}

function Event(){
    const [currDisp, setDisp] = useState(0);
    const animation = () => {
        anime({
            targets: '#eventSlider',
            opacity: 0,
            direction: 'alternate',
            easing: 'easeInOutExpo',
            duration: 500,
        });
    }
    const next = () => {

        animation();
        setTimeout(() => setDisp(prevState => (prevState + 1) % 3), 500);
    };
    const prev = () => {
        animation();
        var value;
        if(currDisp > 0)
            value = currDisp - 1;
        else
            value = 2;
        
        setTimeout(() => setDisp(value), 500);
    };
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
            <div className="container" id="slider">
                <div className="row">
                    <div className="col">
                        <button onClick={prev} id="sliderControls">
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-arrow-left-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="col-10" id="eventSlider">
                        <EventManager currDisp={currDisp}/>
                    </div>
                    <div className="col">
                        <button onClick={next} id="sliderControls">
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-arrow-right-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 8.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event;