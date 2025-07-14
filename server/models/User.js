const mongoose=require('mongoose');
const userSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    pic:{
        type:String,
        default:"https://iconarchive.com/download/i107272/Flat-Design/Flat-Design-User-Avatar-2.ico"
    },
    timestamps:{
        type:Date,
        default:Date.now
    }
});
module.exports= mongoose.model('User',userSchema);