const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    images:[{
        url:String,
        thumbnail:String
    }],
    createdAt:{
        type:Date,
        default:Date.now 
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
});
const Product = mongoose.model('Product',productSchema);
module.exports = Product;