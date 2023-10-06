const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
   /* if(req.url === '/'){
       fs.readFile(path.join(__dirname,'index.html'),
       (err, content)=>{
        if(err) throw err;
         res.writeHead(200,{'Content-Type':'text/html'})
         res.end(content)
       })
    }
    if(req.url === '/api/users'){
        const person = [
            {name:"john", age:15},
            {name:"josh", age:18},
        ];
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(person))
    }*/

    const filepath = path.join(__dirname, req.url === '/'? 'index.html' : req.url)

    const ext = path.extname(filepath)

    let ContentType = 'text/html'

    switch(ext){
        case '.js':
            content = 'text/javascript';
            break;
        case '.css':
            content = 'text/css';
            break;
        case '.json':
            content = 'application/json';
            break;
        case '.png':
            content = 'image/png';
            break;
        case '.jpg':
            content = 'image/jpg';
            break;
    }

    fs.readFile(filepath, (err, content)=>{
        if(err){
            if(err.code=='ENOENT'){
                fs.readFile(path.join(__dirname,'404.html'), (err, content)=>{
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                })
            }else{
                    //server error
                    res.writeHead(500);
                    res.end(`server error ${err.code}`);
                }
        }else{
                res.writeHead(200,{'Content-Type': ContentType});
                res.end(content, 'utf8');
            }
    })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>console.log("server is listening on the" + PORT))