import {React, useEffect, useState} from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import MenuButton from "./MenuButton";
import logo from '../assets/logo.png'
import {Tabs} from '@mui/material'
import {Tab} from '@mui/material'
const NavBar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [value, setValue] = useState('recipeandbooks');
    const currentValue = location.pathname.substring(1)
    useEffect(()=>{
        let title = "";
        if(location.pathname.startsWith('/view/recipe/')){
            title = "Recipe View"
        }else{
        switch (location.pathname) {
            case('/recipeandBooks'):
            title = 'Recipe and Books';
            break;
            case('/addrecipe'):
            title = 'Add your Recipe';
            break;
            case('/familycookbooks'):
            title = 'Family Cookbooks';
            break;
            case('/randomrecipe'):
            title = 'Random Recipe';
            break;
            default:
                title = "Sobre Mesa"
        }
        }
        document.title = title;
    },[location.pathname])
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
                    value={currentValue}
                    onChange={handleChange}
                    indicatorColor="primary"
                    aria-label="nav-tabs">
                <Tab className="tab" sx={{color: theme.palette.primary.dark}} value="recipeandBooks" label="Recipe & Books"/>
                <Tab className="tab" sx={{color: theme.palette.primary.dark}} value="addrecipe" label="Add Recipe"/>
                <Tab className="tab" sx={{color: theme.palette.primary.dark}} value="familycookbooks" label="Family Cookbooks"/>
                <Tab className="tab" sx={{color: theme.palette.primary.dark}} value="randomrecipe" label="Random Recipes"/>
                </Tabs>
            </nav>
        </header>
    )
}

export default NavBar;