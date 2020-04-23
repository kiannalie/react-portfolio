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
                        <p> they say a picture is worth a thousand words. Go ahead! Scroll away!  </p>
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
                    <div> hi im here to testing </div>
                </div>

            <div className="about-page-blocks-right">
                <div className="blocks-right"> 
                    <div className="info-three" > 
                        <div className="item" data-aos="fade-up" >
                        
                            <p> you code right? YUP. he FitnessGram Pacer Test is a multistage aerobic capacity test that progressively</p>
                        </div>
                    </div> 
                </div>
                <div className="blocks-right"> 
                    <div className="info-two" > 
                        <div className="item"  data-aos="fade-up">
                            <h4 className="info-block-title"> Classy x Tech </h4>
                            <p> Thr pacer test will begin in 3ing speed starts slowly but gets faster each minute after you hear this signal bodeboop. A sing lap should be completed every time you hear this sound. ding Remember to run in a straight line and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark. Get ready!… Start.</p>
                        </div>
                    </div>
                </div>

                <div className="spacerdude1"> </div>

                <div className="blocks-right"> 
                    <div className="info-three"> 
                        <div className="item" data-aos="fade-up">
                            <p> The FitnessGrity test that progressipacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly but gets faster each minute after you hear this signal bodeboop. A sing lap should be completed every time you hear this sound. ding Remember to run in a straight line and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark. Get ready!… Start.</p>
                        </div>
                    </div>
                </div>
                {/* <div className="spacerBoi2"> </div> */}
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

