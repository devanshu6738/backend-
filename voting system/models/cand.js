const mongoose=require("mongoose")

const candSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    proof:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    party:{
        type:String,
        required:true,
    },
    vote:{
        type:Number,
        required:true,
    }
})
const candmodel=mongoose.model('candData',candSchema);
module.exports=candmodel;