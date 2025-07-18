const mongoose = require('mongoose');
const connectDB= async()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    }
    catch(error){
        console.error("Error connecting to MongoDB");
        process.exit(); // Exit process with failure
    }
};
module.exports= connectDB;