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

module.exports=createAcc;