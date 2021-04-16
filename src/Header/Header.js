// core stuffs
import React from 'react';
import logo from "./img/logo_tinder.svg";
import "./Header.css";

// icons from Material UI
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';


function Header() {
    return (
        <div className="header">
            
            <IconButton>
                <PersonIcon
                    fontSize = "large"
                    className = "header__icon"
                />
            </IconButton>

            <IconButton>
                <img src={logo} alt="tiner_logo" className="header__logo" />
            </IconButton>

            <IconButton>
                <ChatIcon
                    fontSize="large"
                    className = "header__icon"
                />
            </IconButton>

        </div>
    );
}

export default Header;
