const userModal=require('../models/user_model')

module.exports.createUser=async({
    firstname,lastname,email,password
})=>{
    if(!firstname || !email||!password){
        throw new Error('All feils are required');
    }
    const user=userModal.create({
        fullname:{
            firstname,
            lastname,
        },
        email,
        password
    })
    return user;
}