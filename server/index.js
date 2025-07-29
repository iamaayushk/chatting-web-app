const express= require('express');
const http = require('http');
const app= express();
const server= http.createServer(app);
const {Server} = require("socket.io");
const cors = require('cors');

const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        method:["GET","POST"],
        credentials:true
    }
})


io.on("connection",(socket)=>{
    console.log("User connected",socket.id);

    socket.on("send-message",(data)=>{
        console.log("message recieved",data);
        io.emit("receive-message",data);
        
    })
    socket.on("disconnect",()=>{
        console.log("user disconnected" + socket.id);
    });
})

server.listen(3000,()=>{
    console.log(`server is running on port 3000`);
})