const express=require("express");
const app=express();
const path=require("path")
app.get('/',(req,res)=>{
    res.json({msg:"get request"});
})

app.get('/user',(req,res)=>{
    // res.sendFile(__dirname+"/index.html")
    res.sendFile(path.join(__dirname,"index.html"))
})



app.listen(3000,()=>{
    console.log("server is running at port number 3000")
})