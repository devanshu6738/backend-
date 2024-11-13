const express=require("express");
const app=express();
const db=require("./db")
const routes=require("./routes/url")
const userurl=require("./model/url")

app.use(express.json());

app.use("/url",routes);

app.get("/:id",async(req,res)=>{
    try {
        const shortId=req.params.id;
        const response=await userurl.findOne({shortId})
        if(response){
            res.redirect(response.redirectUrl);
        }else {
 res.status(404).json({ msg: "Short URL not found" });
    }
 } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Internal Server Error"})
    }
})

app.listen(3000,()=>{
    console.log("server created")
})