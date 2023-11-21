import React, {useState} from "react";
import Checkbox from '@mui/material/Checkbox';
import FormGroup  from "@mui/material/FormGroup";
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from "@mui/material/styles";
const InstrList = (props)=>{
    const {instructions} = props
    const [instListNums, setInstListNums] = useState([]);
    const handleItemNum = itemNum =>{
        setInstListNums(currentInstListNums =>{
            if(!currentInstListNums.includes(itemNum)){
                return [...currentInstListNums, itemNum]
            }
            else{
                return currentInstListNums.filter(num => num !== itemNum)}
        })}
    return(
        <FormGroup>
            {instructions.map((item,index)=>(
                <FormControlLabel className={instListNums.includes(index)?'completed-list-item':''} key={index} 
                    control={<Checkbox
                    checked={instListNums.includes(index)}
                    onChange={ e => handleItemNum(index)}
                />} 
                label={item}/>
            ))}
        </FormGroup>
    )
}
export default InstrList;