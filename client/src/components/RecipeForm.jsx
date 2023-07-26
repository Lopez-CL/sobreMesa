import { React, useState } from "react";
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
const occasions = ['Breakfast', 'Lunch', "Brunch", "Afternoon Snack", "Appetizer", "Dinner", "Dessert", "Bedtime Snack"]
const cuisines = ['Latin', 'Indian', "American Gastro Pub", "Italian", "Hawaiian", "French", "Nigerian", "General Dessert, Georgian, Southern Comfort Food "]
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
        horizontal: 'right',
    },
};
const RecipeForm = () => {
    const [name, setName] = useState('')
    const [cuisineType, setCuisineType] = useState([])
    const [foodOccasion, setFoodOccasion] = useState('')
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [instructions, setInstructions] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [imageFile, setImageFile] = useState(null)
    const theme = useTheme();
    // const handleImageChange = (event) => {
    //     const file = event.target.files[0];
    //     setImageFile(file);
    // };
    const getStyles = (cuisine, cuisineType, theme) => {
        return {
            fontWeight:
                cuisineType.indexOf(cuisine) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }
    const handleCuisineChange = (event) => {
        const {
            target: { value },
        } = event;
        setCuisineType(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const submitHandler = e => {
        e.preventDefault();
        console.log('form data submitted')
    }
    const HandleIngrd = str => {
        let makeArray = str.split(',')
        console.log(makeArray)
        setFoodOccasion(makeArray)
    }
    const HandleInstr = str => {
        let makeArray = str.split(',')
        console.log(makeArray)
        setFoodOccasion(makeArray)
    }
    const handleImageChange = event =>{
        const file = event.target.files[0]
        setImageFile(file)
    }
    return (
        <>
            <form id="form-box">
                <Typography variant="h2" sx={{ textAlign: 'center' }} gutterBottom>Add a Recipe</Typography>
                <div className="form-field">
                    <TextField
                        sx={{ width: '50%' }}
                        required
                        id="outline-required"
                        label="Name your Dish"
                        defaultValue="What's the dish called?"
                    // onChange={e=> HandleTest(e.target.value) }
                    />
                </div>
                <div className="form-field">
                    <FormControl required sx={{ width: '50%' }}>
                        <InputLabel id="occasion-select-level">When's the best time to have this meal?</InputLabel>
                        <Select
                            labelId="occasion-select-level"
                            id="occasion-select-level"
                            label="When's the best time to have this meal?"
                            defaultValue=''
                            MenuProps={{
                                anchorOrigin: {
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                },
                                transformOrigin: {
                                    vertical: 'top',
                                    horizontal: 'left',
                                },
                            }}
                        >
                            {occasions.map((occasion, idx) => (
                            <MenuItem key={idx} value={occasion}>
                                {occasion}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </div>
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
                <div className="form-field">
                    <TextField
                        required
                        helperText='Input hours'
                        id='outlined-number'
                        label='Hours'
                        type="number"
                    />
                    <Typography variant="h3" sx={{ fontWeight: 'bold', mx: 1 }}> : </Typography>
                    <TextField
                        required
                        id='outlined-number'
                        label='Minutes'
                        type="number"
                        helperText='Input minutes'
                    />
                </div>
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
                        onChange={e => HandleIngrd(e.target.value)}
                    />
                </div>
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
                        onChange={e => HandleInstr(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <input
                    required
                    hidden
                    accept="image/*"
                    id="button-file"
                    type="file"
                    onChange={handleImageChange}
                    />
                    <label htmlFor="button-file">
                        <Button sx={[{backgroundColor: theme.palette.primary.main, color:'white'}]} variant="contained" component='span'>Upload Image *</Button>
                    </label>
                </div>
            </form>
        </>
    )
}
export default RecipeForm;