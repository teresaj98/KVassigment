import React, {Component} from 'react';
import '../css/styles.css';

function Header(props) {
    return (
            <div className="Create" >
                <p className="Heading" >
                    {props.heading}
                </p>
            </div>
        );
  }

  export default Header;