import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import { Icon, Typography, styled } from '@mui/material'
const RecipeView = () => {
    const [recipe, setRecipe] = useState({})
    const {_id} = useParams();
    const getMimeType = (base64Data) => { // decodes a portion of the base64 encoded string into bytes and determine the file type
        const byte = atob(base64Data.substring(0, 4)).charCodeAt(0);
        console.log(!base64Data)
        switch (byte) {
            case 0xff:
                return 'image/jpeg';
            case 0x89:
                return 'image/png';
            default:
                return 'error!';
        }
    }
    useEffect (() =>{
        axios.get(`http://localhost:8000/api/getRecipe/${_id}`)
            .then(res =>{
                console.log(res.data)
                setRecipe(res.data)
            })
            .catch( err=>{
                console.log(err)
                console.log('Error caught on the front-end')
            })
    },[])
    return (
        <>
        <div className="recipe-view-card">
            {recipe.imageOfDish && <div className="recipe-view-header">
                {/* data: prefix is crucial. Without it, the browser will not recognize the string as a valid Data URL, and it will not display the image. */}
                <img src={`data:${getMimeType(recipe.imageOfDish)};base64,${recipe.imageOfDish}`}/>
                <div>
                    <Typography sx={{fontSize:'h2.fontSize'}} variant="h1">{recipe.name}</Typography>
                    <Typography>{`Time to cook ${recipe.hours}hrs : ${recipe.minutes}min`} |  Cuisine: {`${recipe.cuisineType.join(', ')}`}</Typography>
                </div>
                
            </div>}
        </div>
        <div>

        </div>
        </>
    )
}

export default RecipeView;