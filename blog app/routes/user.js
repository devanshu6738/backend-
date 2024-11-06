const express=require("express")
const router=express.Router();
const userschema=require("../models/user");

router.get('/',(req,res)=>{
    res.send("hello")
})

router.post('/',async(req,res)=>{
   try {
    const data=req.body;
    const NewUser=new userschema(data);
    const response=await NewUser.save();
    console.log(response);
    res.status(200).json(response);
   } catch (error) {
    console.log(error);
    res.status(500).json({msg:"Internal server error"})
   }
})
module.exports=router;