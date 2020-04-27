import React, { useEffect } from 'react';

import PortfolioContainer from '../portfolio/portfolio-container';
import Home from '../../style/home';

// icons from flaticon.com
import css from '../../../static/assets/images/css.png';
import html from '../../../static/assets/images/htmlicon.png';
import JS from '../../../static/assets/images/jsicon.png';
import python from '../../../static/assets/images/python.png';
import react from '../../../static/assets/images/react.png';
import github from '../../../static/assets/images/github.png';
import linkedin from '../../../static/assets/images/linkedin.png';
import instagram from '../../../static/assets/images/instagram.png';
import mail from '../../../static/assets/images/mail.png';







import AOS from 'aos';
import 'aos/dist/aos.css';
import { duration } from 'moment';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';


const Land = () => {
    useEffect(() => {
        AOS.init({ duration:1000 });
    }, []);
    

    return(
        
        
        <div className="home-page">
            <header>
                <div className="photo-main-content">
                        <div className="home-main-text-block">
                            <div id="home-main-text" class="transpary" >
                                <h4 className="open-tag"> &lt; </h4>
                                <h1 data-aos="fade-up" > Kiannalie </h1>
                                <p>  Welcome, lets build an experience together </p>
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

                <div className="portfolio-main-content"> 
                <PortfolioContainer/>
                </div>

                <div className="contact-me"> 
                
                    <div className="about-me-block">
                        <div className="about-me-block-title"> 
                            <h2> Contact Me  </h2>
                        </div>
                        <div className="home-about-me-block">
                        <div className="home-about-me-photo" data-aos="fade-up"> 
                            <a href="https://github.com/kiannalie" target="_blank" ><img src={github}/></a>
                        </div>

                        <div className="home-about-me-photo" data-aos="fade-up"> 
                            <a href="https://www.linkedin.com/in/kiannalie/" target="_blank" ><img src={linkedin}/></a>
                        </div>

                        <div className="home-about-me-photo" data-aos="fade-up"> 
                            <a href="https://www.instagram.com/kiannalie/" target="_blank" ><img src={instagram}/></a>
                        </div>

                        <div className="home-about-me-photo" data-aos="fade-up"> 
                            <a href="mailto:ksarmiento2000@gmail.com"><img src={mail}/></a>
                            
                        </div>

                        {/* <div className="home-about-me-photo" data-aos="fade-up"> 
                            <img src={react}/>
                        </div> */}
                        </div>
                        
                        
                    </div>
                </div>
            </header> 

            
        </div>
    )
}
export default Land;