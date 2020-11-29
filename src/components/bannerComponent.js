import React from 'react';

function Banner(){

    return(
    <div id="banner">
        <div className="container" id="event-heading">
            <div className="row row-header align-items-center justify-content-center">
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
