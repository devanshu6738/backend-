const user=require("../models/voting")
const cand=require("../models/cand")


async function createAcc(req,res) {
    try {
        const {name,phone,proof,password}=req.body
        let data=await user.create({name,phone,proof,password});
        return res.status(200).json({msg:"UserId created Successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500),json({msg:"Internal server error"})
    }
}
async function createCand(req,res) {
    try {
        const {name,phone,proof,party}=req.body
        let data=await cand.create({name,phone,proof,party});
        return res.status(200).json({msg:"Canditate Registered Successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500),json({msg:"Internal server error"})
    }
}
async function result(req,res){
    try {
        const data=await cand.find();
        res.json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Internal Server error"})
    }
}
async function loginVote(req,res){
    const {phone,password}=req.body;
    const data=await user.findOne({phone})
    if(data){
        if(data.password===password){
            return res.redirect(`/vote/result`)
        }else{
            return res.status(500).json({msg:"please enter a true password"})
        }
    }else{
        return res.json({msg:"User not Found"})
    }
}
async function Candvote(req,res){
   try {
    const {Candidate}=req.params
    const data=await cand.findOne({party:Candidate});
    if (!data) {
        return res.status(404).json({ msg: "Candidate not found" });
      }
    data.vote+=1;
    await data.save();
    return res.json({msg:"voted successfully"})
   } catch (error) {
    console.log(error)
    res.status(500).json({msg:"Internal Server error"})
   }
}

module.exports={createAcc,createCand,result,loginVote,Candvote};