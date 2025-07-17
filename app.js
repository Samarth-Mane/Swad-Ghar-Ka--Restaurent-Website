const http = require('http')
const fs = require('fs');
const path = require('path');


let server = http.createServer((req,res)=>{
res.setHeader('Content-Type','text/html');
res.setHeader('Content-Type','text/css');
    let path = '';
    switch(req.url){
        case '/':
            path+='resto.html';
            break;
        case '/signin':
            path+='signin.html';
            break;
        case '/about':
            path+='about.html';
            break;
        case '/contact_us':
            path+='contact.html';
            break;
        case '/rush_hours':
            path+='rush.html';
            break;    
        default:
            res.statusCode = 404;
            break;
    }
fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data); 
            res.end();
        }
    });
});

server.listen(3000,'localhost',()=>{
    console.log("listning to the event");
});
server.listen("8000")