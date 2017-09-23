var http = require("http");
var fs = require("fs");
var ejs = require("ejs");
var jade = require("jade");
http.createServer(function(req,res){

 
    if(req.method=='GET'){
        
        
           if(req.url == '/'){
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
                }else if (req.url == '/ejs')
                {
                    fs.readFile('template.ejs','utf8',function (err,data){
                     if(!err){
                         var html = ejs.render(data,{name:'hong',description: 'hello,world for ejs'});
                         res.writeHead(200,{'Content-type':'text/html'});
                         res.end(html);
                }
                        
                    })        
                }else if(req.url =='/jade')
                {
                    fs.readFile('template.jade','utf8',function(err,data){
                        if(!err){
                            var fn = jade.compile(data);
                            var html = fn({name:'hong',description: 'hello,world for ejs'});
                           res.writeHead(200,{'Content-type':'text/html'});
                            res.end(html); 
                        }
                        
                    });
                }
     
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