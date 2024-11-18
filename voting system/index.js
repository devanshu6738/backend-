const express=require("express")
const app=express();
const db=require("./config/dbconect")
const cors = require('cors');
const router=require("./routes/vote")
const path = require('path');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/vote',router);


app.listen(3000,()=>{
    console.log("server Created")
})