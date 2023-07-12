import {React, useState} from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import MenuButton from "./MenuButton";
import logo from '../assets/logo.png'
import {Tabs} from '@mui/material'
import {Tab} from '@mui/material'
const NavBar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [value, setValue] = useState('recipeAndBooks');
    const handleChange = ( event, newValue) => {
        console.log(newValue)
        setValue(newValue)
        navigate(newValue)
    }
    return (
        <header style={{ backgroundColor: theme.palette.secondary.light}}>
            <MenuButton></MenuButton>
            <div id="logo">
                <img alt="" src={logo}></img>
            </div>
            <nav>
                <Tabs
                    id='tab-bar'
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    aria-label="nav-tabs">
                <Tab className="tab" sx={{color: theme.palette.primary.dark}} value="recipeAndBooks" label="Recipe & Books"/>
                <Tab className="tab" sx={{color: theme.palette.primary.dark}} value="addRecipe" label="Add Recipe"/>
                <Tab className="tab" sx={{color: theme.palette.primary.dark}} value="familyCookBooks" label="Family Cookbooks"/>
                <Tab className="tab" sx={{color: theme.palette.primary.dark}} value="randomRecipe" label="Random Recipes"/>
                </Tabs>
            </nav>
        </header>
    )
}

export default NavBar;