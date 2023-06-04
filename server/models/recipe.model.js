const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema ({
    dishName:{
        type: String,
        required: [true, '*Give your recipe a name!*'],
        minlength: [2,'*The name must be two characters or longer*']
    },
    cusineType:{
        type: [String],
        required: [true, '*Instructions required!*'],
        enum: ['']
    },
    foodOccasion:{
        type: [String],
        required: [true, '*Indicate the best occassions for this dish!*'],
    },
    cookTime:{
        hours:{
            type: Number,
        },
        minutes:{
            type: Number,
            required: [true,"*Must indicate minutes*"]
        },
    },
    ingredients:{
        type: [String],
        required: [true, '*Cusine type entry is required!*'],
    },
    instructions:{
        type: [String],
        required: [true, '*Instructions required!*'],
        minItems: {value: 3, message: '*Give us more than three steps!*'},
    },
    imageOfDish:{
        data: {
            type: Buffer,
            required: [true, '*Image required. Help us visualize that end goal*'],
        },
        contentType: {
            type: String,
            required: [true, '*Please submit an accepted file type*'],
            enum: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif']
        },
    },
    createdAt: Date,
    updatedAt: Date,
},
{timestamps: true});

module.exports = mongoose.model('Recipe', RecipeSchema)