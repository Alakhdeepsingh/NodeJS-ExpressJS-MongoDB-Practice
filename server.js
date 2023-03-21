const http = require('http');
//http module : server ki response and request ko handle karta hai

// http.createServer((req,resp)=>{
//     resp.write("<h1>Alakh</h1>");
//     resp.end();
// }).listen(4500);
//createserver apne andar arrow function letta hai


http.createServer(data).listen(4100);

function data(req,resp){
    resp.write("<h1>Alakhdeep</h1>");
    resp.end();
}
