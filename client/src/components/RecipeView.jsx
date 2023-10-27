import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import { Icon, Typography, styled } from '@mui/material'
import PrepList from "./PrepList";
import InstrList from "./InstList";
const RecipeView = () => {
    const [recipe, setRecipe] = useState({})
    // const [ingredients, setIngredients] = useState([])
    const theme = useTheme()
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
        <div className={ recipe.imageOfDish && `recipe-view-card`}>
            {recipe.imageOfDish && 
            <div className="recipe-view-header">
                {/* data: prefix is crucial. Without it, the browser will not recognize the string as a valid Data URL, and it will not display the image. */}
                <img src={`data:${getMimeType(recipe.imageOfDish)};base64,${recipe.imageOfDish}`}/>
                <div>
                    <Typography sx={{fontSize:'h2.fontSize', ml:4}} variant="h1">{recipe.name}</Typography>
                    <em><Typography sx={{ fontSize: 'h5.fontSize',ml:4}} variant="h2">Best at {`${recipe.foodOccasion}`}, {`${recipe.cuisineType.join(', ')}`}, takes {`${recipe.hours}hrs and ${recipe.minutes}min`} to cook</Typography></em>
                </div>
            </div>}
            <Typography sx={{fontSize:'h6.fontSize', textAlign:'center'}}variant="body1">{recipe.description}</Typography>
            <div id="ingrd-intsr">
                    <div className="recipe-view-lists">
                        <Typography sx={{fontSize: 'h4.fontSize'}} variant='h3'>Ingredients</Typography>
                        <PrepList ingredients = {recipe.ingredients || []}/>
                    </div>
                    <div className="recipe-view-lists">
                        
                        <Typography sx={{fontSize: 'h4.fontSize'}} variant="h3">Instructions</Typography>
                        <InstrList instructions = {recipe.instructions || []}></InstrList>
                    </div>
                    
            </div>
        </div>
        <div>

        </div>
        </>
    )
}

export default RecipeView;