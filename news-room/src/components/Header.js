import React from 'react';
import MenuContainer from '../containers/MenuContainer';
import logo from '../images/logo-black.svg';



function Header(){
    return(
        <div className="header" id="header">
            <img src={logo} alt="logo"/>
            <MenuContainer/>
        </div>
    );
}

export default Header;