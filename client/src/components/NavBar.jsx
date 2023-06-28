import React from "react";
import { useTheme } from "@mui/material/styles";
import MenuButton from "./MenuButton";
import logo from '../assets/logo.png'
const NavBar = () => {
    const theme = useTheme();
    return (
        <header style={{ backgroundColor: theme.palette.secondary.light}}>
            <MenuButton></MenuButton>
            <div id="logo">
                <img alt="" src={logo}></img>
            </div>
            
            <nav></nav>
        </header>
    )
}

export default NavBar;