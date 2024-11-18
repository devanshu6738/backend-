const express=require("express");
const createAcc = require("../controller/voting");
const router=express.Router();

router.post('/user',createAcc);

module.exports=router
