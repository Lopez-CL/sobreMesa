const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema ({
    dishName:{
        type: String,
        required: [true, '*Give your recipe a name!*'],
        minlength: [2,'*The name must be two characters or longer*']
    },
    instructions:{
        type: [String],
        required: [true, '*Instructions required!*'],
        uniqueItems: true,
        minItems: {value: 3, message: '*Give us more than three steps!*'},
    },
    imageOfDish:{
        data: Buffer,
        contentType: String,
        required: [function (){
            return !(this.imageOfDish && this.imageOfDish.data && this.imageOfDish.contentType);
        }, '*Image required. Help us visualize that end goal*']
    },
    createdAt: Date,
    updatedAt: Date,
},
{timestamps: true});

module.exports = mongoose.model('Recipe', RecipeSchema)