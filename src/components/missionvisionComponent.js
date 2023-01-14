import React from 'react';
import '../assets/css/component.css';

function MV()
{
    return(
        <div id="organisation">
            <div className="container">
                <div className="row row-header align-items-center">
                    <div className="col">
                        <p>The Organisation</p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <p>College of Engineering,Trivandrum has an active student chapter of the International professional society of engineers, The Institution of Engineering & Technology (IET) www.theiet.org .The IET CET Chapter was Inaugurated on 14th November,2008 and was first one of its kind in the state. We aim to engineer a better world by inspiring the next generation of students, informing the wider engineering community about the latest advancements in the field. We conduct seminars and workshops for the students of CET, as well as other colleges.</p>
                    </div>
                </div>
                <div className="row align-items-center" id="tabloid">
                    <div className="col-md-4 m-1" id="heading">
                        <h3>Vision</h3>
                    </div>
                    <div className="col-md m-1" id="content">
                        <h5>Working to engineer a better world.</h5>
                    </div>
                </div>
                <div className="row align-items-center" id="tabloid">
                    <div className="col-md-4 m-1" id="heading">
                        <h3>Mission</h3>
                    </div>
                    <div className="col-md m-1" id="content">
                        <h5>To inspire, inform and influence the global engineering community, supporting technology innovation to meet the needs of society.</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MV;