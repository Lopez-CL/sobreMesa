
const Recipe = require('../models/recipe.model');
const createRecipe = (req, res) => {
    console.log(req.body)
    const { name, cuisineType, foodOccasion, hours, minutes, ingredients, instructions, imageOfDish } = req.body;
    Recipe.create({
        name,
        foodOccasion,
        cuisineType: JSON.parse(cuisineType),
        hours: Number(hours),
        minutes: Number(minutes),
        ingredients: JSON.parse(ingredients),
        instructions: JSON.parse(instructions),
        imageOfDish: req.file.buffer})
        .then(newRecipe => res.json(newRecipe))
        .catch(err =>{
            console.log(err)
            res.status(400).json(err)
        })
}

const getAllRecipes = (req, res) => {
    Recipe.find()
        .then(recipes => res.json(recipes))
        .catch(err =>{
            console.log(err)
            res.status(400).json(err)
        })
}
const getRecipeById = (req, res) => {
    Recipe.findOne({_id: req.params._id})
        .then(recipe => res.json(recipe))
        .catch(err =>{
            console.log(err)
            res.status(400).json(err)
        })
}

const updateRecipe = (req, res) => {
    Recipe.findOneAndUpdate({_id: req.params._id}, req.body, {
        runValidators: true,
        new: true,
    })
        .then(updatedRecipe =>{
            res.json(updatedRecipe)
        })
        .catch(err =>{
            console.log(err)
            res.status(400).json(err)
        })
}
const deleteRecipe = (req, res) => {
    Recipe.deleteOne({_id: req.params._id})
        .then(deletedRecipe => res.json(deletedRecipe))
        .catch(err =>{
            console.log(err)
            res.status(400).json(err)
        })
}

module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe,
}