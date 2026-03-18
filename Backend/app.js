const dotenv=require('dotenv');
dotenv.config();
const express=require('express')
const app=express()
const cors=require('cors')
const connectToDb=require ('./db/db');
const userRouter=require('./router/user.router');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("hi");
})

app.use('/users',userRouter);

module.exports=app;