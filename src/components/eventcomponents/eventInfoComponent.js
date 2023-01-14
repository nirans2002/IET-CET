import React from 'react';
import '../../assets/css/component.css';

function EventInfo({event}){
    const date = event.date ? 
    <div>
    <p>
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar-event" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
        <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
        </svg>{event.date}
    </p>
    </div> : <div></div>
    const time = event.time ? 
    <div>
    <p>
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"/>
            <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
        </svg>
        {event.time}
    </p>
    </div> : <div></div>
    const quote = event.quote ? <p><em>"{event.quote}"</em></p> : <div></div>
    return(
    <div className="event-info">
        <div className="col-12" id="event-info-container">
            <div className="row">
                <div className="col" id="event-info-heading">
                    <h4>{event.title}</h4>
                </div>
            </div>
            <div className="row" id="event-info-section">
                <div className="col-md-5" id="event-img-container">
                    <img src={require(`../../assets/img/${event.img}`)} alt='Expedition' />
                </div>
                <div className="col-md-7" id="event-info-info">
                    {quote}
                    <pre>{event.content}</pre>
                    {date}
                    {time}
                    
                    {/* <div>
                        <button type="button"  target="_blank" className="btn btn-primary" href={event.reg_link} id="event-reg-button">Register</button>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    )
}

export default EventInfo;