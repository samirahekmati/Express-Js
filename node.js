const http = require ('http');

const server = http.createServer((req, res)=>{

// res =  our way of responding to the requester
// http message : 1.start(check) line 2.header 3.body
// writeHeade method takes two args: 1.status code 2.object for the mime-type
//HTTP Status Codes:Three-digit codes that indicate the outcome of a request, such as "200 OK" or "404 Not Found"

//header
res.writeHead(200, {'content-body': 'text/html'})//writes header

//body
res.write('<h1> Hello World form my sevrer! <h1>') //write body

res.end() //let the browser know that we are ready toclose the connection


})

server.listen(3000)