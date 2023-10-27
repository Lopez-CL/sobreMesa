import React from "react";
import Checkbox from '@mui/material/Checkbox';
import FormGroup  from "@mui/material/FormGroup";
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from "@mui/material/styles";
const InstrList = (props)=>{
    const {instructions} = props
    return(
        <FormGroup>
            {instructions.map((item,index)=>(
                <FormControlLabel key={index} control={<Checkbox/>} label={item}/>
            ))}
        </FormGroup>
    )
}
export default InstrList;