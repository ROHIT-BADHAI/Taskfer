const express=require('express');

const {loginUser,signupUser}=require('../controller/userController')
const userRouter=express.Router();

// login
userRouter.post('/login',loginUser)


// signUp
userRouter.post('/signup',signupUser)


module.exports=userRouter;