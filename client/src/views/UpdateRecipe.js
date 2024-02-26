import {React, useEffect, useState} from 'react';
import axios from 'axios';
import  {useParams} from 'react-router-dom';
import RecipeForm from '../components/RecipeForm';
const UpdateRecipe = ()=>{
    const [dataToShare, setDataToShare] = useState(false);
    const {_id} = useParams();
    // const {recipe,setRecipe} = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getRecipe/${_id}`)
        .then( res =>{
            setDataToShare(res.data)
        })
        .catch(err => {
            console.log(err);
            console.log("Error caught on the front-end for getting recipe to update!");
        })
    },[]);
    const updateRecipeHandler = (recipeToUpdate =>{
        axios.put(`http://localhost:8000/api/editRecipe/${_id}`, recipeToUpdate)
        .then(res =>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err);
            console.log("error caught on the front-end for updating recipe!")
        })
    })
    return(
        <>
            {dataToShare && <RecipeForm recipeSubmissionHandler = {updateRecipeHandler} dataToShare = {dataToShare}/> }
        </>

    )};
    
    export default UpdateRecipe;