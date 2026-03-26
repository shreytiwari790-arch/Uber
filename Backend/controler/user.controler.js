const userModel = require('../models/user_model');
const userService = require('../services/user.service')
const { validationResult } = require('express-validator')


module.exports.registerUser = async (req, res, next) => {

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }
    const { fullname, email, password } = req.body;

    const isUserthere=await userModel.findOne({email});
    if(isUserthere){
        return res.status(400).json({message:"User already there"});
    }

    const hashedPassword = await userModel.hashpassword(password);
    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
    });

    const token = user.generateAuthToken();
    res
        .cookie('token', token, {
            httpOnly: true,   // prevents JS access (secure)
            secure: false     // true in production (HTTPS)
        })
        .status(201)
        .json({ user });
}

module.exports.loginUser = async (req, res, next) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select('+password')

    if (!user) {
        return res.status(400).json({ message: 'Invalid Email' })
    }

    const pass = await user.comparepassword(password);

    if (!pass) {
        return res.status(400).json({ message: 'Invalid password' })
    }

    const token = user.generateAuthToken();
    console.log(token)

    res
        .cookie('token', token, {
            httpOnly: true,   // prevents JS access (secure)
            secure: false     // true in production (HTTPS)
        })
        .status(201)
        .json({ user ,token});
}

module.exports.getUserProfile = async (req, res, next) => {
    res.status(201).json({
        message: "Profile fetched successfully",
        user: req.user
    });
};

module.exports.logoutUser=async(req,res,next)=>{
    res.clearCookie('token').status(200).json({
        message:"Logged out successfully"
    });

}