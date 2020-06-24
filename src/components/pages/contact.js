import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../../static/assets/images/profile.jpg";

import AOS from 'aos';
import 'aos/dist/aos.css';

const ResumeInfo = () => {
    useEffect(() => {
      AOS.init({ duration:1000 });
    }, []);
    return (
        <div className='resume-page-wrapper'> 
            <div className="resume-page-title"> 
                <h1> README.Kiannalie.md </h1>
            </div> 
            
            <div className="spacer"> </div>

            <div className="resume-main-wrapper">
              <div className="skills-container">
                <div className="skills-container__title">
                  <div className="linedude">
                    <div data-aos="fade-up" className="linegirl">
                      <h1 > Skills: </h1>
                      </div>
                  </div>
                </div>
                {/* <div className="skills-list-wrapper">  */}
                  <div className="skills-container__tech">
                    <h2> Technologies </h2>
                    <ul> 
                      <li> HTML5 / CSS3</li>
                      <li> Sass </li>
                      <li> JavaScript </li>
                      <li> ReactJS / NodeJS </li>
                      <li> Python </li>
                      <li> SQL </li>
                      <li> MongoDB </li>
                      <li> GitHub </li>
                      <li> Photoshop </li>
                      <li> Lightroom </li>
                      <li> Illustrator  </li>
                    </ul>

                  </div>
                  <div className="skills-container__soft">
                    <h2> Soft Skills </h2>
                      <ul> 
                        <li> Leadership</li>
                        <li> Team worker </li>
                        <li> Creative </li>
                        <li> Outgoing </li>
                        <li> Goal oriented </li>
                        <li> Contagious laugh </li>
                        {/* @! connect skill to other part of resume */}
                      </ul>
                  </div>
                {/* </div> */}
              </div>
            </div>

            <div className="spacer"> </div>

            <div className="work-container">
            
                  <div className="work-container__title">
                    <div className="linedude">
                      <div data-aos="fade-up" className="linegirl">
                      <h1> Work Experience: </h1>
                      </div>
                    </div>
                  </div>
               
                <div className="work-container__content-wrapper">
                  <div className="work-block"> 
                  <div className="work-container__content-title">
                    <h2> PROGRAMMING MENTOR / INSTRUCTOR </h2>
                  </div>
                  <div className="work-container__content-info">
                    <h3>
                      <a href="https://bottega.tech/" target="_blank" className="link-boys"> Bottega </a>
                      / 2019 
                    </h3>
                  </div>
                  <div className="work-container__content-experience">
                      <p> 
                        Tutored upcoming junior full stack developers in English and Spanish 
                        in multiple languages such as python, JavaScript, and SQL.
                        Communicated weekly with students to follow up on course and 
                        solved problems with code along with them.
                        Worked in a team of programming mentors to colaborate 
                       
                      </p>
                  </div>
                  </div>

                  <div className="work-block">  
                    <div className="work-container__content-title">
                      <h2> SOCIAL MEDIA / EVENT PROJECT COORDINATOR </h2> 
                    </div>
                  
                  
                  <div className="work-container__content-info">
                    <h3>
                      <a href="https://siliconslopes.com/" target="_blank" className="link-boys"> SILICON SLOPES </a>
                      / 2018 - 2019
                    </h3>
                  </div>
                  <div className="work-container__content-experience">
                      <p> 
                        Revamped social media marketing accounts. Doubling followers and engagement for <a href="https://www.instagram.com/siliconslopes/?hl=en" target="_blank" className="link-in-body" >Instagram. </a>
                        Managed VIP room at <a href="https://www.siliconslopessummit.com/" target="_blank" className="link-in-body" >Silicon Slopes Tech Summit 2019. </a>  
                        Managed marketing campaigns and budget.
                        Curated content specific to campaigns and market.
                        
                      </p>
                  </div>
                  </div>
                </div>

              </div>

            <div className="spacer"> </div>

            <div className="edu-container">
                <div className="edu-container__title">
                  <div className="linedude">
                    <div data-aos="fade-up" className="linegirl"> 
                      <h1> Education: </h1>
                    </div>
                  </div>
                </div>
                <div className="edu-container__content-wrapper">
                  <div className="edu-container__content-title">
                    <h2> Bottega Code School </h2>
                  </div>
                  <div className="edu-container__content-info">
                    <p> Full Stack Development Certification / 2019 </p>
                  </div>
                  <div className="edu-container__content-award">
                  </div>

                  <div className="edu-container__content-title">
                    <h2> University of Utah  </h2>
                  </div>
                  <div className="edu-container__content-info">
                    <p> Computer Science / Sophmore </p>
                  </div>
                  <div className="edu-container__content-award">
                      <ul> 
                        <li> Business Scholar Student </li>
                      </ul>
                  </div>

                  

                  <div className="edu-container__content-title">
                    <h2> Timpanogos High School </h2>
                  </div>
                  <div className="edu-container__content-info">
                    <p> Graduated with Honors / 2018 </p>
                  </div>
                  <div className="edu-container__content-award">
                      <ul> 
                        <li> <a href="https://www.deseret.com/2018/2/9/20640454/utah-s-2018-sterling-scholar-candidates-wasatch-front-south-area" target="_blank" className="link-in-body" >Sterling Scholar </a> Business And Marketing 2018 </li>
                        <li> Academic letters in service and business 2015 -2017 </li>
                        <li> Spirit of Timpanogos: Excelence in Leadership 2018 </li>
                        <li> DECA / FBLA international competitor 2016 - 2017  </li>
                        <li> Career and Technical Education Pathway Certification: Entrepreneurship and Managment 2018 </li>
                      </ul>
                  </div>
                </div>
              </div>

              <div className="awards-container">
                <div className="awards-container__title">
                  <div className="linedude">
                    <div data-aos="fade-up" className="linegirl">
                      <h1> Awards : </h1>
                    </div>
                  </div>
                </div>
                <div className="awards-container__content-wrapper">
                  <div className="awards-container__content-title">
                    <h2> Top Female <a href="https://www.sieutah.org/" target="_blank" className="link-in-body" >Code to Success </a>Graduate Scholarship 2018    </h2>
                  </div>
                  <div className="awards-container__content-info">
                    <p> Computer Science </p>
                  </div>

                  <div className="awards-container__content-title">
                    <h2> Utah <a href="https://www.instagram.com/p/Bfji9N3BTIv/" target="_blank" className="link-in-body" >DECA </a> Independent Business Plan Finalist </h2>
                  </div>
                  <div className="awards-container__content-info">
                    <p> Business and Marketing </p>
                  </div>
              
                </div>
              </div>

              <div className="service-container">
                <div className="service-container__title">
                  <div className="linedude">
                    <div data-aos="fade-up" className="linegirl">
                      <h1> Volunteer Work : </h1>
                    </div>
                  </div>
                </div>
                <div className="service-container__content-wrapper">
                  <div className="service-container__content-title">
                    <h2> Portuguese Teacher  </h2>
                  </div>
                  <div className="service-container__content-info">
                    <p> São Paulo, Brazil / 2020 </p>
                  </div>

                  <div className="service-container__content-experience">
                      <p>
                        Taught and tutored Portuguese to relocated Vensuelans in São Paulo, Brazil with classes mutiple times a week.
                      </p>
                  </div>
                

                  <div className="service-container__content-title">
                    <h2> Orem City Youth Council Co-Chairman </h2>
                  </div>
                  <div className="service-container__content-info">
                    <p> Orem, Utah / 2016 - 2017 </p>
                  </div>
                  <div className="service-container__content-experience">
                      <p>
                        Discused city wide concerns, comunity service projects,<br/> and first hand look into how a citys departments work 
                      </p>
                  </div>
                  <div className="service-container__content-title">
                    <h2> <a href="https://latinosinaction.org/" target="_blank" className="link-in-body" >Latinos in Action </a>Vice President </h2>

                  </div>
                  <div className="service-container__content-info">
                    <p> Orem, Utah / 2016 </p>
                  </div>

                  <div className="service-container__content-experience">
                      <p>
                      Empowering Latinos to create positive change in their communities by reaching college and career goals.  As Vice President in the Timpanogos High School chapter responsibilities were plan service activities, discussed and implemented plans with the LIA council in how to engage the Latinos in our community and our high school to reach higher ed goals in multiple industries. Worked with Student Council in dismantling stereotypes in our school's community. </p>
                  </div>
              
                </div>
              </div>
            
            <div className="spacer"> </div>

        </div>

    )
};
export default ResumeInfo;

{/* //old contact code
// <div className="content-page-wrapper">
//       <div>
//         className="left-column"
//         style={{ */}
{/* //           background: "url(" + contactPagePicture + ") no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center"
//         }}
//       />
//       <div className="right-column">
//         <div className="contact-bullet-points">
//           <div className="bullet-point-group">
//             <div className="icon">
//               <FontAwesomeIcon icon="phone" />
//             </div>

//             <div className="text">801-472-3011</div>
//           </div>

//           <div className="bullet-point-group">
//             <div className="icon">
//               <FontAwesomeIcon icon="envelope" />
//             </div>

//             <div className="text">ksarmiento2000@gmail.com</div>
//           </div>

//           <div className="bullet-point-group">
//             <div className="icon">
//               <FontAwesomeIcon icon="map-marked-alt" />
//             </div>

//             <div className="text">Orem, UT</div>
//           </div>
//         </div>
//       </div>
//     </div> */}