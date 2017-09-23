var http = require('http');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //Return the url part of the request object:
  console.log("helloworld");

  res.write("helloworld");
  res.end();
  
}).listen(8080);

