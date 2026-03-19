const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const captainSchema = new mongoose.Schema({
    fullname: {   // ✅ FIX
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'firstname should be 3 characters long'],
        },
        lastname: {
            type: String,
            minlength: [3, 'lastname should be 3 characters long'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },
    password: {
        type: String,
        minlength: [6, 'password should be 6 characters long'],
        required: true,
        select: false,
    },
    socketId: String,
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'Color must be 3 letters'],
        },
        plate: {   // ✅ FIX
            type: String,
            required: true,
            minlength: [3, 'plate number must be 3 letters long'],
        },
        capacity: {
            type: Number,
            required: true,
        },
        vehicleType: {   // ✅ FIX
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto'],
        }
    }
});

captainSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:"3d"})
    return token;
}

captainSchema.statics.hashpassword = async function(password){
    return await bcrypt.hash(password, 10);
}

captainSchema.methods.comparepassword=async function(password){
    return await bcrypt.compare(password,this.password)
}



const captainModal=mongoose.model('captain',captainSchema)

module.exports=captainModal;