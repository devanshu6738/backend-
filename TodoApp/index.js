const express=require("express")
const app=express();
const fs=require("fs");

app.use(express.json())

let todos=[]

app.get('/todos',(req,res)=>{
   try {
    fs.readFile(__dirname+"/todo.json",{encoding:"utf-8"},(err,data)=>{
        return res.status(200).json({todo:JSON.parse(data)})
    })
   
   } catch (error) {
    console.log(error)
    res.status(500).json({msg:"Internal Server error"})
   }
})
app.post('/todos',(req,res)=>{
    try {
        // const title=req.body.title;
        // const description=req.body.description;
        // const {title,description}=req.body;
        todos.push({...req.body,isCompleted:false,id:todos.length+1});
        return res.status(200).json({msg:"Data saved"});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal Server error"})
    }
})

app.get('/',(req,res)=>{
    return res.status(200).json({msg:"Hey i am programmer"})
})


app.delete('/todos/:id',(req,res)=>{
    try {
        todos.splice(Number(req.params.id)-1,1);
        return res.status(200).json({msg:"todo deleted"})
       } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Internal Server error"})
       }
})

app.put('/todos/:id',(req,res)=>{
    try {
        const index=todos.findIndex(todos=>todos.id==req.params.id);
        todos[index]={...todos[index],...req.body};
        console.log(index);
        return res.status(200).json({msg:"todo Updated"})
       } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Internal Server error"})
       }
})
app.listen(3000,()=>{
    console.log("server created")
})