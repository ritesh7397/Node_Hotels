const mongoose = require('mongoose');

//Default the menuItem Schema.

const menuItemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        taste: {
            type: String,
            enum: ['sweet', 'spicy', 'sour'],
            required:true,
        },
        is_drink: {
            type: Boolean,
            default: false, // kuch nhi bhejega toh automatic false aaeyga
        },
        ingredients: {
            type: [String],
            default: [],
        },
        num_sales: {
            type: Number,
            default: 0,
        }
    });

 const MenuItem = mongoose.model('MenuItem',menuItemSchema);

 module.exports = MenuItem