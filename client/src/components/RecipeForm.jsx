import {React, useState} from "react";
import { FormControl } from "@mui/material";
import Input from "@mui/material";
import InputLabel from "@mui/material";

const RecipeForm = () =>{
    const [name, setName] = useState('')
    const [cuisineType, setCuisineType] = useState('')
    const [foodOccasion, setFoodOccasion] = useState([])
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [instructions, setInstructions] = useState([])
    const [imageFile, setImageFile] = useState(null)
    return(
        <>
        <FormControl>
            
        </FormControl>
        </>
    )
}
export default RecipeForm;