const express=require("express");
const app=express();
const PORT=3000;
const db=require("./connect")
const router=require("./routes/student");
const passport=require("passport")
const AuthStudent=require('./Auth')
app.use(express.json());
app.use(passport.initialize());

const localAuthMiddleware=passport.authenticate('local',{session:false})
app.use('/schooldata',router);
app.get('/',localAuthMiddleware,(req,res)=>{
    res.end("hey welcome to Ur profile")
})

app.listen(PORT,(req,res)=>{
    console.log(`Server is running at port ${PORT}`)
})