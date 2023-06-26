import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Menu } from "@mui/material/";
import { MenuItem } from "@mui/material/";
import { Button } from "@mui/material/";
const NavBar = () => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <header style={{ backgroundColor: theme.palette.primary.light }}>
            <div id="menu">
                <Button
                    id="menu-button"
                    aria-controls={open ? "menu-button" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >Menu</Button>
                <Menu
                    id="top-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    // anchorOrigin={{
                    //     vertical: 'top',
                    //     horizontal: 'left',
                    // }}
                    // transformOrigin={{
                    //     vertical: 'top',
                    //     horizontal: 'left',
                    // }}
                    MenuListProps={{
                        'aria-labelledby': 'menu-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Back 2 Kitchen</MenuItem>
                    <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        </header>
    )
}

export default NavBar;