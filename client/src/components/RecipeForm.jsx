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
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [instructions, setInstructions] = useState([])
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
    // const HandleTest = str => {
    //     setFoodOccasion(str)
    //     console.log(str)
    // }
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
                    >
                    </TextField>
                </div>
                <div className="form-field">
                    <TextField
                        sx={{ width: '50%' }}
                        required
                        select
                        label="When's the best occasion to have this meal?"
                        defaultValue=""
                        // onChange={e => HandleTest(e.target.value)}
                    >
                        {occasions.map((occasion, idx) => (
                            <MenuItem key={idx} value={occasion}>
                                {occasion}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className="form-field">
                    <FormControl sx={{width: '50%'}}>
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
                        {cuisines.map((cuisine)=>(
                            <MenuItem
                                key={cuisine}
                                value={cuisine}
                                style={getStyles(cuisine,cuisineType, theme)}
                            >
                                {cuisine}
                            </MenuItem>
                        ))}
                    </Select>
                    </FormControl>
                </div>
            </form>
        </>
    )
}
export default RecipeForm;