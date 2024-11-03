const express=require("express")
const app=express();
const mongoose=require("mongoose");
const url="mongodb://localhost:27017/MydataBase";

mongoose.connect(url);
const db=mongoose.connection;

db.on("connected",()=>{
    console.log("mongodb server is connected")
})
db.on("disconnected",()=>{
    console.log("mongodb server is disconnected")
})
db.on("error",(error)=>{
    console.log(error)
})



app.listen(3000,(req,res)=>{
    console.log("server is running at port 3000")
})