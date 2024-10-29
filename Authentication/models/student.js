const mongoose=require("mongoose");
const StudentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    }
})

const studentData=mongoose.model('studentcrendtial',StudentSchema);
module.exports=studentData;