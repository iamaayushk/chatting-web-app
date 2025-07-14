    const http = require('http');
    const express= require('express');
    const connectDB= require('./config/db');
    const dotenv = require('dotenv');
    const cors= require('cors');

    const userRoutes = require('./routes/userRoutes');
    dotenv.config();
    connectDB();

    const app= express();
    const server = http.createServer(app);
    app.use(cors());
    app.use(express.json());

    app.use('/api', userRoutes);
    const PORT = process.env.PORT;
    server.listen(PORT,()=>{
        console.log(`server is running on port ${process.env.PORT}`);
        
    })
