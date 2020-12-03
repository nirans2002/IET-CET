import React from 'react';
import { Link } from 'react-router-dom';

function Banner(){

    return(
    <div id="banner">
        <div className="container">
            <div className='row row-header align-items-start'>
                <div className="col" id="banner-heading">
                    <p>Welcome to IET On Campus CET</p>
                    <Link to="/events">
                        <div id="explore">
                            <button>Explore</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Banner;
