const express=require("express")
const app=express();
const mongoose=require("mongoose");
const url="mongodb://localhost:27017/Mydata";

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

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    }
})
const userModel=mongoose.model("user",userSchema)

async function createUser(){
    // let user=await userModel.create({
    //     name:"Devanshu",
    //     password:"devanshu",
    //     email:"devanshu9167@gmail.com",
    //     phone:"7354476645",
    // })
    // console.log(user)

    // let user=new userModel({
    //     name:"Devanshu",
    //     password:"devanshu",
    //     email:"devanshu9167@gmail.com",
    //     phone:"7354476645",
    // })
    // await user.save();
    // const user=await userModel.findById('67289f3e1b4002e53100c1a9');
    // console.log(user);
    // console.log(user.name)
    // const user=await userModel.findOne({name:"Devanshu"})
    // console.log(user);
    // const user=await userModel.find({name:"Devanshu"})
    // console.log(user);
    // const user=await userModel.findByIdAndDelete("67289f3e1b4002e53100c1a9");
    // console.log(user);
    const user=await userModel.findByIdAndUpdate("67289f3cf4e9eb177f5ce19d",{name:"Devanshu kumar Gupta"},{new:true})
    console.log(user);
}
createUser();




app.listen(3000,(req,res)=>{
    console.log("server is running at port 3000")
})