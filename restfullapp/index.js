const express=require("express");
const app=express();

app.get('/Blog',(req,res)=>{
    // res.send(req.query)
    console.log(res.header);
    console.log(req.header);
    res.send(res.header)
})
app.post('/Blog',(req,res)=>{
    
})
app.put('/Blog/:id',(req,res)=>{
    res.send(req.params);
   
})
app.delete('/Blog',(req,res)=>{
    
})

app.listen(3000,()=>{
    console.log("server at running at port 3000")
})