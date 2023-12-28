import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './navbar.css';

function Navbar({ handleAddClick, handleSearchClick }) {
    return (
        <AppBar position="static">
            <Toolbar style={{ justifyContent: 'space-between' }}>
                {/* Search Icon */}
                <IconButton edge="start" color="inherit" aria-label="search" onClick={handleSearchClick}>
                    <SearchIcon />
                </IconButton>

                {/* Logo/Brand Name */}
                <Typography variant="h6" className="navbar-title">
                    HW Tire Inventory
                </Typography>

                {/* Add Tire Icon */}
                <IconButton edge="end" color="inherit" aria-label="add tire" onClick={handleAddClick}>
                    <AddCircleIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
