import mongoose from "mongoose";

//Create table into DB
const productSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true},
        slug: {type: String, required: true, unique: true},
        desc: {type: String, required: true},
        category: {type: String, required: true},
        image:{type: String, required: true},
        image1:{type: String},
        image2:{type: String},
        image3:{type: String},
        countInStock: {type: Number, required: true},
        price: {type: Number, required: true},
        // rating: {type: Number, required: true},
        // numReviews: {type: Number, required: true},
        // reviews: [reviewSchema],
    },
    {
        timestamps:true, //add date
    }
);

const Product = mongoose.model('Product', productSchema); //name for table
export default Product;