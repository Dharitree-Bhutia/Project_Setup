const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    total: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
    product: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                
            },
            quantity: {
                type: Number,
                require:true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],

    shippingAdress: {
        type: String,
       
    },
    paymentMethod: {
        type: String,
        enum: ['card', 'UPI', 'bank transfer'],
      
    }

});

const Order = mongoose.model('Order', orderSchema)

module.exports = Order