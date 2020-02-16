const express = require('express');
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname+"/public"));

app.use((req,res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-type','application/json');
    res.end("{name:shubham,rollno:153}");
});

const server = http.createServer(app);
server.listen(port, hostname, ()=> {
    console.log(`server running at http://${hostname}:${port}`);
})