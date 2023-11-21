import React, { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import FormGroup  from "@mui/material/FormGroup";
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from "@mui/material/styles";
const PrepList = (props) => {
    const [prepListNums, setPrepListNums] = useState([]);
    const {ingredients} = props
    const handleItemNum = (itemNum) =>{
        setPrepListNums(currentPrepListNums =>{
            if(!currentPrepListNums.includes(itemNum)){
                return [...currentPrepListNums, itemNum]
            }else{
                return currentPrepListNums.filter(num =>num !== itemNum)
            }
    })
    /*
    write a form that checks a list for the key numbers.
    if the list doesn't have a list add it, if it does, then remove it
    should be an onclick event
    }*/
    console.log(ingredients)
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