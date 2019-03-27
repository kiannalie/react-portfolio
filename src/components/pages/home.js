import React from 'react';

import PortfolioContainer from '../portfolio/portfolio-container';
import Home from '../../style/home';


export default function() {
    return(
        <div className="home-page">
            <header>
                <div className="photo-main-content">
                    <div className="photo-main-content__name"> 
                        <h1> KIANNALIE SARMIENTO </h1>

                    </div>
                </div>
            </header> 

            {/* <div className="portfolio-main-content"> 
                <PortfolioContainer/>
            </div>  */}
        </div>
    )
}