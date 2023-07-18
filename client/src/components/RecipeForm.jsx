import { React, useState } from "react";
import Box  from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
const occasions = ['Breakfast', 'Lunch', "Brunch", "Afternoon Snack", "Appetizer", "Dinner", "Dessert", "Bedtime Snack"]
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
    const HandleTest = str =>{
        setFoodOccasion(str)
        console.log(str)
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
                // onChange={e=> HandleTest(e.target.value) }
                >
                </TextField>
            </div>
            <div className="form-field">
                    <TextField
                    sx={{width: '50%'}}
                    required
                    select
                    label="What's the food occasion?"
                    defaultValue=""
                    onChange={e=> HandleTest(e.target.value) }
                    >
                        {occasions.map((occasion,idx)=> (
                            <MenuItem key={idx} value={occasion}>
                                {occasion}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
        </form>
        </>
    )
}
export default RecipeForm;