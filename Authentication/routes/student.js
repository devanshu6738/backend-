const express=require("express");
const router=express.Router();
const StudentSchema=require("../models/student")

router.get('/',async(req,res)=>{
    try {
        const data=await StudentSchema.find();
        console.log("data fetched");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Internal server error"})
    }
})
router.post("/",async(req,res)=>{
    try {
        const data=req.body;
    const newStudent= new StudentSchema(data);
    const response=await newStudent.save();
    console.log("data saved");
    res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Internal server error"});
    }
})

module.exports=router;