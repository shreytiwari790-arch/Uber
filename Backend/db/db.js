const mongoose=require('mongoose')

async function connectDB(){
    try{
        await mongoose.connect(process.env.DB_CONNECT)
        console.log("DataBase Connected")
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports=connectDB;