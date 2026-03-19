const jwt = require('jsonwebtoken');
const userModel = require('../models/user_model');
const captainModal=require('../models/captain.modal')

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decode=jwt.verify(token,process.env.JWT_SECRET)
        const user=await userModel.findById(decode._id);
        // console.log(user)
        req.user=user;
        next();
    } catch (error) {
        return res.status(401).json({message:'Unauthorized'})
    }

};

module.exports.authCaptain=async(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({message:'Unauthorized'})
    }
    try{
        const decode=jwt.verify(token,process.env.JWT_SECRET)
        const captain=await captainModal.findById(decode._id)
        req.captain=captain;
        return next();
    }catch(err){
        res.send(err);
    }
}