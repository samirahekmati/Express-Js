const http = require ('http'); //native node module 

//fs modeule gives node access to this computers file system
const fs = require ('fs')

//the http module has a createServer method that takes one call back F as an argument; the call back takes two args: 1.req 2.res
//whenever http req is made createserver will run;
const server = http.createServer((req, res)=>{
if(req.url === '/'){
// res =  our way of responding to the requester

// http message : 1.start(check) line 2.header 3.body
// writeHeade method takes two args: 1.status code 2.object for the mime-type
//HTTP Status Codes:Three-digit codes that indicate the outcome of a request, such as "200 OK" or "404 Not Found"

//header
res.writeHead(200, {'content-Type': 'text/html'})//writes header

//body
//res.write('<h1> This is the homepage! </h1>') //write body
const homePageHTML = fs.readFileSync('node.html', 'utf8');
console.log(homePageHTML)
res.write(homePageHTML)

res.end() //let the browser know that we are ready toclose the connection
} else {
            res.writeHead(404, { "content-Type": "text/html" }); //writes header
            res.write("<h1> Page not found! <h1>"); //write body
            res.end();
}

})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
  });//this server is listenening to the trafic on the port 3000