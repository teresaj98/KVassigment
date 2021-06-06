import React, {Component} from 'react';
import '../css/styles.css';

function Inputtext(props) {
    return (
        <div>
            <label>{props.label}</label><br />
            <input type="text" id={props.id} name={props.name} placeholder={props.placeholder} /><br />
        </div>
        );
  }

  export default Inputtext;