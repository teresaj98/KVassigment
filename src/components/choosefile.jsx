import React, {Component} from 'react';
import '../css/styles.css';

function Choosefile(props) {

    return (
        <div>
            <label> Choose ID Proof</label>
            <div className="Cont">
                    <div>Choose a file</div>
                    <label for="file"  className="Custom-file">Browse</label>
                    <input type="file" id="file" class="Ifile" /> 
            
            </div>
        </div>
        );
  }

  export default Choosefile;