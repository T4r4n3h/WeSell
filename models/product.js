const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
    content: String,
    rating:{ type: Number, min: 0, max: 5, default: 5}
})

const ProductSchema = new mongoose.Schema({
    image: {
        type: String,
    },
    name: {
        type: String,
       
    },
    desc: {
        type: String,
      
    },
    qty: {
        type: Number,

    },
    price: {
        type: Number,
       
    },
    reviews: [reviewSchema],
   
},
{
    timestamps:true
});

module.exports = mongoose.model('products', ProductSchema);
