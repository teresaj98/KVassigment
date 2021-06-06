import React, {Component} from 'react';
import '../css/styles.css';

function Submit(props) {
    return (
        <div style={{display:'inline'}}>
            <input type="submit" value={props.value} id={props.id} />
        </div>
        );
  }

  export default Submit;