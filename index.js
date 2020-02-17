const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParse = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParse.json());

app.all('/dishes', (req, res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    next();
});
app.get('/dishes',(req,res, next)=>{
    res.end('Will send all the dishes to you');
});
app.post('/dishes',(req,res, next)=> {
    res.end('Will add the dish: '+req.body.name+' with details: '+req.body.description);
});
app.put('/dishes',(req,res,next)=>{
    res.statusCode=403;
    res.end("Put operation not supported on dishes");
});
app.delete('/dishes',(req,res,next)=>{
    res.statusCode=403;
    res.end("Deleting all the dishes");
});
app.get('/dishes/:dishId',(req,res, next)=>{
    res.end('Will send all the dishes'+req.params.dishId+' to you');
});
app.post('/dishes/:dishId',(req,res, next)=> {
    res.end('Post operatin not');
});
app.put('/dishes/:dishId',(req,res,next)=>{
    res.statusCode=403;
    res.end("Will update dishes/"+req.params.dishId);
});
app.delete('/dishes/:dishId',(req,res,next)=>{
    res.statusCode=403;
    res.end('Deleting dish: '+ req.params.dishId);
});

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