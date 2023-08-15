import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';
//occasions and cuisines hold data options for my selector fields
const occasions = ['Breakfast', 'Lunch', "Brunch", "Afternoon Snack", "Appetizer", "Dinner", "Dessert", "Bedtime Snack"]
const cuisines = ['Latin', 'Indian', "American Gastro Pub", "Italian", "Hawaiian", "French", "Nigerian", "General Dessert", "Georgian", "Southern Comfort Food"]
// Following 3 variables help style and format my multiselect input
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 200,
        },
    },
    anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
    },
    transformOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
    },
};
const RecipeForm = () => {
    // All setters for form data
    const [name, setName] = useState('')
    const [cuisineType, setCuisineType] = useState([])
    const [foodOccasion, setFoodOccasion] = useState('')
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState([])
    const [imageOfDish, setImageOfDish] = useState(null)
    const [imageName, setImageName] = useState(null)
    const navigate = useNavigate()
    // Imports app color theme
    const theme = useTheme();
    // Controls font styles of items selected for multiselect element
    const getStyles = (cuisine, cuisineType, theme) => {
        return {
            fontWeight:
                cuisineType.indexOf(cuisine) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }
    // Builds list of cuisine type data
    const handleCuisineChange = (event) => {
        const {
            target: { value } } = event;
        setCuisineType(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    // File data must be handled differently compared to strings and arrays
    const handleImageChange = event =>{
        const file = event.target.files[0]
        setImageOfDish(file)
        setImageName(event.target.files[0].name)
    }
    // handles full form submission event
    const submitHandler = e => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name', name);
        formData.append('foodOccasion', foodOccasion);
        formData.append('cuisineType', JSON.stringify(cuisineType));
        formData.append('hours', hours);
        formData.append('minutes', minutes);
        formData.append('ingredients', JSON.stringify(ingredients));
        formData.append('instructions', JSON.stringify(instructions));
        formData.append('imageOfDish', imageOfDish);
        axios.post('http://localhost:8000/api/createRecipe',
            formData, {headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log(res.data)
            console.log('success! on the front end')
            navigate('/recipeandbooks')
        }).catch(err =>{
            console.log(err.response.data)
        })

    }
    return (
        <>
            <form id="form-box" onSubmit={submitHandler}>
                {/* DISH NAME */}
                <Typography variant="h2" sx={{ textAlign: 'center' }} gutterBottom>Add a Recipe</Typography>
                <div className="form-field">
                    <TextField
                        sx={{ width: '50%' }}
                        required
                        id="outline-required"
                        label="Name of Dish"
                        defaultValue="What's the dish called?"
                    onChange={e => setName(e.target.value) }
                    />
                </div>
                {/* OCCASION FOR MEAL */}
                <div className="form-field">
                    <FormControl required sx={{ width: '50%' }}>
                        <InputLabel id="occasion-select-level">Meal occasion to eat dish</InputLabel>
                        <Select
                            labelId="occasion-select-level"
                            id="occasion-select-level"
                            label="Meal occasion to eat dish"
                            defaultValue=''
                            MenuProps={{
                                anchorOrigin: {
                                    vertical: 'top',
                                    horizontal: 'right',
                                },
                                transformOrigin: {
                                    vertical: 'top',
                                    horizontal: 'left',
                                },
                            }}
                            onChange={e => setFoodOccasion(e.target.value)}
                        >
                            {occasions.map((occasion, idx) => (
                            <MenuItem key={idx} value={occasion}>
                                {occasion}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </div>
                {/* CUISINE TYPE(S) */}
                <div className="form-field">
                    <FormControl required sx={{ width: '50%' }}>
                        <InputLabel id="demo-multiple-chip-label">What Type of Cuisine</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            value={cuisineType}
                            input={<OutlinedInput id="select-multiple-chip" label="What Type of Cuisine" />}
                            onChange={handleCuisineChange}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                        >
                            {cuisines.map((cuisine) => (
                                <MenuItem
                                    key={cuisine}
                                    value={cuisine}
                                    style={getStyles(cuisine, cuisineType, theme)}
                                >
                                    {cuisine}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                {/* COOKING TIME */}
                <div className="form-field time-input">
                    <TextField
                    className="time-input"
                        required
                        helperText='Input hours'
                        id='outlined-number'
                        label='Hours'
                        type="number"
                        inputProps={{min: '0'}}
                        onChange={e => setHours(e.target.value)}
                    />
                    <Typography variant="h3" sx={{ fontWeight: 'bold', mx: 1 }}> : </Typography>
                    <TextField
                        className="time-input"
                        required
                        id='outlined-number'
                        label='Minutes'
                        type="number"
                        helperText='Input minutes'
                        inputProps={{min: '0'}}
                        onChange={e => setMinutes(e.target.value) }
                    />
                </div>
                {/* INGREDIENTS */}
                <div className="form-field">
                    <TextField
                        sx={{ width: '50%' }}
                        multiline
                        required
                        id="outlined-multiline-flexible"
                        label='Ingredients'
                        placeholder="What goes into it? Separate instructions by commas"
                        helperText='Separate ingredients by commas'
                        maxRows={6}
                        onChange={e => setIngredients(e.target.value.split(','))}
                    />
                </div>
                {/* INSTRUCTIONS */}
                <div className="form-field">
                    <TextField
                        sx={{ width: '50%' }}
                        multiline
                        required
                        id="outlined-multiline-flexible"
                        label='Instructions'
                        placeholder="How do you make it? Separate instructions by commas"
                        helperText='Separate instructions by commas'
                        maxRows={6}
                        onChange={e => setInstructions(e.target.value.split(','))}
                    />
                </div>
                {/* IMAGE OF DISH */}
                <div className="form-field">
                    {/* Material UI doesn't have a proper file input component, so attempting a work-around. Input creates the form action, the label associates button action with input. Button component is the UI piece */}
                    <input
                    required
                    hidden
                    accept="image/*"
                    id="button-file"
                    type="file"
                    onChange={handleImageChange}
                    />
                    <label className="photo" htmlFor="button-file">
                        <Button role="button" sx={[{backgroundColor: theme.palette.primary.main, color:'white', width:'100%'}]} variant="contained" component='span'> {<CameraAltTwoToneIcon sx={{pr:1, fontSize: '2.5rem'}} />}{<Typography sx={{fontSize: '1.2rem'}}variant="button">Upload Image *</Typography>}</Button>
                        {
                    imageOfDish?<Typography className="limit-text" sx={{textAlign:'center', mt:1.5}} variant="body1">
                    {`Added: ${imageName}`}
                    </Typography>:<Typography className="limit-text" sx={{textAlign:'center', mt:1}} variant="body1">
                    Maximum size per file is 5MB
                    </Typography>
                    }
                    </label>
                </div>
                <div className="form-field" >
                    <Button variant="contained" component='button' type='submit'>Submit</Button>
                </div>
            </form>
        </>
    )
}
export default RecipeForm;