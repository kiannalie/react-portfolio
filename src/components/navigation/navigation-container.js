import React from "react";
import { scaleRotate as Menu } from 'react-burger-menu'
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

import github from '../../../static/assets/images/github.png';
import linkedin from '../../../static/assets/images/linkedin.png';
import instagram from '../../../static/assets/images/instagram.png';
import mail from '../../../static/assets/images/mail.png';

const NavigationComponent = props => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  const handleSignOut = () => {
    axios
      .delete("https://api.devcamp.space/logout", { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          props.history.push("/");
          props.handleSuccessfulLogout();
        }
        return response.data;
      })
      .catch(error => {
        console.log("Error signing out", error);
      });
  };

  return (
    <div className="nav">
        <label htmlFor="toggle" className="burger">&#9776;</label>
        <input type="checkbox" id="toggle"/>
         
        <div className="nav-wrapper"> 
            <div className="left-side">
              <div className="nav-link-wrapper" >
                <NavLink exact to="/" activeClassName="nav-link-active">
                  Home
                </NavLink>
              </div>

              <div className="nav-link-wrapper">
                <NavLink to="/about-me" activeClassName="nav-link-active">
                  About
                </NavLink>
              </div>

              <div className="nav-link-wrapper">
                <NavLink to="/contact" activeClassName="nav-link-active">
                  Resume
                </NavLink>
              </div>

              <div className="nav-link-wrapper">
                <NavLink to="/blog" activeClassName="nav-link-active">
                  Blog
                </NavLink>
              </div>

              {props.loggedInStatus === "LOGGED_IN" ? (
                dynamicLink("/portfolio-manager", "Portfolio Manager")
              ) : null}
            </div>
            
            <div className="right-side">
            
              <div className="right-side-icons">
              <div className="icon" > 
                <a href="https://github.com/kiannalie" target="_blank" ><img src={github}/></a>
              </div>

               <div className="icon"> 
                  <a href="https://www.linkedin.com/in/kiannalie/" target="_blank" ><img src={linkedin}/></a>
                </div>

                <div className="icon" > 
                  <a href="https://www.instagram.com/kiannalie/" target="_blank" ><img src={instagram}/></a>
                </div>

                <div className="icon" > 
                   <a href="mailto:ksarmiento2000@gmail.com"><img src={mail}/></a>
                </div>
              </div>
            
              {props.loggedInStatus === "LOGGED_IN" ? (
                <a onClick={handleSignOut}>
                <FontAwesomeIcon icon="sign-out-alt"/>
                </a>
              ) : null}

              

            </div>
        </div>
        </div>  

  );
};

export default withRouter(NavigationComponent);