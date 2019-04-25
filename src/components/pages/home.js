import React from 'react';

import PortfolioContainer from '../portfolio/portfolio-container';
import Home from '../../style/home';


export default function() {
    return(
        <div className="home-page">
            <header>
                <div className="photo-main-content">
                    <div className="content-name">
                        <h1> Kiannalie Sarmiento</h1>
                        <h2> Full Stack Developer </h2>
                    </div>

                </div>
            </header> 

            <div className="portfolio-main-content"> 
                <PortfolioContainer/>
            </div> 
        </div>
    )
}