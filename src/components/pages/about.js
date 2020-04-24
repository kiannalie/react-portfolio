import React, { useEffect } from 'react';

import About from '../../style/about';
import { noAuto } from '@fortawesome/fontawesome-svg-core';
//import videoOcean from '../../../static/assets/images/bwOceanVid.mp4';
import imageOne from '../../../static/assets/images/PREBA.jpg';
import imageThree from '../../../static/assets/images/snowBoardingMe.jpg';
import imageTwo from '../../../static/assets/images/uofuMe.jpg';
import imageFour from '../../../static/assets/images/deceMe.jpg';
import imageFive from '../../../static/assets/images/paintingMe.jpg';
import imageSix from '../../../static/assets/images/martinAnse.jpg';
import imageSeven from '../../../static/assets/images/supraMe.jpg';
import imageEight from '../../../static/assets/images/kiannaTek.jpg';

import github from '../../../static/assets/images/github.png';
import linkedin from '../../../static/assets/images/linkedin.png';
import instagram from '../../../static/assets/images/instagram.png';

// import resume from '../../../static/assets/KiannalieSarmientoResume20.pdf';

//import imageFour from '../../../static/assets/images/martinFrenchFood.jpg';
//import imageFive from '../../../static/assets/images/foothillsMariah.jpg';


import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


import AOS from 'aos';
import 'aos/dist/aos.css';

const Test = () => {
    useEffect(() => {
        AOS.init({ duration:1000 });
    }, []);
    return (
        <div>
        <div className="about-page-wrapper"> 
            <div className="about-highlight"> 
                <div className="highlight-text-container">
                    <div className="highlight-title"> 
                        <h1> A little about me  </h1>
                    </div>
                    <div className="highlight-body"> 
                        <p> They say a picture is worth a thousand words. Go ahead! Scroll away!  </p>
                    </div>
                    
                </div>
                <div className="highlight-photo-reel">
                    
                    <Carousel
                        centered
                        infinite
                        // arrows
                        slidesPerPage={2}
                    >
                    <img src={imageOne} />
                    <img src={imageTwo} />
                    <img src={imageThree} />
                    <img src={imageFour} />
                    <img src={imageFive} />
                    <img src={imageSeven} />
                    <img src={imageEight} />
                    <img src={imageSix} />
                    </Carousel>
                    
                </div>
            </div>

            <div className="hero-section">   
            </div>
            
            <div className="block-header"> 
                <h2>lets break it down </h2>
            </div>

            <div className="about-page-blocks">
                <div className="about-page-blocks-left">
                    <div className="blocks-left"> 
                        <div className="about-page-blocks-left__info ">
                            <h1> how coding came to be</h1>
                        </div>
                        <div className="about-page-blocks-left__info ">
                            <h1> behind the codes </h1>
                        </div>
                        <div className="about-page-blocks-left__info ">
                            <h1> contact </h1>
                        </div>
                    </div>
                </div>

            <div className="about-page-blocks-right">
                <div className="blocks-right"> 
                    <div className="info-three" > 
                        <div className="item" data-aos="fade-up" >
                        
                            <p> “My best advice for you is to take a coding class” was Randi Zuckerberg advice to me when I asked her after explaining the goals and dreams I have.  Little did Randi know that two years later I would working as a software developer and fallen in love with programming. </p> 
                            <p> As a child I would sell “imported Peruvian soda” and “the highest glitter bouncing balls in the world!” to any friend that would hear my pitch. Business is something I have always been passionate about since as long as I can remember However, when I thought of future in business there was something missing and I found it in tech. There is something special when you see your first “hello world” or fix a bug after hours and hours trying to solve it.</p>
                            <p> I still have the goal as my elementary school self would say “when I grow up I will own a big company” but as of now I am loving learning new things everyday that comes in the path to being a computer scientist and impassioned by mix of business and tech. </p>
                        </div>
                    </div> 
                </div>
                <div className="blocks-right"> 
                    <div className="info-two" > 
                        <div className="item"  data-aos="fade-up">
                            {/* <h4 className="info-block-title"> Classy x Tech </h4> */}
                            <p> I'm a Latina dream board advocate that loves JDM cars that should’ve been born in the ’50s. I've always had identity crisis given that you’ll see me whipping up a Peruvian dish like papa a la huancaina with my Abuelita while jamming to Suavemente by Elvis Crespo then later on listening to Paul Anka, “put your head on my shoulder” thinking about how timeless the Christian Dior spring/summer 1953 collection was while painting with my watercolors.</p>
                            <p>You can find me instantly smiling when I hear a high horsepower supercharged import drives by, when my little sisters draw little notes for me and seeing friends chase dreams of their own. Fact: I speak English, Portuguese, and Spanish! My best friends are my siblings and stack overflow.</p>
                        </div>
                    </div>
                </div>

                <div className="spacerdude1"> </div>

                <div className="blocks-right"> 
                    <div className="info-three"> 
                        <div className="item" id="contact-block"data-aos="fade-up">
                            <div className="contact-info">
                                <p> Looking at building something awesome together? contact me!</p>
                                <p className="link"> Email Me: <a href="mailto:ksarmiento2000@gmail.com"> here </a></p>

                            </div>
                            <div className="contact-links">
                                <div className="contact-icon" data-aos="fade-up"> 
                                    <a href="https://github.com/kiannalie" target="_blank" ><img src={github}/></a>
                                </div>

                                <div className="contact-icon" data-aos="fade-up"> 
                                    <a href="https://www.linkedin.com/in/kiannalie/" target="_blank" ><img src={linkedin}/></a>
                                </div>

                                <div className="contact-icon" data-aos="fade-up"> 
                                    <a href="https://www.instagram.com/kiannalie/" target="_blank" ><img src={instagram}/></a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="spacerBoi2"> </div>
                </div>
                <div className="spacerBoi2"> </div>
            </div>
            <div className="spacerBoi2"> </div>
        </div>
        </div>
    );
};

