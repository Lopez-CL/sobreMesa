import {React, useState} from 'react'
import { useTheme } from "@mui/material/styles";
import { Menu } from "@mui/material/";
import { MenuItem } from "@mui/material/";
import { Button } from "@mui/material/";
const MenuButton = () => {
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
            <div id="menu">
                <Button
                    sx={[
                        {mt:3, mr:3, backgroundColor: theme.palette.secondary.dark, color:"white", ':hover':{backgroundColor: theme.palette.primary.dark, color:"white"}},
                        open && {backgroundColor: theme.palette.primary.dark, color:"white"}
                    ]}
                    id="menu-button"
                    aria-controls={open ? "menu-button" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >Menu</Button>
                <Menu
                    sx={{mt:1, mr:3}}
                    id="top-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    // anchorOrigin={{
                    //     vertical: 'bottom',
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
    )
}

export default MenuButton