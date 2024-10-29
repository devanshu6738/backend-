const mongoose=require("mongoose")
const URL="mongodb://localhost:27017/schoolstudent";

mongoose.connect(URL)

const db=mongoose.connection;

db.on("connected",()=>{
    console.log("mongoDb server is connected")
})
db.on("disonnected",()=>{
    console.log("mongoDb server is disconnected")
})
db.on("error",(error)=>{
    console.log(error);
})

module.exports=db;

