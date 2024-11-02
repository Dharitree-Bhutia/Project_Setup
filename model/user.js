const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum: ['manager', 'team ledaer', 'employee'],
        required:true
    },
    mobile:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        reuired:true,
        unique: true
    },
    address:{
        type:String,
    },
    salary:{
        type:Number,
        required:true,
    },
    username:{
        type:String,
        unique:true,
        trim:true,
        required:true,
    },
    password:{
       type:String,
       required:true,
    }
});

//create user model
const User = mongoose.model('User', userSchema);
module.exports= User;