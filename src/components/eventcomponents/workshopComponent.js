import React, {useState} from 'react';
import { workshops } from '../../assets/js/events';
import EventInfo from './eventInfoComponent';
import anime from 'animejs';
import {Collapse} from 'reactstrap';
import '../../assets/css/component.css';

function Workshops()
{
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(prevState => !prevState);
        if(open)
        {
            anime({
                targets: '.down-Work',
                rotateX: 0
            });
        }
        else
        {
            anime({
                targets: '.down-Work',
                rotateX: 180
            })
        }
    }
    const collapseMaterial = workshops.map((work, index) => (
        <div key={work.title}>
            {index ? <EventInfo event={work} /> : <div></div> } 
        </div>
    ))
    const collapseButton = workshops.length > 1 ?
    <button id="moreComp" onClick={toggle}>
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="down-Work" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </svg>
    </button> : <div></div>
    const collapseContent = workshops.length > 1? 
        <div className="row">
            <Collapse isOpen={open}>
                {collapseMaterial}
            </Collapse>
        </div>: <div></div>
    return(
        <div id="event-block">
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
                    <EventInfo event={workshops[0]}/>
                </div>
                {collapseContent}
                {collapseButton}
            </div>
        </div>
    )
}

export default Workshops;