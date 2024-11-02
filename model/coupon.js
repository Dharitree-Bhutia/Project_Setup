const mongoose = require('mongoose')

const couponSchema = new mongoose .Schema({
   code:{
    type :String,
    required:true,
    unique:true
   },
   discountType:{
    type:String,
    enum:['percentage','fixed']
   },
   discountValue:{
    type:Number,
   },
   expirationDate:{
    type:Date
   },
   usageLimit:{
    type:Number
   },
   usedCount:{
    type:Number,
    default:0
   },
   isActive:{
    type:Boolean,
    default:true
   }

})

const Coupon = mongoose.model('Coupon', couponSchema)

module.exports = Coupon
