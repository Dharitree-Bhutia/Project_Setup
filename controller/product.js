const Product = require("../model/product")

exports.createProduct = async (req, res) => {
    try {
        const data = req.body
        const newProduct = new Product(data);
        const response = await newProduct.save();
        console.log("data saved");
        res.status(200).json(response)

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
exports.getProduct = async (req, res) => {
    try {
        const data = await Product.find();
        console.log('data Featch');
        res.status(200).json(data)

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

exports.updateProduct = async (req , res)=>{
    try{
        const productId = req.params.id;
        const updateProduct = req.body;

        const response = await Product.findByIdAndUpdate(productId,updateProduct,{
            new:true,
            runValidators:true
        })
        if (!response){
            return res.status(404).json({error:'User not found'});
        }
        console.log('data updated');
        res.status(200).json(response)
        
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
}
exports.deleteProduct = async (req ,res) =>{
    try{
        const productId = req.params.id;
        const response = await Product.findByIdAndDelete(productId)

        if(!response){
            return res.status(404).json({error:"User not found"})
        }

        console.log("data deleted");
        res.status(200).json({massege:'Data successefully deleted'})
        
    }catch(err){
        console.log(err);

        res.status(500).json({error:"Internal Server error"})
        
    }
}