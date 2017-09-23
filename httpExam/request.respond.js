var http = require("http");
var fs = require("fs");
http.createServer(function(req,res){
    if(req.method=='GET'){
        console.log(req.url+" GET");
        fs.readFile("index.html", function(err,data){
            if(!err){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(data);
            } else {
                res.writeHead(404);
                res.end();
            }
        });
    }else if(req.method =='POST'){
        console.log(req.url+ " Post");
       
       req.on('data',function(data){
        res.writeHead(200,{'Content-type' : 'text/html'});
        res.end('<h1>'+ data+'</h1>');   
       });
    }
    
}).listen(8080,function(){
    
    console.log("server running..");
});