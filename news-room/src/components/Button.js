import React from 'react';
import chevron from '../images/chevron.svg';


function Button(){
    return(
        <a href="#header">
            <div className="go-to-top">
                <img src={chevron} alt="chevron"/>
            </div>
        </a>
    );
}

export default Button;