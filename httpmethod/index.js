const http=require("http");

const app=http.createServer(function(req,res){
    if(req.method=="GET"){
        res.end("get method")
    }else if(req.method=="POST"){
        res.end("post request")
    }else if(req.method=="PUT"){
        res.end("put method")
    }else if(req.method=="DELETE"){
        res.end("delete method")
    }else if(req.method=="PATCH"){
        res.end("patch method")
    }
})

app.listen(3000,()=>{
    console.log("server is running at port 3000")
})