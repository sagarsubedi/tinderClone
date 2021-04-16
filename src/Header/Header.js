// core stuffs
import React from 'react';

// icons from Material UI
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            
            <IconButton>
                <PersonIcon
                    fontSize = "large"
                    className = "header__icon"
                />
            </IconButton>

        </div>
    )
}

export default Header;
