const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema ({
    name:{
        type: String,
        required: [true, '*Give your recipe a name!*'],
        minlength: [2,'*The name must be two characters or longer*']
    },
    description:{
        type: String,
        required: [true, '*Please describe your dish!*'],
        minlength: [15,'*The description must 15 characters or longer*']
    },
    foodOccasion:{
        type: String,
        required: [true, '*Indicate the best occasion(s) for this dish!*'],
    },
    cuisineType:{
        type: [String],
        required: [true, '*Instructions required!*'],
        enum: ['Caribbean', 'Latin', 'Italian', 'Indian', 'Hawaiian', 'French', 'American Gastro Pub', 'Nigerian', 'General Dessert', 'Georgian', 'Southern Comfort Food'],
        minItems: {value:1, message:"*Your dish should belong to at least 1 cuisine!*"}
    },
    hours:{
            type: Number,
        },
    minutes:{
        type: Number,
        required: [true,"*Must indicate minutes*"]
    },
    ingredients:{
        type: [String],
        required: [true, '*Cuisine type entry is required!*'],
    },
    instructions:{
        type: [String],
        required: [true, '*Instructions required!*'],
        minItems: {value: 3, message: '*Give us more than three steps!*'},
    },
    imageOfDish:{
            type: Buffer,
            required: [true, '*Image required. Help us visualize that end goal*'],
        },
        // contentType: {
        //     type: String,
        //     required: [true, '*Please submit an accepted file type*'],
        //     enum: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif']
        // },
    createdAt: Date,
    updatedAt: Date,
},
{timestamps: true});

module.exports = mongoose.model('Recipe', RecipeSchema)