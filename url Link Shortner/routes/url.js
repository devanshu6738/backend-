const express=require("express");
const router=express.Router();
const {storeUrl}=require("../controller/url")

router.post("/",storeUrl);


module.exports=router;