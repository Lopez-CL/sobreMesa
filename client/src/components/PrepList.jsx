import React, { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import FormGroup  from "@mui/material/FormGroup";
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from "@mui/material/styles";
const PrepList = (props) => {
    const {ingredients} = props
    console.log(ingredients)
    return (
        <FormGroup>
            {ingredients.map((item,index)=>(
                <FormControlLabel key={index} control={<Checkbox/>} label={item}/>
            ))}
        </FormGroup>
    );
}
export default PrepList;