export default Test;


//old page
// export default function() {
//     return(
//         <div className="about">
//             <div className="about-main-img"> 
//                 <img src={require('../../../static/assets/images/about.png')}/>   
//             </div>
            
//             <div className="page-spacer"></div>

//             <div className="chart-content">
//                 <div className="top-chart-content">
//                     <div className="top-chart-left"> 
//                         <h1> Family Time </h1>
//                         <p>Lorem ipsum dolor sit amet, te nam aeque aeterno erroribus, nostrud menandri cu duo, vix mazim vocibus consequat te. At clita sapientem per, meliore blandit necessitatibus vel ad, summo complectitur te est. Ex probatus consulatu has. Autem bonorum duo at. Sapientem omittantur quo in, munere deleniti quaestio ex pro. Ei nibh lorem iriure duo, ad erant eruditi labores pro.</p>
//                     </div>

//                     <div className="top-chart-right" >
//                         <h1> Fixing Bugs  </h1>
//                         <p>Lorem ipsum dolor sit amet, te nam aeque aeterno erroribus, nostrud menandri cu duo, vix mazim vocibus consequat te. At clita sapientem per, meliore blandit necessitatibus vel ad, summo complectitur te est. Ex probatus consulatu has. Autem bonorum duo at. Sapientem omittantur quo in, munere deleniti quaestio ex pro. Ei nibh lorem iriure duo, ad erant eruditi labores pro.</p>
//                     </div>
//                 </div>
            
//                 <div className="middle-chart-content">
//                     <div className="middle-chart-left">
//                         <div className="middle-left-top"> 
//                             <h1> Teach </h1>
//                             <p>Lore it necessitatibus vel ad, summo complectitur te est. Ex probatus consulatu has. Autem bonorum duo at. Sapientem omittantur quo in, munere deleniti quaestio ex pro. Ei nibh lorem iriure duo, ad erant eruditi labores pro.</p>
//                         </div>

//                         <div className="middle-left-bottom"> 
//                             <h1> Run in Nature </h1>
//                             <p>Lorem ipsum dolor sit amet, te nam aeque aeterno erroribus, nostrud menandri cu duo, vix mazim vocibus consequat te. At clita sapientem per, meliore blandit necessitatibus vel ad, summo complectitur te est. Ex probatus consulatu has. Autem bonorum duo at. Sapientem omittantur quo in, munere deleniti quaestio ex pro. Ei nibh lorem iriure duo, ad erant eruditi labores pro.</p>
//                         </div>
//                     </div>

//                     <div className="middle-spacer">
                        
//                     </div>

//                     <div className="middle-chart-right"> 
//                         <div className="middle-right-top" >
//                             <h1> Meditation and Mantras  </h1>
//                             <p>Sapientem omittantur quo in, munere deleniti quaestio ex pro. Ei nibh lorem iriure duo, ad erant eruditi labores pro.</p>
//                         </div>

//                         <div className="middle-right-bottom"> 
//                             <h1> Reading and learning </h1>
//                             <p>Lorem ipsum dolor sit amet, te nam aeque aeterno erroribus, nostrud menandri cu duo, vix mazim vocibus consequat te. At clita sapientem per, meliore blandit necessitatibus vel ad, summo complectitur te est. Ex probatus consulatu has. Autem bonorum duo at. Sapientem omittantur quo in, munere deleniti quaestio ex pro. Ei nibh lorem iriure duo, ad erant eruditi labores pro.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="bottom-chart-content">
//                     <div className="bottom-chart-main"> 
//                         <h1> Deep in the Codes </h1>
//                         <p>Lorem ipsum dolor sit amet, te nam aeque aeterno erroribus, nostrud menandri cu duo, vix mazim vocibus consequat te. At clita sapientem per, meliore blandit necessitatibus vel ad, summo complectitur te est. Ex probatus consulatu has. Autem bonorum duo at. Sapientem omittantur quo in, munere deleniti quaestio ex pro. Ei nibh lorem iriure duo, ad erant eruditi labores pro.</p>
//                     </div> 
//                 </div>

//                 <div className="page-spacer"></div>

//             </div>
//         </div>
//     )
// }

