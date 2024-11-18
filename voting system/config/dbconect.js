const mongoose=require("mongoose")
const url="mongodb://localhost:27017/votingsystem"
mongoose.connect(url);

const db=mongoose.connection;

db.on("connected",()=>{
    console.log("mongodb server is connected")
})
db.on("disconnected",()=>{
    console.log("mongodb server is disconnected")
})
db.on("error",(err)=>{
    console.log(err)
})

module.exports=db;