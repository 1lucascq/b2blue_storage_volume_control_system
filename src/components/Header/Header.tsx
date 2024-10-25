import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Logo from './Logo';

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
				<Logo />
            </Toolbar>
        </AppBar>
    );
};

export default Header;