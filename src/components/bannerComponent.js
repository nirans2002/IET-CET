import React, { useState } from 'react';

function Banner(){

    const [position, setPosition] = useState('center');
    function setAlignment()
    {
        if(window.innerWidth <= 450)
            setPosition('start');
        else
            setPosition('center');
    }
    window.addEventListener('resize', setAlignment);
    return(
    <div id="banner">
        <div className="container" id="event-heading">
            <div className={`row row-header align-items-${position}`}>
                <div className="col" id="banner-heading">
                    <p>Welcome to IET On Campus CET</p>
                    <div id="explore">
                        <button onClick={(e) => {e.preventDefault(); window.location.href='/events';}}>Explore!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Banner;
