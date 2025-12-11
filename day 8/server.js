/*const http=require('http')

http.createServer((req,res)=>{
    res.end("node server is running");
}).listen(4000);*/


require('dotenv').config();
const mongoose=require('mongoose');
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log("error");
});
const express=require("express");

const server=express();
server.get('/',(req,res)=>{
    res.end("successssss");
})

server.get('/about',(req,res)=>{
    res.end("hello");
})
server.listen(5000);