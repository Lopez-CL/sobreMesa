import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipeView = () => {
    const [recipe, setRecipe] = useState({})
    const {_id} = useParams();
    const getMimeType = (base64Data) => { // decodes a portion of the base64 encoded string into bytes and determine the file type
        const byte = atob(base64Data.substring(0, 4)).charCodeAt(0);
        console.log(!base64Data)
        switch (byte) {
            case 0xff:
                return 'image/jpeg';
            case 0x89:
                return 'image/png';
            default:
                return 'error!';
        }
    }
    useEffect (() =>{
        axios.get(`http://localhost:8000/api/getRecipe/${_id}`)
            .then(res =>{
                console.log(res.data)
                setRecipe(res.data)
            })
            .catch( err=>{
                console.log(err)
                console.log('Error caught on the front-end')
            })
    },[])
    return (
        <>
        {/* data: prefix is crucial. Without it, the browser will not recognize the string as a valid Data URL, and it will not display the image. */}
        {recipe.imageOfDish && < img src={`data:${getMimeType(recipe.imageOfDish)};base64,${recipe.imageOfDish}`}/>} 
        </>
    )
}

export default RecipeView;