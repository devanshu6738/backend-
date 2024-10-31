const http=require("http");
const fs=require("fs");
const server=http.createServer(function(req,res){
    console.log(req.url)
   const url=req.url;
   if (url=="/about"){
    let filepath=__dirname+"/index.html";
    fs.readFile(filepath,{encoding:"utf-8"},(error,data)=>{
        if(error){
            throw new Error("not found")
        }else{
            res.end(data);
        }
    })
   }else{
    let filepath=__dirname+"/index2.html";
    fs.readFile(filepath,{encoding:"utf-8"},(error,data)=>{
        if(error){
            throw new Error("not found")
        }else{
            res.end(data);
        }
    })
   }
    
   })

server.listen(3000,()=>{
    console.log("server running....")
})