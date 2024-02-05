const http = require('http')
const url= require('url')
const PORT= 8000;
const server= http.createServer((req,res)=>
{
    const URL = url.parse(req.url)
    ptname =URL.pathname;
    console.log(ptname)
    switch(ptname)
    {
         case '/':
         
            res.end("<h1> HOME PAGE </h1>")
            break;
        
        case '/about':
         
            res.end("<h1> ABOUT PAGE </h1>")
            break;
        default :
            res.end("<h1> invalid url </h1>")

        
    }
}
)
server.listen(PORT,console.log("server is started"));
