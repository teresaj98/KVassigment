import React, {Component} from 'react';
import logo from "../images/logo.png";
import '../css/styles.css';

function Logo(props) {
    return (
            <div className="Sidebardiv">
                <img src={logo} className="Image"/>
            </div>
            
    );
  }

export default Logo;