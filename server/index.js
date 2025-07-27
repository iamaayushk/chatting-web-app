    const http = require('http');
    const express= require('express');
    const connectDB= require('./config/db');
    const dotenv = require('dotenv');
    const cors= require('cors');
    const {Server} = require('socket.io');

    const userRoutes = require('./routes/userRoutes');
    dotenv.config();
    connectDB();
    const app= express();
    app.use(express.json());

    const server = http.createServer(app);
    const io= new Server(server,{
        cors:{
            origin:"http://localhost:5173",
            methods:["GET","POST"],
            credentials: true,
        }
    });

    app.use(
        cors({
            origin: "http://localhost:5173",
            methods: ["GET", "POST"],
            credentials: true,
        })
    );
    io.on("connection",(socket)=>{
        console.log("user connected");
        console.log("userid", socket.id);
        // socket.emit("welcome",`welcome to the server ${socket.id}`);
        socket.broadcast.emit("welcome",`welcome to the server ${socket.id}`);//this will send to all users except the one who connected
        
    })


   

    app.use('/api', userRoutes);
    const PORT = process.env.PORT;
    server.listen(PORT,()=>{
        console.log(`server is running on port ${process.env.PORT}`);
        
    })
