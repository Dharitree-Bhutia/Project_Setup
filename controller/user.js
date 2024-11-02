const User = require("../model/user")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

exports . login = async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user =await User.findOne({email});
        if(!user){
            return res.status(404).json({error:'User not found'})
        }
        const isMatch =await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(404).json({error:"Password is wrong"})
        }
        const token = jwt.sign({userId:user._id,username:user.username,email:user.email},'test12345',{
            expiresIn:'24h'
        });
        res.status(200).json({message:'Login succesfull',
            token,
            user
        })
    }catch(err){
        console.log(err)
        res.status(500).json({error:"Internal server error"})
    }
}

exports.createUser = async (req, res) => {


    try {
        const data = req.body        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.password, salt)
        const newUser = new User({
            ...data,
            password:hashedPassword,

        });
        const response = await newUser.save()
        console.log('data saved');
        res.status(200).json(response)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });

    }

}

exports.getUser = async (req, res) => {

    try {
        const data = await User.find();
        console.log('data Featch');
        res.status(200).json(data)

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.getUserByWork = async (req, res) => {
    const workType = req.params.workType;
    try {
        if (workType == 'manager' || workType == 'team leader' || workType == 'employee') {
            const response = await User.find({ work: workType });
            console.log('response fetched');
            res.status(200).json(response)

        }

        else {

            res.status(404).json({ error: 'Invalid work Type' })
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = req.body;

        const response = await User.findByIdAndUpdate(userId, updatedUser, {
            new: true,
            runValidators: true
        })

        if (!response) {
            return res.status(404).json({ error: 'User not found' });
        }

        console.log('data updated');
        res.status(200).json(response);


    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const response = await User.findByIdAndUpdate(userId)
        if (!response) {
            return res.status(404).json({ error: "User not Found" });
        }
        console.log("data deleted");
        res.status(200).json({ massege: "Data successefully deleted" })


    } catch (err) {
        console.log(err);

        res.status(500).json({ error: "Internal Server error " })

    }
}



