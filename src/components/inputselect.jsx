import React, {Component} from 'react';
import '../css/styles.css';

function Inputselect(props) {
    return (
        <div>
            <label>{props.label}</label><br />
            <select type="text" id={props.id} name={props.name} ><br />
            <option value="none" selected disabled hidden>{props.selected}</option>
            <option value={props.value1}>{props.value1}</option>
            <option value={props.value2}>{props.value2}</option>
            </select>
        </div>
        );
  }

  export default Inputselect;