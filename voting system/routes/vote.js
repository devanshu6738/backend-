const express=require("express");
const {createAcc,createCand, result, loginVote, Candvote}=require("../controller/voting")
const router=express.Router();
const path = require('path');

router.post('/user',createAcc);
router.get('/result',result)
router.post('/cand',createCand)
router.get('/login',loginVote)
router.get('/:Candidate',Candvote)
module.exports=router
