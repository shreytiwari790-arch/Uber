const express=require('express');
const router=express.Router();
const {body}=require("express-validator");
const userControler=require('../controler/user.controler')
const  {authUser}  = require('../middleware/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage("first name must be 3 character long",
    body('password').isLength({min:6}).withMessage('Password must be 6 charcter long')
    ),
],
userControler.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:6}).withMessage("Password may be 6 character long")
],
userControler.loginUser
)

router.get('/profile',authUser,userControler.getUserProfile)

router.get('/logout',authUser,userControler.logoutUser)

module.exports=router;