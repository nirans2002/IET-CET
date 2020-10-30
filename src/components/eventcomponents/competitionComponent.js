import React, {useState} from 'react';
import {competitions} from '../../assets/js/events';
import EventInfo from './eventInfoComponent';
import anime from 'animejs';
import {Collapse} from 'reactstrap';
import '../../assets/css/component.css';

function Competitions(){
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(prevState => !prevState);
        if(open)
        {
            anime({
                targets: '.down-Comp',
                rotateX: 0
            });
        }
        else
        {
            anime({
                targets: '.down-Comp',
                rotateX: 180
            })
        }
    }
    const collapseMaterial = competitions.map((comp, index) => (
        <div key={comp.title}>
            {index ? <EventInfo event={comp} /> : <div></div> } 
        </div>
    ))

    const collapseButton = competitions.length > 1 ?
    <button id="moreComp" onClick={toggle}>
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="down-Comp" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </svg>
    </button> : <div></div>
    
    const collapseContent = competitions.length > 1? 
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
                        <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-trophy" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/>
                        </svg>
                    </div>
                    <div className="col-12">
                        <h2>Competitions</h2>
                    </div>
                </div>
                <div className="row">
                    <EventInfo event={competitions[0]}/>
                </div>
                {collapseContent}
                {collapseButton}
            </div>
        </div>
    )
}

export default Competitions;