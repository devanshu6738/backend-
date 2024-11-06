const express=require("express")
const app=express();

app.use(express.json())

let todos=[
    {
        "title":"t1",
        "description":"d1",
        "id":1,
    },
    {
        "title":"t2",
        "description":"d2",
        "id":2,
    },
    {
        "title":"t3",
        "description":"d3",
        "id":3,
    },
    {
        "title":"t4",
        "description":"d4",
        "id":4,
    },
    {
        "title":"t5",
        "description":"d5",
        "id":5,
    },
    {
        "title":"t6",
        "description":"d6",
        "id":6,
    },
]

app.get('/todos',(req,res)=>{
   try {
    return res.status(200).json({todos})
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

app.delete('/todos/:id',(req,res)=>{
    try {
        
        return res.status(200).json({msg:"todo Updated"})
       } catch (error) {
        console.log(error)
        res.status(500).json({msg:"Internal Server error"})
       }
})
app.listen(3000,()=>{
    console.log("server created")
})