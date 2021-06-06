import React, {Component} from 'react';
import logo from "../images/people.png";
import '../css/styles.css';

function Sidebar(props) {
    return (
            <div className="Sidebar"> 
                <div className="Emp">
                    <p className="Center" >  
                    <img src={logo} className="Icon"/> 
                        <div>Employee List</div>
                    </p>
                </div>
            </div>
        );
  }

  export default Sidebar;