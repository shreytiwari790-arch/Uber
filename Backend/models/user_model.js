const mongoose=require('mongoose')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const userSchema=mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,"First name must be 3 Characters"],
        },
        lastname:{
            type:String,
            minlength:[3,"Last name must be 3 Characters"],
        }
    },
    email:{
        type:String,
        required:true,
        minlength:[5,"Password must be 4 characters long"],
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
    },
})

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:"3d"})
    return token;
 }
userSchema.methods.comparepassword=async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.statics.hashpassword=async function (password) {
    return await bcrypt.hash(password,10);
}

const userModel =mongoose.model('user',userSchema);

module.exports=userModel;