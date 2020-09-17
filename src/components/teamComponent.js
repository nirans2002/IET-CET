import React from 'react';
import profile from '../assets/img/profile.jpg';

function Team()
{
    return(
        <div id="team">
            <div className="container">
                <div className="row row-header align-items-center">
                    <div className="col">
                        <p>The Team</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-3" id="crew">
                        <div className="row align-items-center">
                            <img src={profile} alt="eren-yeager"/>
                        </div>
                        <div className="row align-items-center">
                            <div className="col">
                                <h5>Eren Yeager</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" id="crew">
                        <div className="row align-items-center">
                            <img src={profile} alt="eren-yeager"/>
                        </div>
                        <div className="row align-items-center">
                            <div className="col">
                                <h5>Eren Yeager</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" id="crew">
                        <div className="row align-items-center">
                            <img src={profile} alt="eren-yeager"/>
                        </div>
                        <div className="row align-items-center">
                            <div className="col">
                                <h5>Eren Yeager</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" id="crew">
                        <div className="row align-items-center">
                            <img src={profile} alt="eren-yeager"/>
                        </div>
                        <div className="row align-items-center">
                            <div className="col">
                                <h5>Eren Yeager</h5>
                            </div>
                        </div>
                    </div>    
                    
                </div>
            </div>

        </div>
    )
}

export default Team;