import React, { useEffect } from 'react';

import PortfolioContainer from '../portfolio/portfolio-container';
import Home from '../../style/home';
import css from '../../../static/assets/images/css.png';
import html from '../../../static/assets/images/htmlicon.png';
import JS from '../../../static/assets/images/jsicon.png';
import python from '../../../static/assets/images/python.png';
import react from '../../../static/assets/images/react.png';




import AOS from 'aos';
import 'aos/dist/aos.css';
import { duration } from 'moment';


const Land = () => {
    useEffect(() => {
        AOS.init({ duration:1000 });
    }, []);
    

    return(
        
        
        <div className="home-page">
            <header>
                <div className="photo-main-content">
                        <div className="home-main-text-block">
                            <div id="home-main-text" class="transpary"  data-aos="fade-up">
                            
                                <h1 data-aos="fade-up"> Kiannalie </h1>
                                <p>  welcome, lets build an experience together </p>
                                {/* <h3> let's build an experience together </h3> */}
                            </div>
                        </div>
                    
                </div>
                <div className="home-about-me"> 
                
                    <div className="about-me-block">
                        <div className="about-me-block-title"> 
                            <h2> Tools Available  </h2>
                        </div>
                        <div className="home-about-me-block">
                        <div className="home-about-me-photo" data-aos="fade-up"> 
                            <img src={css}/>
                        </div>

                        <div className="home-about-me-photo" data-aos="fade-up"> 
                            <img src={html}/>
                        </div>

                        <div className="home-about-me-photo" data-aos="fade-up"> 
                            <img src={JS}/>
                        </div>

                        <div className="home-about-me-photo" data-aos="fade-up"> 
                            <img src={python}/>
                        </div>

                        <div className="home-about-me-photo" data-aos="fade-up"> 
                            <img src={react}/>
                        </div>
                        </div>
                        
                        {/* <div className="home-about-me-text">    
                            <h1 > Hi! I'm Kiannalie </h1>
                            <h3> I'm a web designer / developer based in utah I have a passion for web design and love to create for web.</h3>
                        </div> */}
                    </div>
                </div>
            </header> 

            <div className="portfolio-main-content"> 
                <PortfolioContainer/>
            </div> 
        </div>
    )
}
export default Land;