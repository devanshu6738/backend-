const mongoose=require("mongoose")

const urlschema=new mongoose.Schema({
    redirectUrl:{
        type:String,
        required:true
    },
    shortId:{
        type:String,
        required:true,
    }
})

const urlmodel=mongoose.model("urllink",urlschema);
module.exports=urlmodel;