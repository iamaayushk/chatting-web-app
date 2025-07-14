const User= require('../models/User');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');

const registerUser= async(req,res)=>{
    const {name, email, password, pic}= req.body;
    const userExists = await User.findOne({ email });
    if(userExists){
        return res.status(400).json({message:"User Already Exists" });

    }
    const hashedPassword= await bcrypt.hash(password, 10);
    const user = await user.create({
        name,
        email,
        password: hashedPassword,
        pic
    })
    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET,{expiresIn:'1d'});
    res.status(201).json({
        user,
        token
    })
}

const loginUser = async(req,res)=>{
    const{email,password}= req.body;
    const user = await user.findOne({email});
    if(!user){
        return res.status(400).json({message:"User Not Found"});
    }
    const isMatch= await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({message:"Invalid Credentials"});
    }
    const token =jwt.sign({id:user._id}, process.env.JWT_CODE,{expiresIn:'1d'});
    res.status(200).json({message:"Login Successful", user, token});
}

module.exports ={registerUser, loginUser};