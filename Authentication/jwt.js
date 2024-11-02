const jwt=require("jsonwebtoken");

const jwtAuthMiddleware=(req,res,next)=>{
    const token=req.headers.authorization.split(' ')[1];
    if(!token) return res.status(400).json({error:"unauthorized"});
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.JWTpayload=decoded;
        next();
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Invalid Token"});
    }
}

// function to generate jwt token
const generateToken=(userdata)=>{
    return jwt.sign(userdata,process.env.JWT_SECRET,{expiresIn:30})
}

module.exports={jwtAuthMiddleware,generateToken};