const express=require("express")
const app=express();
const db=require("./config/dbconnect")
const routes=require("./routes/user");

app.use(express.json());
app.use('/user',routes);


app.listen(3000,(req,res)=>{
    console.log("server is running at port 3000")
    db();
})