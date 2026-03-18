const express=require('express');
const router=express.Router();
const {body}=require("express-validator");
const userControler=require('../controler/user.controler')

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

module.exports=router;