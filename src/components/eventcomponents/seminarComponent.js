import React, {useState} from 'react';
import {seminars} from '../../assets/js/events';
import EventInfo from './eventInfoComponent';
import anime from 'animejs';
import {Collapse} from 'reactstrap';
import '../../assets/css/component.css';

function Seminars(){
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(prevState => !prevState);
        if(open)
        {
            anime({
                targets: '.down-Sem',
                rotateX: 0
            });
        }
        else
        {
            anime({
                targets: '.down-Sem',
                rotateX: 180
            })
        }
    }
    const collapseMaterial = seminars.map((sem, index) => (
        <div key={sem.title}>
            {index ? <EventInfo event={sem} /> : <div></div> } 
        </div>
    ))

    const collapseButton = seminars.length > 1 ?
    <button id="moreComp" onClick={toggle}>
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="down-Sem" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </svg>
    </button> : <div></div>
    
    const collapseContent = seminars.length > 1? 
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
                <EventInfo event={seminars[0]}/>
            </div>
            {collapseContent}
            {collapseButton}
        </div> 
    </div>
    )
}

export default Seminars;