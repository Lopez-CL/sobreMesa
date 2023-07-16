import { React, useState } from "react";
import Box  from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
// import { FormControl } from "@mui/material";
// import Input from "@mui/material";
// import InputLabel from "@mui/material";

const RecipeForm = () => {
    const [name, setName] = useState('')
    const [cuisineType, setCuisineType] = useState('')
    const [foodOccasion, setFoodOccasion] = useState([])
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [instructions, setInstructions] = useState([])
    const [imageFile, setImageFile] = useState(null)
    // const handleImageChange = (event) => {
    //     const file = event.target.files[0];
    //     setImageFile(file);
    // };
    const submitHandler = e => {
        e.preventDefault();
        console.log('form data submitted')
    }
    const HandleNameChange = e =>{
        console.log(name)
    }
    return (
        <>
        <form id="form-box">
            <Typography variant="h2" sx={{textAlign: 'center'}} gutterBottom>Add a Recipe</Typography>
            <div className="form-field">
                <TextField
                sx={{width: '50%'}}
                required
                id="outline-required"
                label="Name your Dish"
                defaultValue= "What's the dish called?"
                onChange={e=> setName(e.target.value) }
                >
                </TextField>
            </div>
        </form>
        </>
    )
}
export default RecipeForm;