const { error } = require("console");
const express=require("express");
const app=express();


function fun(req,res,next){
    console.log("hey")
    console.log(req.body)
    next();
}
function fun2(req,res,next){
    console.log("hey2")
    next();
}

app.use(express.json());
// app.use(express.urlencoded())

app.use(fun);    //middleware
app.use(fun2);

app.get('/',(req,res)=>{
    res.status(200).json({msg:"hey i am a programmer"})
})

app.use((error,req,res,next)=>{
console.log(error.stack);
res.status(500).send("something wrong")
})

app.post('/blog',(req,res)=>{
    console.log(req.body)
    res.status(200).json({msg:"post method"})

})

app.listen(3000,(req,res)=>{
    console.log("server is running at port 3000")
})