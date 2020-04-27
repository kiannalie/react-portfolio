import React, { Component } from "react";  
import axios from "axios";


export default class PortfolioDetail extends Component {
constructor(props) {
    super(props);

    this.state = {
        portfolioItem: {}
    }

    }
componentWillMount(){
    this.getPortfolioItem()
}

getPortfolioItem() {
    axios
        .get(
        `https://kianna.devcamp.space/portfolio/portfolio_items/${
            this.props.match.params.slug
        }`,
        {withCredentials: true}
        )
        .then(response => {
            this.setState({
                portfolioItem: response.data.portfolio_item
            })
        })
        .catch(error => {
        console.log("getPortfolioItem", error);
        });
    }

    render() {
        const {
            banner_image_url,
            category,
            description,
            logo_url,
            name,
            thumb_image_url,
            url
        } = this.state.portfolioItem;

        return (
            <div className="portfolio-detail"> 
                <div className="portfolio-detail-pojects"> 
                    {/* <div className="poject-divider">
                        
                    </div> */}
                    
                    <div className="poject-intro-wrapper">
                        <div className="poject-left">
                            <div className="poject-left__name">
                                <h1> {name} </h1>
                            </div>

                            <div className="poject-left__description">
                                <p> {description} </p>
                            </div>
                        </div>

                        <div className="poject-right">
                            <div className="poject-right__link">
                                <div className="eyebrow">
                                    <h1> WEBSITE: </h1>
                                </div>
                                <a href="hhttps://elevate-marketing-krsp.herokuapp.com/"  target="_blank" className="eye">
                                    <p> {name}
                                        <a href={url}  className="eye"></a>
                                    </p>
                                </a>
                            </div>
                            <div className="poject-right__tech">
                                <div className="eyebrow">
                                    <h1> TECH USED: </h1>
                                </div>
                                <div className="eye">
                                    <p> Javascript, HTML5, CSS </p>
                                </div>
                            </div>
                            <div className="poject-right__category">
                                <div className="eyebrow">
                                    <h1> CATEGORY: </h1>
                                </div>
                                <div className="eye">
                                    <p> Personal Project </p>
                                </div>
                            </div>
                        </div>    
                    </div>
                    {/* <div className="portfolio-detail-image">
                    <img src={banner_image_url} />
                </div> */}
                </div>
                {/* <div className="portfolio-detail-image">
                    <img src={banner_image_url} />
                </div> */}

            </div>
        );
    }
}

// html {
//     overflow: hidden;
// }
// body {
//     margin: 0;
//     font-size: 26px;
//     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
//     color: #ffffff;
//     height: 100vh;
//     perspective: 1px;
//     transform-style: preserve-3d;
//     overflow-x:hidden;
//     overflow-y:auto;
// }
// .parallax-wrapper {
//     width: 100vw;
//     height:100vh;
//     padding-top:20vh;
//     box-sizing: border-box;
//     transform-style: preserve-3d;
// }
// .parallax-wrapper::before {
//     content:"";
//     width: 100vw;
//     height: 100vh;
//     top:0;
//     left:0;
//     background-image: url("/trianglify.png");
//     position: absolute;
//     z-index: -1;
//     transform:translateZ(-1px) scale(2);
// }
// .regular-wrapper {
//     width: 100vw;
//     height:100vh;
//     padding-top:20vh;
//     background-image: url("/trianglify2.png");
//     z-index: 2;
//     position: relative;
// }
// .content {
//     margin: 0 auto;
//     padding: 50px;
//     width: 50%;
//     background: #aaa;
// }