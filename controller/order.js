const Order = require("../model/order")
const { param } = require("../router/userRouter")

exports.createdOrder = async (req, res) => {
    try {
        const data = req.body
        const newOrder = new Order(data)
        const response = await newOrder.save()
        console.log("data saved");
        res.status(200).json(response)

    }

    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.getOrder = async (req, res) => {

    try {
        const data = await Order.find();
        console.log('data Featch');
        res.status(200).json(data)

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

exports.getOrderByStatus = async (req,res) =>{
    const statusType = req.params.statusType;
    try{
        if(statusType == "pending" || statusType== "shipped" || statusType == "delivered" || statusType == "cancelled"){
            const response = await Order.find({status: statusType})
            console.log("response Featch")
            res.status(200).json(response)
        }
        else{
            res.status(404).json({error:"Invalide Response"})
        }

    }catch(err){
        console.log(err)
        res.status(500).json({error:"Internal server error"})
    }
}

exports.updateOrder = async (req,res) =>{
    try{
        const orderId = req.params.id;
        const updateOrder = req.body;

        const response = await Order.findByIdAndUpdate(orderId,updateOrder,{
            new:true,
            runValidators:true
        })

        if(!response){
           return res.status(404).json({error:"Order  not found"})
        }
        console.log("data updated")
        res.status(200).json(response)


    }catch(err){
        console.log(err)
        res.status(500).json({error:"Internal server error"})
    }
}


exports.deleteOrder = async (req,res) =>{
    try{
        const orderId = req.param.id
        const response = await Order.findByIdAndDelete(orderId)
        if(!response){
            return res.status(404).json({error:"order not found"})
        }
       
        console.log("data deleted");
        res.status(200).json({massege:'Data successefully deleted'})

    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"})
        
    }
}
