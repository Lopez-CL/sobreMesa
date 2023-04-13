const RecipeController = require("../controllers/recipe.controller");

module.exports = app => {
    app.post('/api/createRecipe/', RecipeController.createRecipe);
    app.get('/api/getRecipes/', RecipeController.getAllRecipes);
    app.get('/api/getRecipe/:id_', RecipeController.getRecipeById);
    app.put('/api/editRecipe/:id_', RecipeController.updateRecipe);
    app.delete('/api/delete/:id_', RecipeController.deleteRecipe);
}