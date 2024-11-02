const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require("./model/user")
const Product =require('./model/product')
const Order = require('./model/order')
const Coupon = require('./model/coupon')

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const apiRouterm= express.Router()


const userRouter = require('./router/userRouter')
app.use('/api',userRouter);

const productRouter = require('./router/productRouter')
app.use('/api',productRouter)

const orderRouter = require("./router/orderRouter")
app.use('/api',orderRouter)

const couponRouter = require ('./router/couponRouter')
app.use('./api',couponRouter)


app.get('/',function (req, res) {
    res.send('Welcome');
});

const mongoURL = 'mongodb+srv://dharitreekumari6:manager@cluster0.mti88.mongodb.net/';

mongoose.connect(mongoURL)

    .then(() =>
        console.log("connected")

    )
    .catch(err => console.log(err))


app.listen(3001, () => {

    console.log("Server connected in 3001");

})

