import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import RecipeForm from '../components/RecipeForm'
const RecipeMain = () => {
    const dataToShare = false
    const navigate = useNavigate();
    const createRecipe = formData =>{axios.post('http://localhost:8000/api/createRecipe',
            formData, {headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log(res.data)
            console.log('success! on the front end')
            navigate('/recipeandbooks')
        }).catch(err =>{
            console.log(err.response.data)
        })
    }
    return (
        <>
        <RecipeForm recipeSubmissionHandler = {createRecipe} dataToShare = {dataToShare} ></RecipeForm>
        </>
    )
}

export default RecipeMain