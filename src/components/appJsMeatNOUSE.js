//old landing page with button that would give accses to portfolio was called app.js and what is in app.js now is what was appJsMeat

//import React, { Component } from "react";
// import Meat from "./appJsMeat";
// //import Landing from "./landing";
// //import loginImg from "../../static/assets/images/landing.jpg";


// export default class App extends Component {
//   constructor(props) {
//     super(props);
//       this.state = {
//         visible: true,
//         whichComponentToShow: "Landing"
//     };
//   }

//   render() {
//     if ( this.state.whichComponentToShow === "Landing"){
//       return (
//         <div className="landing-wrapper"
//            style={{ backgroundImage: `url(${loginImg})`}} >
//           <Landing/>
//           <button className="landing-page-button"
//             onClick={() => {
//               this.setState({whichComponentToShow: "Meat"}); 
//             }}>
//             show me portfolio
//           </button>
//         </div>
//       );
//     } else if ( this.state.whichComponentToShow === "Meat"){
//       return (
//         <div>
//           <Meat/>
//         </div>
//       )
//     }  
//     return null;
//   }
// }
