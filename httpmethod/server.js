const express=require("express")
const app=express();

app.get('/',(req,res)=>{
    res.status(200).end("get method")
})
app.post('/',(req,res)=>{
    res.end("post method")
})

app.put('/',(req,res)=>{
    res.end("put method")
})

app.listen(3000,()=>{
    console.log("server is running at port 3000")
})