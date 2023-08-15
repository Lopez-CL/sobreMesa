import React from "react";
import { useState,useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import {Typography}  from '@mui/material'

const Dashboard = () =>{
    const theme = useTheme();
    const [recipes, setRecipes] = useState([])
    const getMimeType = (base64Data) => {
        // console.log(typeof base64Data, base64Data);
    // Remove the prefix if it exists
        // const prefixMatch = base64Data.match(/^data:(.*?);base64,/);
        // if (prefixMatch) {
        //     base64Data = base64Data.substring(prefixMatch[0].length);
        // }

        // Get the first byte
        const byte = atob(base64Data.substring(0, 4)).charCodeAt(0);
        
        switch (byte) {
            case 0xff:
                return 'image/jpeg'; 
            case 0x89:
                return 'image/png';
            default:
                return 'error!';
        }
    }
    useEffect (  () => {
        axios.get('http://localhost:8000/api/getRecipes')
        .then( res =>{
            console.log(res.data)
            setRecipes(res.data)
        })
        .catch(err =>{
            console.log(err)
            console.log('error on front-end was caught')
        },)
    },[])
    return(
        <>
            {recipes.map((recipe,index) =>(
                <div>
                    <p>{recipe.name}</p>
                    <p>{recipe.foodOccasion}</p>
                    <p>{recipe.cuisineType.map((type,index)=>(
                        <span>{type}</span>
                    ))}</p>
                    <p>{recipe.hours}</p>
                    <p>{recipe.minutes}</p>
                    <p>{recipe.ingredients.map((ingredient,index)=>(
                        <span>{ingredient}</span>
                    ))}</p>
                    <p>{recipe.instructions.map((instruction,index)=>(
                        <span>{instruction}</span>
                    ))}</p>
                    <img src={`data:${getMimeType(recipe.imageOfDish)};base64,${recipe.imageOfDish}`} alt="test"/>
                </div>
            ))}
        </>
    )
}

export default Dashboard;