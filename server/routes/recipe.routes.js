const RecipeController = require("../controllers/recipe.controller");
const multer = require('multer'); //middleware that works with multipart/form-data
const path = require('path') // Node.js module that works with file and directory paths
const upload = multer({
    storage: multer.memoryStorage(), //configuring middleware so that files are stored in memory as buffers (binary data).
    limits: {
        fileSize: 5 * 1024 * 1024, // keep images size below 5MB
    },
    fileFilter: function (req,file,cb){ // checks for accepted filetypes
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype)
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        // console.log(`Mimetype: ${file.mimetype}`);
        // console.log(`File Extension: ${path.extname(file.originalname).toLowerCase()}`);
        if( mimetype && extname){
            return cb(null, true)
        }
        console.log("File failed validation.");
        cb(`Error: File upload only supports the following filetypes: ${filetypes}`)
    }
});
module.exports = app => {
    app.post('/api/createRecipe/', upload.single('imageOfDish'), RecipeController.createRecipe, (error, req, res,next) =>{
        if(error instanceof multer.MulterError){
            // A Multer error occurred when uploading.
            res.status(400).json(error)
        }else if(error){
            console.log("There seems to be a problem an unknown error" )
            // Handle an unknown error.
            res.status(500).json({ error: error.message});
        }
    });
    app.get('/api/getRecipes', RecipeController.getAllRecipes);
    app.get('/api/getRecipe/:_id', RecipeController.getRecipeById);
    app.put('/api/editRecipe/:_id', RecipeController.updateRecipe);
    app.delete('/api/delete/:_id', RecipeController.deleteRecipe);
}