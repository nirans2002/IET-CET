import React from 'react';
import Banner from './bannerComponent';
import Footer from './footerComponent';
import MV from './missionvisionComponent';
import Team from './teamComponent';

function Main() {
    return(
        <div>
            <Banner/>
            <MV />
            <Team />
            <Footer/>
        </div>
    )
}

export default Main;