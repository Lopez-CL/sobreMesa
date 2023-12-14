import React, { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import FormGroup  from "@mui/material/FormGroup";
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from "@mui/material/styles";
const PrepList = (props) => {
    const [prepListNums, setPrepListNums] = useState([]);
    const {ingredients, prepHeading, setPrepHeading} = props
    const handleItemNum = (itemNum) =>{
        setPrepListNums(currentPrepListNums =>{
            const updatedPrepList = !currentPrepListNums.includes(itemNum)?[...currentPrepListNums, itemNum]:currentPrepListNums.filter(num =>num !== itemNum)
            setPrepHeading(updatedPrepList.length === ingredients.length);
            return updatedPrepList;
    })
    }   
    return (
        <FormGroup>
            {ingredients.map((item,index)=>(
                <FormControlLabel className={prepListNums.includes(index)?'completed-list-item':''} key={index}
                control={<Checkbox
                checked={prepListNums.includes(index)}
                onChange={ e => handleItemNum(index)}
                />} 
                label={item}/>
            ))}
        </FormGroup>
    );
}
export default PrepList;