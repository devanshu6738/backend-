const express=require("express")
const app=express();
const db=require("./config/dbconect")
const router=require("./routes/vote")
app.use(express.json());
app.use('/vote',router);


app.listen(3000,()=>{
    console.log("server Created")
})