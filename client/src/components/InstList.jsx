import React, {useState} from "react";
import Checkbox from '@mui/material/Checkbox';
import FormGroup  from "@mui/material/FormGroup";
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTheme } from "@mui/material/styles";
const InstrList = (props)=>{
    const {instructions,instHeading, setInstHeading} = props
    const [instListNums, setInstListNums] = useState([]);
    const handleItemNum = itemNum =>{
        setInstListNums(currentInstListNums =>{
            // currentInstListNums.length === instructions.length&&setInstHeading(true)
            const updatedInstList = !currentInstListNums.includes(itemNum)?[...currentInstListNums, itemNum]: currentInstListNums.filter(num => num !== itemNum)
            setInstHeading(updatedInstList.length === instructions.length)
            return updatedInstList
        })}
    return(
        <FormGroup>
            {instructions.map((item,index)=>(
                <FormControlLabel className={instListNums.includes(index)?'completed-list-item':''} key={index} 
                    control=
                    {<Checkbox
                    checked={instListNums.includes(index)}
                    onChange={ e => handleItemNum(index)}
                    />} 
                label={item}/>
            ))}
        </FormGroup>
    )
}
export default InstrList;