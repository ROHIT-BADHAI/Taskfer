const User=require('../models/userModel')
const dotenv=require('dotenv')  
dotenv.config()
const jwt=require('jsonwebtoken')
const createToken=(_id)=>{
   return  jwt.sign({_id},process.env.Secret,{expiresIn:'7d'} )
}
//login
const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await User.login(email,password)
         //create token
         const token=createToken(user._id);

        res.status(200).json({email,token})
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
    
}




//signup
const signupUser=async(req,res)=>{
    const {email, password}=req.body
    try{
        const user=await User.signup(email,password)
         //create token
         const token=createToken(user._id);

        res.status(200).json({email,token})
    }
    catch(err){
        res.status(400).json({err:err.message})
    }
    
}

module.exports={loginUser,signupUser};